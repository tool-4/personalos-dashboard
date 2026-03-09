import React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';
import { Statusbar } from './Statusbar';
interface PersonalLayoutProps {
  children: React.ReactNode;
}
export function PersonalLayout({ children }: PersonalLayoutProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="h-screen w-full flex flex-col overflow-hidden bg-os-bg text-os-text font-sans selection:bg-os-primary/20">
        <Topbar />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto custom-scrollbar bg-os-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
              {children}
            </div>
          </main>
        </div>
        <Statusbar />
      </div>
    </TooltipProvider>
  );
}