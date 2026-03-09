import React from 'react';
import { Flame } from 'lucide-react';
export function GreetingCard() {
  return (
    <div className="bg-os-card border border-os-border rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="space-y-1 flex-1 w-full">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-white">Good morning, Alex.</h1>
          <div className="flex items-center gap-1.5 bg-os-bg border border-os-border px-2 py-0.5 rounded-full text-[10px] font-bold text-os-primary uppercase tracking-wider">
            <Flame className="w-3 h-3 fill-os-primary" />
            14 Day Streak
          </div>
        </div>
        <div className="flex items-center gap-3 w-full max-w-md">
          <span className="text-xs text-os-muted whitespace-nowrap">Today's Intention:</span>
          <input 
            type="text" 
            placeholder="Focus on the critical few..."
            className="flex-1 bg-transparent border-b border-os-border text-sm py-1 focus:outline-none focus:border-os-primary transition-colors text-os-text placeholder:text-os-muted/30"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <StatPill label="FOCUS" value="Deep" />
        <StatPill label="ENERGY" value="High" />
        <StatPill label="LEVEL" value="42" />
      </div>
    </div>
  );
}
function StatPill({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-os-bg border border-os-border rounded-lg px-3 py-2 min-w-[80px]">
      <div className="text-[10px] font-bold text-os-muted uppercase tracking-tighter mb-0.5">{label}</div>
      <div className="text-sm font-mono font-bold text-os-text">{value}</div>
    </div>
  );
}