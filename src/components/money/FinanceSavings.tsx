import React from 'react';
import { Target, PiggyBank, Shield, Laptop, Plane, TrendingUp, Plus } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { MOCK_SAVINGS } from './money-types';
const ICON_MAP: Record<string, any> = {
  Shield, Laptop, Plane, TrendingUp
};
export function FinanceSavings() {
  const totalSaved = MOCK_SAVINGS.reduce((acc, curr) => acc + curr.current, 0);
  const totalTarget = MOCK_SAVINGS.reduce((acc, curr) => acc + curr.target, 0);
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-widest text-os-muted">Strategic Savings</h2>
        <Button size="sm" variant="outline" className="border-os-border bg-os-card h-8">
          <Plus className="w-3 h-3 mr-1.5" /> New Goal
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_SAVINGS.map((goal) => {
          const Icon = ICON_MAP[goal.icon] || Target;
          const percentage = (goal.current / goal.target) * 100;
          return (
            <div key={goal.id} className="bg-os-card border border-os-border rounded-xl p-6 space-y-4 group hover:border-os-money/30 transition-all">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-os-bg border border-os-border group-hover:border-os-money/20 group-hover:bg-os-money/5 transition-all">
                  <Icon className="w-5 h-5 text-os-money" />
                </div>
                <div className="text-right">
                  <div className="text-xl font-mono font-bold text-white">${goal.current.toLocaleString()}</div>
                  <div className="text-[10px] font-bold text-os-muted uppercase tracking-tighter">Target: ${goal.target.toLocaleString()}</div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white">{goal.title}</span>
                  <span className="text-[10px] font-mono font-bold text-os-money">{percentage.toFixed(0)}%</span>
                </div>
                <Progress value={percentage} className="h-2 bg-os-bg" style={{ '--progress-background': '#f59e0b' } as any} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-os-money/5 border border-os-money/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-os-money flex items-center justify-center shadow-lg shadow-os-money/20">
            <PiggyBank className="w-6 h-6 text-os-status" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Total Savings Integrity</h3>
            <p className="text-sm text-os-muted">You have secured ${totalSaved.toLocaleString()} of your ${totalTarget.toLocaleString()} global target.</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1">
          <div className="text-2xl font-mono font-bold text-os-money">
            {((totalSaved / totalTarget) * 100).toFixed(1)}%
          </div>
          <div className="text-[10px] font-bold text-os-muted uppercase tracking-widest">Overall Completion</div>
        </div>
      </div>
    </div>
  );
}