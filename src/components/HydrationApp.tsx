import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplet, RotateCcw, Plus, Trash2, Settings, X, Check, Award } from 'lucide-react';
import { useWaterViewModel } from '../hooks/useWaterViewModel';

export function HydrationApp() {
  const {
    currentAmount,
    goalAmount,
    logs,
    addWater,
    resetWater,
    updateGoal,
  } = useWaterViewModel();

  const [showSettings, setShowSettings] = useState(false);
  const [tempGoal, setTempGoal] = useState<number>(goalAmount);
  const [justAdded, setJustAdded] = useState(false);

  // Calculate progress percent
  const percent = Math.min(Math.round((currentAmount / goalAmount) * 100), 100);
  
  // Calculate SVG stroke attributes
  const radius = 90;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  const handleAddWater = () => {
    addWater(250);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 500);
  };

  const handleSaveSettings = () => {
    updateGoal(tempGoal);
    setShowSettings(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-neutral-950 text-neutral-100 font-sans relative select-none">
      
      {/* Header of the App */}
      <div className="px-6 py-4 flex justify-between items-center bg-neutral-900/60 backdrop-blur-md border-b border-neutral-800 sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-cyan-950 rounded-lg text-cyan-400">
            <Droplet className="w-5 h-5 fill-cyan-400" />
          </div>
          <span className="font-bold text-neutral-100 tracking-tight">Oasis Tracker</span>
        </div>
        
        <button 
          onClick={() => {
            setTempGoal(goalAmount);
            setShowSettings(true);
          }}
          className="p-2 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400 hover:text-cyan-400"
          title="Paramètres de l'objectif"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Main Hydration Dashboard */}
      <div className="flex-1 p-6 flex flex-col items-center gap-6 overflow-y-auto">
        
        {/* Circle Progress Tracker */}
        <div className="relative w-60 h-60 flex items-center justify-center mt-2">
          
          {/* SVG Progress Circle */}
          <svg className="w-full h-full transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx="120"
              cy="120"
              r={radius}
              className="stroke-neutral-800/80 fill-none"
              strokeWidth={strokeWidth}
            />
            {/* Foreground Glow Circle */}
            {percent > 0 && (
              <circle
                cx="120"
                cy="120"
                r={radius}
                className="stroke-cyan-400/20 fill-none blur-[4px]"
                strokeWidth={strokeWidth + 4}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            )}
            {/* Foreground Progress Circle */}
            <circle
              cx="120"
              cy="120"
              r={radius}
              className="stroke-cyan-400 fill-none transition-all duration-800 ease-out"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Internal Content of Circle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            {/* Animated droplet */}
            <motion.div
              animate={justAdded ? { scale: [1, 1.3, 1], y: [0, -10, 0] } : { scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-cyan-400 mb-1"
            >
              <Droplet className="w-9 h-9 fill-cyan-400" />
            </motion.div>

            {/* Percentage */}
            <span className="text-4xl font-black text-neutral-100 tracking-tight">
              {percent}%
            </span>

            {/* Vol consumed / Goal */}
            <span className="text-xs font-mono text-neutral-400 mt-1 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
              {currentAmount} / {goalAmount} ml
            </span>
          </div>

          {/* Liquid Wave Effect on goal complete */}
          {percent >= 100 && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 rounded-full border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center pointer-events-none"
            >
              <div className="absolute top-2 bg-cyan-400 text-neutral-950 font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1">
                <Award className="w-3 h-3" /> Complété
              </div>
            </motion.div>
          )}
        </div>

        {/* Motivational Tip or Status */}
        <div className="w-full text-center">
          <p className="text-sm text-neutral-300">
            {percent === 0 && "Commencez votre journée en buvant un verre d'eau ! ☀️"}
            {percent > 0 && percent < 50 && "Excellent début ! Continuez ainsi. 🌱"}
            {percent >= 50 && percent < 80 && "Vous êtes à plus de la moitié du chemin ! 💧"}
            {percent >= 80 && percent < 100 && "Presque au but ! Encore un petit effort. 🔥"}
            {percent >= 100 && "Félicitations ! Objectif d'hydratation atteint ! 🎉"}
          </p>
        </div>

        {/* Buttons Control Panel */}
        <div className="w-full grid grid-cols-2 gap-4 mt-2">
          
          {/* Main +250ml Action Button with Turquoise accents */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleAddWater}
            className="h-14 bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_4px_20px_-2px_rgba(6,182,212,0.4)] hover:shadow-[0_4px_25px_0px_rgba(6,182,212,0.6)]"
          >
            <Plus className="w-5 h-5 stroke-[3]" />
            <span>+ 250 ml</span>
          </motion.button>

          {/* Reset Action Button */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={resetWater}
            className="h-14 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 font-semibold rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-neutral-400" />
            <span>Reset</span>
          </motion.button>
        </div>

        {/* Dynamic Water Logs History List */}
        <div className="w-full flex-1 flex flex-col min-h-0 mt-2">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Historique d'aujourd'hui</span>
            <span className="text-[11px] font-mono text-neutral-500">{logs.length} enregistrement(s)</span>
          </div>

          <div className="flex-1 overflow-y-auto pr-1 space-y-2.5 min-h-[140px]">
            <AnimatePresence initial={false}>
              {logs.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-28 border border-dashed border-neutral-800 rounded-2xl flex flex-col items-center justify-center text-center p-4 text-neutral-500"
                >
                  <Droplet className="w-6 h-6 stroke-1 mb-2 text-neutral-600" />
                  <span className="text-xs">Aucune boisson enregistrée aujourd'hui</span>
                  <span className="text-[10px] text-neutral-600 mt-0.5">Appuyez sur +250 ml pour commencer</span>
                </motion.div>
              ) : (
                logs.map((log) => {
                  const formattedTime = log.timestamp.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit'
                  });
                  return (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 50, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700/80 p-3 rounded-xl flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-950/50 flex items-center justify-center text-cyan-400">
                          <Droplet className="w-4 h-4 fill-cyan-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-neutral-200">Eau ajoutée</span>
                          <span className="text-[10px] font-mono text-neutral-500">{formattedTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          +{log.amountMs} ml
                        </span>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide-Up Overlay Settings Dialog */}
      <AnimatePresence>
        {showSettings && (
          <div className="absolute inset-0 z-50">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
              className="absolute inset-0 bg-black"
            />
            {/* Form */}
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="absolute bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 rounded-t-3xl p-6 flex flex-col gap-5"
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-neutral-100">Modifier l'objectif</span>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="p-1 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400 hover:text-neutral-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Goal preset sliders/inputs */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Objectif quotidien (ml)</label>
                <div className="flex items-center gap-4 bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                  <input
                    type="range"
                    min="1000"
                    max="4000"
                    step="250"
                    value={tempGoal}
                    onChange={(e) => setTempGoal(parseInt(e.target.value, 10))}
                    className="flex-1 accent-cyan-400 h-1.5 cursor-pointer rounded-full"
                  />
                  <span className="font-mono text-sm font-bold text-cyan-400 min-w-[70px] text-right">
                    {(tempGoal / 1000).toFixed(2)}L
                  </span>
                </div>
              </div>

              {/* Presets */}
              <div className="grid grid-cols-3 gap-2">
                {[1500, 2000, 3000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setTempGoal(preset)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      tempGoal === preset 
                        ? 'bg-cyan-950 text-cyan-400 border-cyan-500/50' 
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {preset / 1000}L
                  </button>
                ))}
              </div>

              {/* Confirm / Cancel Actions */}
              <button
                onClick={handleSaveSettings}
                className="w-full h-12 bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Enregistrer</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
