import React from 'react';
export function Statusbar() {
  return (
    <footer className="h-8 w-full border-t border-os-border bg-os-status px-6 flex items-center justify-between text-[10px] uppercase tracking-widest font-mono text-os-muted/60 select-none">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-os-primary animate-pulse" />
          <span>System Active</span>
        </div>
        <span className="text-os-border">|</span>
        <span>Last sync: 2 minutes ago</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <kbd className="px-1 py-0.5 bg-os-card border border-os-border rounded leading-none">Ctrl</kbd>
          <kbd className="px-1 py-0.5 bg-os-card border border-os-border rounded leading-none">K</kbd>
          <span>Quick Search</span>
        </div>
        <span className="text-os-border">|</span>
        <span>v0.1.0-alpha</span>
      </div>
    </footer>
  );
}