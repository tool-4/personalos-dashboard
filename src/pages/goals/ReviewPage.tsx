import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';
import { PersonalLayout } from '@/components/layout/PersonalLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const activeGoals = [
  { id: '1', title: 'Lose 10kg through Keto and Strength Training', category: 'Health & Fitness', color: '#10b981' },
  { id: '2', title: 'Read 24 books on system architecture', category: 'Learning & Growth', color: '#6366f1' },
];
export function ReviewPage() {
  const navigate = useNavigate();
  return (
    <PersonalLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/goals')} className="text-os-muted hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-white">Weekly Review</h1>
              <p className="text-sm text-os-muted">Reflect on your progress and calibrate for the week ahead.</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold text-os-muted uppercase">Review Period</div>
            <div className="text-sm font-mono text-white">May 01 - May 07</div>
          </div>
        </header>
        <div className="space-y-6">
          {activeGoals.map((goal) => (
            <Card key={goal.id} className="bg-os-card border-os-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-os-border mb-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: goal.color }}>{goal.category}</div>
                  <CardTitle className="text-base text-white">{goal.title}</CardTitle>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-[10px] font-bold text-os-muted uppercase">Active</span>
                   <Switch defaultChecked />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4 md:col-span-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-os-muted uppercase flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-os-primary" /> Wins & Lessons
                      </label>
                      <textarea
                        placeholder="What went well? What did you learn?"
                        className="w-full bg-os-bg border border-os-border rounded-lg p-3 text-sm text-white min-h-[100px] focus:outline-none focus:border-[#6366f1]"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-os-muted uppercase flex items-center gap-1.5">
                        <AlertCircle className="w-3 h-3 text-orange-400" /> Focus Level
                      </label>
                      <div className="grid grid-cols-5 gap-1">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <button key={n} className="h-8 rounded bg-os-bg border border-os-border text-[10px] font-bold hover:bg-[#6366f1]/20 hover:border-[#6366f1] transition-all">
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-os-muted uppercase flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-os-primary" /> Adjusted Status
                      </label>
                      <Select defaultValue="on-track">
                        <SelectTrigger className="bg-os-bg border-os-border h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-os-card border-os-border">
                          <SelectItem value="on-track">On Track</SelectItem>
                          <SelectItem value="at-risk">At Risk</SelectItem>
                          <SelectItem value="behind">Behind</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-xl p-8 text-center space-y-4">
          <div className="w-12 h-12 bg-[#6366f1]/20 rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-[#6366f1]" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">Ready to lock in the week?</h2>
            <p className="text-sm text-os-muted">This will update your dashboard metrics and reset weekly tracking counters.</p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/goals')} className="text-os-muted w-full sm:w-auto">
              Save Draft
            </Button>
            <Button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-12 w-full sm:w-auto" onClick={() => navigate('/goals')}>
              Complete Review
            </Button>
          </div>
        </div>
      </div>
    </PersonalLayout>
  );
}