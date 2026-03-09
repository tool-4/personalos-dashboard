import React from 'react';
import { Target, Clock, Zap, Wallet, Brain } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
const modules = [
  { icon: Target, title: 'Goals', value: '82%', label: 'Q2 Projects', color: '#6366f1', status: 'On Track', progress: 82 },
  { icon: Clock, title: 'Time', value: '4.2h', label: 'Deep Work', color: '#0ea5e9', status: 'Good', progress: 75 },
  { icon: Zap, title: 'Health', value: '92', label: 'Sleep Score', color: '#10b981', status: 'Peak', progress: 92 },
  { icon: Wallet, title: 'Money', value: '$12.4k', label: 'Net Change', color: '#f59e0b', status: '+2.4%', progress: 68 },
  { icon: Brain, title: 'Mind', value: '15m', label: 'Meditation', color: '#8b5cf6', status: 'Daily', progress: 50 },
];
export function ModuleWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {modules.map((m) => (
        <div key={m.title} className="bg-os-card border border-os-border rounded-xl p-4 flex flex-col gap-4 group hover:border-os-border/80 transition-all">
          <div className="flex items-center justify-between">
            <div className="p-2 rounded-lg bg-os-bg border border-os-border">
              <m.icon className="w-4 h-4" style={{ color: m.color }} />
            </div>
            <span className="text-[10px] font-mono font-bold text-os-muted uppercase">{m.status}</span>
          </div>
          <div>
            <div className="text-2xl font-mono font-bold text-white">{m.value}</div>
            <div className="text-xs text-os-muted">{m.label}</div>
          </div>
          <div className="space-y-1.5 mt-auto">
            <div className="flex justify-between text-[10px] font-bold text-os-muted">
              <span>PROGRESS</span>
              <span>{m.progress}%</span>
            </div>
            <Progress
              value={m.progress}
              className="h-1 bg-os-bg"
              style={{ '--progress-background': m.color } as React.CSSProperties}
            />
          </div>
        </div>
      ))}
    </div>
  );
}