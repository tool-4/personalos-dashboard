import React from 'react';
import { CalendarDays, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
const events = [
  { time: '08:00', task: 'Morning Routine & Sunlight', tag: 'Health', completed: true },
  { time: '09:00', task: 'Deep Work: OS Architecture', tag: 'Goal', completed: true },
  { time: '12:00', task: 'Lunch Break & Espresso', tag: 'Mind', active: true },
  { time: '13:30', task: 'Client Review Meeting', tag: 'Goal', completed: false },
  { time: '15:00', task: 'Gym: Upper Body Session', tag: 'Health', completed: false },
];
export function TimelineCard() {
  return (
    <div className="bg-os-card border border-os-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-os-primary" />
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">Today's Timeline</h2>
        </div>
        <button className="text-[10px] font-bold text-os-muted hover:text-os-primary flex items-center gap-1 uppercase transition-colors">
          View Calendar <ChevronRight className="w-3 h-3" />
        </button>
      </div>
      <div className="space-y-1 relative">
        <div className="absolute left-[39px] top-2 bottom-2 w-px bg-os-border" />
        {events.map((event, i) => (
          <div 
            key={i} 
            className={cn(
              "flex items-center gap-4 p-3 rounded-lg transition-all",
              event.active ? "bg-os-primary/5 border border-os-primary/20 shadow-[0_0_20px_-10px_rgba(62,207,142,0.2)]" : "hover:bg-white/5"
            )}
          >
            <span className="w-10 text-[10px] font-mono font-bold text-os-muted shrink-0">{event.time}</span>
            <div className={cn(
              "w-2 h-2 rounded-full border-2 border-os-bg z-10",
              event.completed ? "bg-os-primary" : event.active ? "bg-os-primary animate-ping" : "bg-os-border"
            )} />
            <div className="flex-1">
              <div className={cn("text-sm font-medium", event.completed ? "text-os-muted line-through" : "text-os-text")}>
                {event.task}
              </div>
            </div>
            <div className="text-[10px] font-bold px-2 py-0.5 rounded border border-os-border text-os-muted uppercase">
              {event.tag}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-4 border-t border-os-border">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold text-os-muted uppercase">Daily Velocity</span>
          <span className="text-[10px] font-mono text-os-primary">45% Completed</span>
        </div>
        <div className="h-1.5 w-full bg-os-bg rounded-full overflow-hidden">
          <div className="h-full bg-os-primary rounded-full" style={{ width: '45%' }} />
        </div>
      </div>
    </div>
  );
}