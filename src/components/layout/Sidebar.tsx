import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Target,
  Clock,
  Zap,
  Wallet,
  Brain,
  Settings2,
  Moon,
  Sun
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';
const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/', color: 'text-os-primary', activeBar: 'bg-os-primary' },
  { icon: Target, label: 'Goals', href: '/goals', color: 'text-os-goal', activeBar: 'bg-os-goal' },
  { icon: Clock, label: 'Timeline', href: '/timeline', color: 'text-os-time', activeBar: 'bg-os-time' },
  { icon: Zap, label: 'Health', href: '/health', color: 'text-os-health', activeBar: 'bg-os-health' },
  { icon: Wallet, label: 'Finance', href: '/finance', color: 'text-os-money', activeBar: 'bg-os-money' },
  { icon: Brain, label: 'Mindset', href: '/mindset', color: 'text-os-mind', activeBar: 'bg-os-mind' },
];
export function Sidebar() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const isActive = (href: string) => {
    if (href === '/' && location.pathname !== '/') return false;
    return location.pathname === href || (href !== '/' && location.pathname.startsWith(href));
  };
  return (
    <aside className="w-16 hidden md:flex flex-col items-center py-4 border-r border-os-border bg-os-bg z-40">
      <div className="flex-1 flex flex-col gap-4">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Link
                  to={item.href}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-lg transition-all group relative border border-transparent",
                    active ? "bg-white/5 border-os-border/50 text-white" : "text-os-muted hover:bg-white/5 hover:text-white"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 transition-colors", active ? item.color : "group-hover:text-white/80")} />
                  {active && (
                    <div className={cn("absolute left-[-12px] top-2 bottom-2 w-1 rounded-r-full shadow-[0_0_10px_rgba(0,0,0,0.5)]", item.activeBar)} />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="font-bold text-[10px] uppercase tracking-widest">{item.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-os-muted hover:bg-white/5 hover:text-white transition-colors"
            >
              {isDark ? (
                <Moon className="w-5 h-5 text-os-primary" />
              ) : (
                <Sun className="w-5 h-5 text-os-money" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-bold text-[10px] uppercase tracking-widest">
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg text-os-muted hover:bg-white/5 hover:text-white">
              <Settings2 className="w-5 h-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-bold text-[10px] uppercase tracking-widest">Settings</TooltipContent>
        </Tooltip>
      </div>
    </aside>
  );
}