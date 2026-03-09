import React from 'react';
import { PersonalLayout } from '@/components/layout/PersonalLayout';
import { Activity, Heart, Moon, Zap, Utensils, Timer, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
export function HealthPage() {
  return (
    <PersonalLayout>
      <div className="space-y-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-white">Health System</h1>
          <p className="text-sm text-os-muted">Optimizing biological performance and recovery.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard label="Daily Steps" value="8,432" target="10,000" unit="steps" icon={Activity} progress={84} />
          <MetricCard label="Sleep Score" value="88" target="100" unit="points" icon={Moon} progress={88} />
          <MetricCard label="Calories" value="1,840" target="2,400" unit="kcal" icon={Utensils} progress={76} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-widest text-os-muted flex items-center gap-2">
                <Timer className="w-4 h-4 text-os-health" /> Recent Activity
              </h2>
              <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase text-os-muted hover:text-os-health">
                Log Workout <ChevronRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
            <div className="space-y-4">
              {[
                { type: 'Strength Training', duration: '55m', intensity: 'High', date: 'Today' },
                { type: 'Morning Run', duration: '32m', intensity: 'Medium', date: 'Yesterday' },
                { type: 'Yoga & Mobility', duration: '20m', intensity: 'Low', date: 'May 14' },
              ].map((act, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-os-bg border border-os-border hover:border-os-health/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-os-health/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-os-health" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{act.type}</div>
                      <div className="text-[10px] text-os-muted uppercase font-mono">{act.date} • {act.duration}</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-bold px-2 py-0.5 rounded border border-os-border text-os-muted uppercase">
                    {act.intensity}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-os-muted flex items-center gap-2">
              <Heart className="w-4 h-4 text-os-health" /> Recovery & Vitals
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-os-bg border border-os-border rounded-xl p-4 space-y-2">
                <div className="text-[10px] font-bold text-os-muted uppercase">HRV Status</div>
                <div className="text-2xl font-mono font-bold text-os-health">64 <span className="text-xs font-normal text-os-muted">ms</span></div>
                <div className="text-[10px] text-os-primary font-bold">BALANCED</div>
              </div>
              <div className="bg-os-bg border border-os-border rounded-xl p-4 space-y-2">
                <div className="text-[10px] font-bold text-os-muted uppercase">RHR</div>
                <div className="text-2xl font-mono font-bold text-white">52 <span className="text-xs font-normal text-os-muted">bpm</span></div>
                <div className="text-[10px] text-os-muted font-bold">ATHLETIC</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-os-health/5 border border-os-health/20">
              <p className="text-xs text-os-health leading-relaxed italic">
                "Your body is the hardware. Software cannot run on broken hardware. Prioritize recovery today."
              </p>
            </div>
          </div>
        </div>
      </div>
    </PersonalLayout>
  );
}
function MetricCard({ label, value, target, unit, icon: Icon, progress }: any) {
  return (
    <div className="bg-os-card border border-os-border rounded-xl p-5 space-y-4 group hover:border-os-health/40 transition-all">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-os-bg border border-os-border">
          <Icon className="w-4 h-4 text-os-health" />
        </div>
        <span className="text-[10px] font-mono font-bold text-os-muted uppercase">Target: {target}</span>
      </div>
      <div>
        <div className="text-2xl font-mono font-bold text-white">{value} <span className="text-sm font-normal text-os-muted">{unit}</span></div>
        <div className="text-xs text-os-muted uppercase font-bold tracking-tighter mt-1">{label}</div>
      </div>
      <div className="space-y-1.5 pt-2">
        <div className="flex justify-between text-[10px] font-bold text-os-muted">
          <span>PROGRESS</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-1 bg-os-bg" style={{ '--progress-background': '#10b981' } as any} />
      </div>
    </div>
  );
}