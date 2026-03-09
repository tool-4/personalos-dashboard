import React from 'react';
import { Hexagon, Bell, Command, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { format } from 'date-fns';
export function Topbar() {
  const today = new Date();
  return (
    <header className="h-12 w-full border-b border-os-border bg-os-bg flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-3">
        <Hexagon className="w-5 h-5 text-os-primary fill-os-primary/10" />
        <span className="font-semibold text-sm tracking-tight text-white">PersonalOS</span>
      </div>
      <div className="hidden md:flex items-center gap-4 text-xs font-medium text-os-muted">
        <span>{format(today, 'EEEE, MMMM do')}</span>
        <span className="w-1 h-1 rounded-full bg-os-border" />
        <span>Week 18, 2024</span>
      </div>
      <div className="flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="p-1.5 hover:bg-white/5 rounded-md transition-colors text-os-muted hover:text-white">
              <Search className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Search</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="relative p-1.5 hover:bg-white/5 rounded-md transition-colors text-os-muted hover:text-white">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-os-primary rounded-full border border-os-bg" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Notifications</TooltipContent>
        </Tooltip>
        <div className="h-4 w-px bg-os-border mx-1" />
        <div className="flex items-center gap-2 pl-1 cursor-pointer group">
          <Avatar className="h-7 w-7 border border-os-border">
            <AvatarImage src="" />
            <AvatarFallback className="bg-os-primary text-os-status text-[10px] font-bold">AS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}