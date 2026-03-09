import React from 'react';
import { PersonalLayout } from '@/components/layout/PersonalLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Sparkles, BookOpen, Users, Star } from 'lucide-react';
import { MindDaily } from '@/components/mind/MindDaily';
import { MindJournal } from '@/components/mind/MindJournal';
import { MindPeople } from '@/components/mind/MindPeople';
import { MindGrowth } from '@/components/mind/MindGrowth';
export function MindsetPage() {
  return (
    <PersonalLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        <header className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
              <Brain className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <h1 className="text-2xl font-bold text-white">Mind & Soul</h1>
          </div>
          <p className="text-sm text-os-muted">Cultivating clarity, focus, and cognitive endurance.</p>
        </header>
        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="bg-os-card border border-os-border h-12 p-1 gap-1">
            <TabsTrigger
              value="daily"
              className="data-[state=active]:bg-[#8B5CF6]/10 data-[state=active]:text-[#8B5CF6] gap-2 px-4 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Daily</span>
            </TabsTrigger>
            <TabsTrigger
              value="journal"
              className="data-[state=active]:bg-[#8B5CF6]/10 data-[state=active]:text-[#8B5CF6] gap-2 px-4 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Journal</span>
            </TabsTrigger>
            <TabsTrigger
              value="people"
              className="data-[state=active]:bg-[#8B5CF6]/10 data-[state=active]:text-[#8B5CF6] gap-2 px-4 transition-all"
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">People</span>
            </TabsTrigger>
            <TabsTrigger
              value="growth"
              className="data-[state=active]:bg-[#8B5CF6]/10 data-[state=active]:text-[#8B5CF6] gap-2 px-4 transition-all"
            >
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Growth</span>
            </TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="daily" className="m-0 outline-none">
              <MindDaily />
            </TabsContent>
            <TabsContent value="journal" className="m-0 outline-none">
              <MindJournal />
            </TabsContent>
            <TabsContent value="people" className="m-0 outline-none">
              <MindPeople />
            </TabsContent>
            <TabsContent value="growth" className="m-0 outline-none">
              <MindGrowth />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </PersonalLayout>
  );
}