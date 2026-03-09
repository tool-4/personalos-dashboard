import React from 'react';
import { 
  LayoutDashboard, 
  Target, 
  Clock, 
  Zap, 
  Wallet, 
  Brain, 
  Settings2, 
  Moon 
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true, color: 'text-os-primary' },
  { icon: Target, label: 'Goals', color: 'text-os-goal' },
  { icon: Clock, label: 'Timeline', color: 'text-os-time' },
  { icon: Zap, label: 'Health', color: 'text-os-health' },
  { icon: Wallet, label: 'Finance', color: 'text-os-money' },
  { icon: Brain, label: 'Mindset', color: 'text-os-mind' },
];
export function Sidebar() {
  return (
    <aside className="w-16 hidden md:flex flex-col items-center py-4 border-r border-os-border bg-os-bg z-40">
      <div className="flex-1 flex flex-col gap-4">
        {navItems.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <button className={cn(
                "w-10 h-10 flex items-center justify-center rounded-lg transition-all group relative",
                item.active ? "bg-os-primary/10 text-os-primary" : "text-os-muted hover:bg-white/5 hover:text-white"
              )}>
                <item.icon className="w-5 h-5" />
                {item.active && <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-os-primary rounded-r-full" />}
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg text-os-muted hover:bg-white/5 hover:text-white">
              <Moon className="w-5 h-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">Dark Mode</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg text-os-muted hover:bg-white/5 hover:text-white">
              <Settings2 className="w-5 h-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </div>
    </aside>
  );
}