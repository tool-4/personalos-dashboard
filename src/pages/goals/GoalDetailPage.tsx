import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit2, History, Target, Flame, Calendar } from 'lucide-react';
import { PersonalLayout } from '@/components/layout/PersonalLayout';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { MilestoneList } from '@/components/goals/GoalComponents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export function GoalDetailPage() {
  const { id } = useParams();
  return (
    <PersonalLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <Button asChild variant="ghost" className="text-os-muted hover:text-white -ml-2">
            <Link to="/goals">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Goals
            </Link>
          </Button>
          <Button variant="outline" className="border-os-border bg-os-card hover:bg-white/5">
            <Edit2 className="w-4 h-4 mr-2 text-os-muted" /> Edit Goal
          </Button>
        </div>
        {/* Hero Section */}
        <div className="bg-os-card border border-os-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-[#10b981] uppercase tracking-widest">Health & Fitness</div>
              <h1 className="text-3xl font-bold text-white leading-tight">Lose 10kg through Keto and Strength Training</h1>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-os-bg border border-os-border rounded-lg px-4 py-2">
                <div className="text-[10px] font-bold text-os-muted uppercase mb-1">Current Metric</div>
                <div className="text-xl font-mono font-bold text-white">78.5 <span className="text-sm font-normal text-os-muted">/ 70kg</span></div>
              </div>
              <div className="bg-os-bg border border-os-border rounded-lg px-4 py-2">
                <div className="text-[10px] font-bold text-os-muted uppercase mb-1">Motivation</div>
                <div className="text-sm text-os-text">Longevity & Energy</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-64 space-y-4">
            <div className="relative w-40 h-40 mx-auto">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-os-border" />
                <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-[#6366f1]" strokeDasharray={2 * Math.PI * 70} strokeDashoffset={2 * Math.PI * 70 * (1 - 0.65)} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-mono font-bold text-white">65%</span>
                <span className="text-[10px] font-bold text-os-muted uppercase">Done</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Strategy */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-os-card border-os-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#6366f1]" /> Strategy & Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <MilestoneList milestones={[
                  { id: 'm1', title: 'Complete first 30 days of Keto strictly', completed: true, status: 'DONE' },
                  { id: 'm2', title: 'Achieve 3x per week strength training habit', completed: true, status: 'DONE' },
                  { id: 'm3', title: 'Drop below 80kg body weight', completed: true, status: 'DONE' },
                  { id: 'm4', title: 'Reach goal weight of 70kg', completed: false, status: 'NEXT' },
                ]} />
              </CardContent>
            </Card>
            <Card className="bg-os-card border-os-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-500" /> Daily Habits
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-os-bg border border-os-border text-center">
                  <div className="text-[10px] font-bold text-os-muted uppercase mb-2">Track Macros</div>
                  <div className="flex justify-center gap-1">
                    {[1, 1, 1, 1, 0, 0, 0].map((v, i) => (
                      <div key={i} className={cn("w-2 h-4 rounded-sm", v ? "bg-os-primary" : "bg-os-border")} />
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-os-bg border border-os-border text-center">
                  <div className="text-[10px] font-bold text-os-muted uppercase mb-2">Gym Session</div>
                  <div className="flex justify-center gap-1">
                    {[1, 0, 1, 0, 1, 0, 0].map((v, i) => (
                      <div key={i} className={cn("w-2 h-4 rounded-sm", v ? "bg-os-primary" : "bg-os-border")} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Right Column: Logging & History */}
          <div className="space-y-6">
            <Card className="bg-os-card border-os-border border-l-2 border-l-[#6366f1]">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white">Log Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs text-os-muted uppercase font-bold tracking-tighter">Current Weight (kg)</label>
                  <input type="number" placeholder="78.5" className="w-full bg-os-bg border border-os-border rounded-lg p-3 text-white focus:outline-none focus:border-[#6366f1]" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-os-muted uppercase font-bold tracking-tighter">Session Notes</label>
                  <textarea placeholder="How was the session?" className="w-full bg-os-bg border border-os-border rounded-lg p-3 text-white text-sm min-h-[100px] focus:outline-none focus:border-[#6366f1]" />
                </div>
                <Button className="w-full bg-[#6366f1] hover:bg-[#4f46e5]">Submit Check-in</Button>
              </CardContent>
            </Card>
            <Card className="bg-os-card border-os-border">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <History className="w-4 h-4 text-os-muted" /> Recent History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-0 px-6 pb-6">
                {[
                  { date: 'May 2', value: '78.5kg', change: '-0.5kg' },
                  { date: 'Apr 25', value: '79.0kg', change: '-1.2kg' },
                  { date: 'Apr 18', value: '80.2kg', change: '-0.8kg' },
                ].map((entry, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-os-border last:border-0">
                    <div>
                      <div className="text-sm font-medium text-white">{entry.value}</div>
                      <div className="text-[10px] text-os-muted font-mono">{entry.date}</div>
                    </div>
                    <div className="text-xs font-bold text-os-primary">{entry.change}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PersonalLayout>
  );
}