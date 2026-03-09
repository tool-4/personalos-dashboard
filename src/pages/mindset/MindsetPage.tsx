import React from 'react';
import { PersonalLayout } from '@/components/layout/PersonalLayout';
import { Brain, Quote, Sparkles, Pencil, History, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
export function MindsetPage() {
  return (
    <PersonalLayout>
      <div className="space-y-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-white">Mindset System</h1>
          <p className="text-sm text-os-muted">Cultivating clarity, focus, and cognitive endurance.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Pencil className="w-5 h-5 text-os-mind" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">Daily Reflection</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-os-muted uppercase tracking-wider">What's on your mind? (Mind Dump)</label>
                  <Textarea 
                    placeholder="Capture thoughts, anxieties, or ideas to clear cognitive space..."
                    className="min-h-[120px] bg-os-bg border-os-border text-sm resize-none focus:border-os-mind"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-os-muted uppercase tracking-wider">One thing I'm grateful for</label>
                    <input className="w-full bg-os-bg border border-os-border rounded-lg p-3 text-sm text-white focus:outline-none focus:border-os-mind" placeholder="..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-os-muted uppercase tracking-wider">Top Priority for tomorrow</label>
                    <input className="w-full bg-os-bg border border-os-border rounded-lg p-3 text-sm text-white focus:outline-none focus:border-os-mind" placeholder="..." />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-os-mind hover:bg-os-mind/90 text-white px-8">Complete Entry</Button>
                </div>
              </div>
            </div>
            <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-3">
                  <History className="w-5 h-5 text-os-mind" /> Cognitive History
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  { date: 'Today', session: 'Deep Work: OS Design', score: 'A+', duration: '2.5h' },
                  { date: 'Yesterday', session: 'Technical Planning', score: 'B', duration: '1.2h' },
                  { date: 'May 14', session: 'Content Creation', score: 'A', duration: '3.0h' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-os-bg border border-os-border">
                    <div>
                      <div className="text-sm font-medium text-white">{item.session}</div>
                      <div className="text-[10px] text-os-muted uppercase font-mono">{item.date} • {item.duration}</div>
                    </div>
                    <div className="text-lg font-mono font-bold text-os-mind">{item.score}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-os-muted flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-os-mind" /> Mind Stats
              </h2>
              <div className="space-y-4">
                <div className="bg-os-bg border border-os-border rounded-lg p-4">
                  <div className="text-[10px] font-bold text-os-muted uppercase mb-1">Meditation Streak</div>
                  <div className="text-2xl font-mono font-bold text-white">12 <span className="text-sm font-normal text-os-muted">days</span></div>
                </div>
                <div className="bg-os-bg border border-os-border rounded-lg p-4">
                  <div className="text-[10px] font-bold text-os-muted uppercase mb-1">Focus Endurance</div>
                  <div className="text-2xl font-mono font-bold text-os-mind">84% <span className="text-sm font-normal text-os-muted">avg</span></div>
                </div>
              </div>
            </div>
            <div className="bg-os-mind/5 border border-os-mind/20 rounded-xl p-6 space-y-4">
              <Quote className="w-6 h-6 text-os-mind/40" />
              <p className="text-sm text-os-text leading-relaxed font-medium italic">
                "The quality of your life is determined by the quality of your focus. Guard it with your life."
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-os-mind uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> Marcus Aurelius
              </div>
            </div>
          </div>
        </div>
      </div>
    </PersonalLayout>
  );
}