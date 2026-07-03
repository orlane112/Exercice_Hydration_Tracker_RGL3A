import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface AndroidEmulatorProps {
  children: React.ReactNode;
}

export function AndroidEmulator({ children }: AndroidEmulatorProps) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="android-emulator" className="relative mx-auto w-full max-w-[380px] h-[780px] bg-neutral-950 rounded-[48px] p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border-4 border-neutral-800 ring-12 ring-neutral-900 flex flex-col overflow-hidden">
      {/* Speaker grill / Ear piece & Camera cutout (Dynamic Island style or punch-hole) */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-50 flex items-center justify-center">
        {/* Camera sensor */}
        <div className="w-3.5 h-3.5 bg-neutral-900 rounded-full border border-neutral-800 ml-auto mr-4 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-blue-950 rounded-full"></div>
        </div>
        {/* Speaker line */}
        <div className="w-10 h-1 bg-neutral-800 rounded-full absolute left-4"></div>
      </div>

      {/* Screen Frame with rounded corners */}
      <div className="relative w-full h-full bg-neutral-900 rounded-[38px] overflow-hidden flex flex-col border border-neutral-800">
        
        {/* Status Bar */}
        <div className="h-10 px-6 pt-2 flex justify-between items-center text-xs font-medium text-neutral-300 select-none z-40 bg-neutral-950">
          <span className="text-[11px] font-semibold">{time}</span>
          <div className="flex items-center gap-1.5">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <div className="flex items-center gap-0.5">
              <Battery className="w-4 h-4" />
              <span className="text-[9px] font-bold">85%</span>
            </div>
          </div>
        </div>

        {/* Content of the Screen */}
        <div className="flex-1 flex flex-col bg-neutral-950 overflow-y-auto overflow-x-hidden relative">
          {children}
        </div>

        {/* Android Navigation Gesture Bar */}
        <div className="h-6 w-full flex items-center justify-center bg-neutral-950 z-40">
          <div className="w-32 h-1 bg-neutral-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
