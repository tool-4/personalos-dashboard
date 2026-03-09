import React from 'react';
import { PersonalLayout } from '@/components/layout/PersonalLayout';
import { GreetingCard } from '@/components/dashboard/GreetingCard';
import { ModuleWidgets } from '@/components/dashboard/ModuleWidgets';
import { TimelineCard } from '@/components/dashboard/TimelineCard';
import { QuickActionsCard } from '@/components/dashboard/QuickActionsCard';
import { DailyInsightCard } from '@/components/dashboard/DailyInsightCard';
export function HomePage() {
  return (
    <PersonalLayout>
      <div className="space-y-6">
        {/* Zone A: Greeting */}
        <GreetingCard />
        {/* Zone B: Global Modules */}
        <ModuleWidgets />
        {/* Zone C: Daily Timeline */}
        <TimelineCard />
        {/* Zone D: Actions & Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <QuickActionsCard />
          <DailyInsightCard />
        </div>
      </div>
    </PersonalLayout>
  );
}