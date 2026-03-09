import React from 'react';
import { TimeBlockElement } from './TimeShared';
import { MOCK_WEEKLY_DATA, CATEGORY_COLORS, TimeBlock } from './time-types';
import { Progress } from '@/components/ui/progress';
export function WeeklyPlan() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-bold uppercase tracking-widest text-os-muted">This Week's Schedule</h2>
        </div>
        <div className="overflow-x-auto custom-scrollbar pb-4">
          <div className="grid grid-cols-7 gap-2 min-h-[500px] min-w-[800px]">
            {MOCK_WEEKLY_DATA.days.map((day) => (
              <div key={day} className="flex flex-col gap-2">
                <div className="bg-os-card border border-os-border py-2 text-center rounded-lg">
                  <span className="text-xs font-bold text-white uppercase tracking-tighter">{day}</span>
                </div>
                <div className="flex-1 bg-os-card/30 border border-os-border/50 rounded-lg p-2 space-y-2">
                  {MOCK_WEEKLY_DATA.blocks
                    .filter(b => (b as any).day === day)
                    .map(block => (
                      <TimeBlockElement key={block.id} block={block as TimeBlock} />
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-os-muted">Weekly Metrics</h2>
        <div className="bg-os-card border border-os-border rounded-xl p-5 space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-os-muted">DEEP WORK TARGET</span>
              <span className="text-white">20 / 25h</span>
            </div>
            <Progress value={80} className="h-1.5 bg-os-bg" style={{ '--progress-background': '#0ea5e9' } as React.CSSProperties} />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-os-muted">EFFICIENCY SCORE</span>
              <span className="text-[#10b981]">92%</span>
            </div>
            <Progress value={92} className="h-1.5 bg-os-bg" style={{ '--progress-background': '#10b981' } as React.CSSProperties} />
          </div>
          <div className="pt-4 border-t border-os-border space-y-4">
            <div className="text-[10px] font-bold text-os-muted uppercase">Allocation</div>
            <div className="space-y-2">
              {Object.entries(CATEGORY_COLORS).map(([name, color]) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-xs text-os-text">{name}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-os-muted">
                    {name === 'Deep Work' ? '12h' : name === 'Health' ? '4h' : '6h'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded-xl p-4">
          <p className="text-xs text-[#0ea5e9] leading-relaxed italic">
            "Your schedule is the architectural drawing of your future self. Build with precision."
          </p>
        </div>
      </div>
    </div>
  );
}