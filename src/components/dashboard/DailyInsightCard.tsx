import React from 'react';
import { Quote } from 'lucide-react';
export function DailyInsightCard() {
  return (
    <div className="bg-os-card border border-os-border rounded-xl p-5 h-full flex flex-col">
      <h2 className="text-[10px] font-bold text-os-muted uppercase tracking-wider mb-4">Daily Insight</h2>
      <div className="flex-1 flex flex-col justify-center py-4">
        <Quote className="w-8 h-8 text-os-primary/20 mb-2" />
        <blockquote className="border-l-2 border-os-primary/30 pl-4 text-lg font-medium text-os-text italic leading-relaxed">
          "The secret of change is to focus all of your energy, not on fighting the old, but on building the new."
        </blockquote>
        <cite className="block mt-3 pl-4 text-xs text-os-muted not-italic">— Socrates</cite>
      </div>
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-os-border">
        <div className="bg-os-bg border border-os-border rounded-lg p-3">
          <div className="text-[10px] font-bold text-os-muted uppercase tracking-tighter mb-1">Focus Score</div>
          <div className="text-xl font-mono font-bold text-os-primary">A+</div>
        </div>
        <div className="bg-os-bg border border-os-border rounded-lg p-3">
          <div className="text-[10px] font-bold text-os-muted uppercase tracking-tighter mb-1">Decisions</div>
          <div className="text-xl font-mono font-bold text-os-text">12/15</div>
        </div>
      </div>
    </div>
  );
}