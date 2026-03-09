import React from 'react';
import { TrendingUp, TrendingDown, Wallet, ArrowUpRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { FINANCE_STATS, CATEGORY_COLORS, MOCK_TRANSACTIONS } from './money-types';
export function FinanceOverview() {
  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          label="Total Income" 
          value={`$${FINANCE_STATS.income.toLocaleString()}`} 
          icon={TrendingUp} 
          color="text-[#10b981]" 
          bg="bg-[#10b981]/10" 
        />
        <StatCard 
          label="Total Expenses" 
          value={`$${FINANCE_STATS.expenses.toLocaleString()}`} 
          icon={TrendingDown} 
          color="text-rose-500" 
          bg="bg-rose-500/10" 
        />
        <StatCard 
          label="Net Cash Flow" 
          value={`+$${FINANCE_STATS.net.toLocaleString()}`} 
          icon={Wallet} 
          color="text-os-money" 
          bg="bg-os-money/10" 
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Category Breakdown */}
        <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted">Expense Breakdown</h3>
          <div className="space-y-5">
            <CategoryRow label="Housing" amount={1200} total={2940} color={CATEGORY_COLORS.Housing} />
            <CategoryRow label="Food" amount={540} total={2940} color={CATEGORY_COLORS.Food} />
            <CategoryRow label="Transport" amount={320} total={2940} color={CATEGORY_COLORS.Transport} />
            <CategoryRow label="Entertainment" amount={210} total={2940} color={CATEGORY_COLORS.Entertainment} />
            <CategoryRow label="Utilities" amount={180} total={2940} color={CATEGORY_COLORS.Utilities} />
          </div>
        </div>
        {/* Recent Activity */}
        <div className="bg-os-card border border-os-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted">Recent Activity</h3>
            <button className="text-[10px] font-bold text-os-muted hover:text-os-money flex items-center gap-1 uppercase transition-colors">
              View All <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-4">
            {MOCK_TRANSACTIONS.slice(0, 5).map((t) => (
              <div key={t.id} className="flex items-center justify-between py-2 border-b border-os-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${t.type === 'income' ? 'bg-[#10b981]' : 'bg-rose-500'}`} />
                  <div>
                    <div className="text-sm font-medium text-white">{t.description}</div>
                    <div className="text-[10px] text-os-muted uppercase">{t.category}</div>
                  </div>
                </div>
                <div className={`text-sm font-mono font-bold ${t.type === 'income' ? 'text-[#10b981]' : 'text-white'}`}>
                  {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function StatCard({ label, value, icon: Icon, color, bg }: any) {
  return (
    <div className="bg-os-card border border-os-border rounded-xl p-5 flex items-center gap-4">
      <div className={`p-3 rounded-lg ${bg}`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div>
        <div className="text-[10px] font-bold text-os-muted uppercase tracking-wider">{label}</div>
        <div className="text-xl font-mono font-bold text-white">{value}</div>
      </div>
    </div>
  );
}
function CategoryRow({ label, amount, total, color }: any) {
  const percentage = (amount / total) * 100;
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-medium">
        <span className="text-os-text">{label}</span>
        <span className="text-os-muted">${amount} <span className="text-[10px] ml-1 opacity-50">({percentage.toFixed(0)}%)</span></span>
      </div>
      <Progress value={percentage} className="h-1 bg-os-bg" style={{ '--progress-background': color } as any} />
    </div>
  );
}