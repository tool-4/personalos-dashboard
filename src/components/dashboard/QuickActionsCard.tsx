import React from 'react';
import { Plus, Timer, Moon, MessageSquare, ListTodo, Zap } from 'lucide-react';
const actions = [
  { icon: Plus, label: 'Add Entry' },
  { icon: Timer, label: 'Start Flow' },
  { icon: ListTodo, label: 'New Task' },
  { icon: Zap, label: 'Quick Log' },
  { icon: Moon, label: 'Night Mode' },
  { icon: MessageSquare, label: 'Mind Dump' },
];
export function QuickActionsCard() {
  return (
    <div className="bg-os-card border border-os-border rounded-xl p-5 h-full">
      <h2 className="text-[10px] font-bold text-os-muted uppercase tracking-wider mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button 
            key={action.label}
            className="flex items-center gap-3 p-3 rounded-lg bg-[#2a2a2a]/30 border border-os-border hover:border-os-primary/40 hover:bg-os-primary/5 transition-all text-sm group"
          >
            <action.icon className="w-4 h-4 text-os-muted group-hover:text-os-primary" />
            <span className="font-medium text-os-muted group-hover:text-os-text">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}