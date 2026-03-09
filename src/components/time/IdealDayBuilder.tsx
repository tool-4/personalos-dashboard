import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CATEGORY_COLORS } from './time-types';
const HOURS = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);
export function IdealDayBuilder() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest text-os-muted">24-Hour Blueprint</h2>
          <Select defaultValue="deep-worker">
            <SelectTrigger className="w-48 bg-os-card border-os-border h-9 text-xs">
              <SelectValue placeholder="Select Template" />
            </SelectTrigger>
            <SelectContent className="bg-os-card border-os-border">
              <SelectItem value="deep-worker">Deep Worker</SelectItem>
              <SelectItem value="early-bird">Early Bird</SelectItem>
              <SelectItem value="night-owl">Night Owl</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-os-card border border-os-border rounded-xl p-6 relative overflow-hidden">
          <div className="space-y-0">
            {HOURS.map((hour) => (
              <div key={hour} className="flex group min-h-[40px] border-b border-os-border/30 last:border-0">
                <div className="w-16 shrink-0 text-[10px] font-mono font-bold text-os-muted py-2">
                  {hour}
                </div>
                <div className="flex-1 relative border-l border-os-border/50 px-4 py-2 hover:bg-white/5 transition-colors">
                  {hour === '09:00' && (
                    <div
                      className="absolute inset-x-2 top-0 bottom-[-80px] rounded-lg border-2 border-dashed border-[#0ea5e9]/40 bg-[#0ea5e9]/5 p-3 z-10"
                    >
                      <div className="text-[10px] font-bold text-[#0ea5e9] uppercase">Deep Work Block</div>
                      <div className="text-[9px] text-os-muted">Primary objective focus area</div>
                    </div>
                  )}
                  {hour === '07:00' && (
                    <div className="absolute inset-x-2 top-0 h-[40px] rounded-lg border-2 border-dashed border-[#10b981]/40 bg-[#10b981]/5 p-2 px-3 flex items-center">
                      <span className="text-[10px] font-bold text-[#10b981] uppercase">Morning Routine</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-os-muted">Projection Stats</h2>
        <div className="bg-os-card border border-os-border rounded-xl p-5 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-os-bg border border-os-border rounded-lg p-3">
              <div className="text-[10px] font-bold text-os-muted uppercase mb-1">Total Work</div>
              <div className="text-xl font-mono font-bold text-white">8.5h</div>
            </div>
            <div className="bg-os-bg border border-os-border rounded-lg p-3">
              <div className="text-[10px] font-bold text-os-muted uppercase mb-1">Total Sleep</div>
              <div className="text-xl font-mono font-bold text-[#8b5cf6]">7.5h</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-[10px] font-bold text-os-muted uppercase">Health Check</div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-os-text">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                Cognitive Load: Balanced
              </div>
              <div className="flex items-center gap-3 text-xs text-os-text">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                Movement Blocks: 3 Active
              </div>
              <div className="flex items-center gap-3 text-xs text-os-text">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                Deep Work: 4.5h Continuous
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}