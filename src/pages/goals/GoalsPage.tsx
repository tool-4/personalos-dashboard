import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ListChecks, ChevronDown } from 'lucide-react';
import { PersonalLayout } from '@/components/layout/PersonalLayout';
import { Button } from '@/components/ui/button';
import { SelfAssessmentBanner, FilterBar } from '@/components/goals/GoalComponents';
import { GoalCard } from '@/components/goals/GoalCard';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
const activeGoals = [
  { id: '1', title: 'Lose 10kg through Keto and Strength Training', category: 'Health & Fitness', progress: 65, deadline: 'Jun 30', daysRemaining: 42, color: '#10b981' },
  { id: '2', title: 'Read 24 books on system architecture and philosophy', category: 'Learning & Growth', progress: 38, deadline: 'Dec 31', daysRemaining: 215, color: '#6366f1' },
  { id: '3', title: 'Launch PersonalOS v1.0 on Product Hunt', category: 'Personal Projects', progress: 82, deadline: 'May 15', daysRemaining: 12, color: '#8b5cf6' },
];
export function GoalsPage() {
  return (
    <PersonalLayout>
      <div className="space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Goal System</h1>
            <p className="text-sm text-os-muted">Strategic alignment and execution tracker.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" className="border-os-border bg-os-card hover:bg-white/5">
              <Link to="/goals/review">
                <ListChecks className="w-4 h-4 mr-2 text-os-muted" />
                Weekly Review
              </Link>
            </Button>
            <Button asChild className="bg-[#6366f1] hover:bg-[#4f46e5] text-white">
              <Link to="/goals/new">
                <Plus className="w-4 h-4 mr-2" />
                New Goal
              </Link>
            </Button>
          </div>
        </header>
        <SelfAssessmentBanner />
        <div className="space-y-6">
          <FilterBar />
          <div className="space-y-4">
            <h2 className="text-[10px] font-bold text-os-muted uppercase tracking-widest">Active Objectives ({activeGoals.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeGoals.map((goal) => (
                <GoalCard key={goal.id} {...goal} />
              ))}
            </div>
          </div>
          <Collapsible className="bg-os-card border border-os-border rounded-xl overflow-hidden">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-white/5 transition-colors">
              <span className="text-[10px] font-bold text-os-muted uppercase tracking-widest">Completed Objectives</span>
              <ChevronDown className="w-4 h-4 text-os-muted" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <GoalCard 
                  id="prev-1" 
                  title="Run 5km under 25 minutes" 
                  category="Health & Fitness" 
                  progress={100} 
                  deadline="Mar 1" 
                  daysRemaining={0} 
                  color="#10b981" 
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </PersonalLayout>
  );
}