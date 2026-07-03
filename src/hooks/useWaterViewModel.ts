import { useState, useEffect } from 'react';
import { WaterLog } from '../types';

export function useWaterViewModel() {
  const [currentAmount, setCurrentAmount] = useState<number>(0);
  const [goalAmount, setGoalAmount] = useState<number>(2000); // 2L Default
  const [logs, setLogs] = useState<WaterLog[]>([]);

  // Load from LocalStorage
  useEffect(() => {
    const savedAmount = localStorage.getItem('water_current_amount');
    const savedGoal = localStorage.getItem('water_goal_amount');
    const savedLogs = localStorage.getItem('water_logs');

    if (savedAmount) setCurrentAmount(parseInt(savedAmount, 10));
    if (savedGoal) setGoalAmount(parseInt(savedGoal, 10));
    if (savedLogs) {
      try {
        const parsedLogs = JSON.parse(savedLogs);
        // Map string dates to Date objects
        const formattedLogs = parsedLogs.map((log: any) => ({
          ...log,
          timestamp: new Date(log.timestamp),
        }));
        setLogs(formattedLogs);
      } catch (e) {
        console.error('Error parsing water logs', e);
      }
    }
  }, []);

  // Save to LocalStorage helper
  const saveState = (amount: number, goal: number, currentLogs: WaterLog[]) => {
    localStorage.setItem('water_current_amount', amount.toString());
    localStorage.setItem('water_goal_amount', goal.toString());
    localStorage.setItem('water_logs', JSON.stringify(currentLogs));
  };

  const addWater = (amountMl: number) => {
    setCurrentAmount((prev) => {
      const nextAmount = Math.min(prev + amountMl, 5000); // capped at 5L for safety
      const newLog: WaterLog = {
        id: Math.random().toString(36).substring(2, 9),
        amountMs: amountMl,
        timestamp: new Date(),
      };
      const updatedLogs = [newLog, ...logs];
      setLogs(updatedLogs);
      saveState(nextAmount, goalAmount, updatedLogs);
      return nextAmount;
    });
  };

  const resetWater = () => {
    setCurrentAmount(0);
    setLogs([]);
    saveState(0, goalAmount, []);
  };

  const updateGoal = (newGoalMl: number) => {
    if (newGoalMl >= 500 && newGoalMl <= 10000) {
      setGoalAmount(newGoalMl);
      saveState(currentAmount, newGoalMl, logs);
    }
  };

  return {
    currentAmount,
    goalAmount,
    logs,
    addWater,
    resetWater,
    updateGoal,
  };
}
