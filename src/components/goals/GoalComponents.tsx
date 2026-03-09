import React from 'react';
import { Search, Sparkles, CheckCircle2, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
export function SelfAssessmentBanner() {
  return (
    <div className="bg-[#6366f1] rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
      <div className="relative z-10 space-y-1">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Sparkles className="w-5 h-5 fill-white" />
          Quarterly Goal Review Due
        </h3>
        <p className="text-indigo-100 text-sm max-w-md">
          Evaluate your performance across all life areas to ensure you are focusing on the critical few.
        </p>
      </div>
      <Button variant="secondary" className="relative z-10 bg-white text-indigo-600 hover:bg-white/90 border-none px-8">
        Update Now
      </Button>
    </div>
  );
}
export function FilterBar() {
  const categories = ['All', 'Health', 'Career', 'Finance', 'Projects', 'Mindset'];
  const [active, setActive] = React.useState('All');
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="relative w-full md:max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-os-muted" />
        <Input 
          placeholder="Search goals..." 
          className="pl-9 bg-os-card border-os-border text-sm h-10"
        />
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium border transition-all",
              active === cat 
                ? "bg-[#6366f1]/20 border-[#6366f1] text-[#6366f1]" 
                : "bg-os-card border-os-border text-os-muted hover:border-os-muted/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
interface Milestone {
  id: string;
  title: string;
  completed: boolean;
  status?: string;
}
export function MilestoneList({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="space-y-3">
      {milestones.map((m) => (
        <div key={m.id} className="flex items-center gap-3 p-3 rounded-lg bg-os-bg border border-os-border group hover:border-[#6366f1]/30 transition-all">
          <button className="shrink-0 text-os-muted hover:text-[#6366f1] transition-colors">
            {m.completed ? <CheckCircle2 className="w-5 h-5 text-[#6366f1]" /> : <Circle className="w-5 h-5" />}
          </button>
          <span className={cn("text-sm font-medium flex-1", m.completed && "text-os-muted line-through")}>
            {m.title}
          </span>
          {m.status && (
            <span className="text-[10px] font-bold text-os-muted uppercase px-2 py-0.5 rounded border border-os-border">
              {m.status}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}