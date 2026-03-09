import React from 'react';
import { PersonalLayout } from '@/components/layout/PersonalLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, CalendarDays, BarChart3, Timer } from 'lucide-react';
import { WeeklyPlan } from '@/components/time/WeeklyPlan';
import { IdealDayBuilder } from '@/components/time/IdealDayBuilder';
import { TimeAudit } from '@/components/time/TimeAudit';
import { FocusTimer } from '@/components/time/FocusTimer';
export function TimelinePage() {
  return (
    <PersonalLayout>
      <div className="space-y-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-white">Time System</h1>
          <p className="text-sm text-os-muted">Optimizing for deep work and cognitive endurance.</p>
        </header>
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="bg-os-card border border-os-border h-12 p-1 gap-1">
            <TabsTrigger 
              value="weekly" 
              className="data-[state=active]:bg-[#0ea5e9]/10 data-[state=active]:text-[#0ea5e9] gap-2 px-4"
            >
              <CalendarDays className="w-4 h-4" /> 
              <span className="hidden sm:inline">Weekly Plan</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ideal" 
              className="data-[state=active]:bg-[#0ea5e9]/10 data-[state=active]:text-[#0ea5e9] gap-2 px-4"
            >
              <Clock className="w-4 h-4" /> 
              <span className="hidden sm:inline">Ideal Day</span>
            </TabsTrigger>
            <TabsTrigger 
              value="audit" 
              className="data-[state=active]:bg-[#0ea5e9]/10 data-[state=active]:text-[#0ea5e9] gap-2 px-4"
            >
              <BarChart3 className="w-4 h-4" /> 
              <span className="hidden sm:inline">Time Audit</span>
            </TabsTrigger>
            <TabsTrigger 
              value="timer" 
              className="data-[state=active]:bg-[#0ea5e9]/10 data-[state=active]:text-[#0ea5e9] gap-2 px-4"
            >
              <Timer className="w-4 h-4" /> 
              <span className="hidden sm:inline">Focus Timer</span>
            </TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="weekly" className="m-0 outline-none">
              <WeeklyPlan />
            </TabsContent>
            <TabsContent value="ideal" className="m-0 outline-none">
              <IdealDayBuilder />
            </TabsContent>
            <TabsContent value="audit" className="m-0 outline-none">
              <TimeAudit />
            </TabsContent>
            <TabsContent value="timer" className="m-0 outline-none">
              <FocusTimer />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </PersonalLayout>
  );
}