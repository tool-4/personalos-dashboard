import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Timer as TimerIcon, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function FocusTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [totalTime, setTotalTime] = useState(25 * 60);
  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const setPreset = (mins: number) => {
    const total = mins * 60;
    setTotalTime(total);
    setTimeLeft(total);
    setIsActive(false);
  };
  const progress = (timeLeft / totalTime) * 100;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div className="flex flex-col items-center gap-12 max-w-2xl mx-auto py-8">
      <div className="relative w-64 h-64 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="128" cy="128" r={radius} stroke="currentColor" strokeWidth="6" fill="transparent" className="text-os-border" />
          <motion.circle 
            cx="128" cy="128" r={radius} stroke="currentColor" strokeWidth="6" fill="transparent" className="text-[#0ea5e9]" 
            strokeDasharray={circumference} 
            animate={{ strokeDashoffset: offset }}
            transition={{ type: 'tween', ease: 'linear' }}
            strokeLinecap="round" 
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-mono font-bold text-white tabular-nums">{formatTime(timeLeft)}</span>
          <span className="text-[10px] font-bold text-os-muted uppercase tracking-widest mt-1">
            {isActive ? 'Session Active' : 'Ready'}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex items-center justify-center gap-4">
          <Button 
            onClick={() => setPreset(25)} 
            variant="outline" 
            className="border-os-border bg-os-card hover:border-[#0ea5e9] text-xs h-9"
          >
            25m
          </Button>
          <Button 
            onClick={() => setPreset(50)} 
            variant="outline" 
            className="border-os-border bg-os-card hover:border-[#0ea5e9] text-xs h-9"
          >
            50m
          </Button>
          <Button 
            onClick={() => setPreset(90)} 
            variant="outline" 
            className="border-os-border bg-os-card hover:border-[#0ea5e9] text-xs h-9"
          >
            90m
          </Button>
        </div>
        <div className="flex items-center justify-center gap-6">
          <button 
            onClick={() => setIsActive(!isActive)}
            className="w-16 h-16 rounded-full bg-[#0ea5e9] text-os-status flex items-center justify-center transition-transform active:scale-95 hover:scale-105 shadow-lg shadow-[#0ea5e9]/20"
          >
            {isActive ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </button>
          <button 
            onClick={() => setTimeLeft(totalTime)}
            className="w-12 h-12 rounded-full border border-os-border text-os-muted flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
        <div className="bg-os-card border border-os-border rounded-xl p-5 space-y-4">
          <h3 className="text-[10px] font-bold text-os-muted uppercase tracking-widest flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3" /> Recent Sessions
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Deep Work: OS UI', duration: '50m', time: '10:15 AM' },
              { label: 'Technical Review', duration: '25m', time: '09:00 AM' },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-os-border last:border-0">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-white">{s.label}</span>
                  <span className="text-[10px] font-mono text-os-muted">{s.time}</span>
                </div>
                <span className="text-[10px] font-bold text-[#0ea5e9] uppercase">{s.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}