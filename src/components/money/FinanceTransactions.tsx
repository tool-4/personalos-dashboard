import React, { useState } from 'react';
import { Search, Plus, Filter, ArrowUpCircle, ArrowDownCircle, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MOCK_TRANSACTIONS } from './money-types';
import { cn } from '@/lib/utils';
export function FinanceTransactions() {
  const [showAdd, setShowAdd] = useState(false);
  const [addType, setAddType] = useState<'income' | 'expense'>('expense');
  return (
    <div className="space-y-6">
      {/* Quick Actions & Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-os-muted" />
          <Input placeholder="Search transactions..." className="pl-9 bg-os-card border-os-border" />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Select defaultValue="may">
            <SelectTrigger className="w-full md:w-32 bg-os-card border-os-border">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent className="bg-os-card border-os-border text-os-text">
              <SelectItem value="may">May 2024</SelectItem>
              <SelectItem value="apr">April 2024</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            onClick={() => setShowAdd(!showAdd)} 
            className="bg-os-money hover:bg-os-money/90 text-os-status whitespace-nowrap"
          >
            <Plus className="w-4 h-4 mr-2" /> New Entry
          </Button>
        </div>
      </div>
      {/* Inline Add Panel */}
      {showAdd && (
        <div className="bg-os-card border border-os-money/30 rounded-xl p-5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-4 mb-6">
            <button 
              onClick={() => setAddType('expense')}
              className={cn("px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all", 
                addType === 'expense' ? "bg-rose-500 text-white" : "text-os-muted hover:bg-white/5")}
            >
              Expense
            </button>
            <button 
              onClick={() => setAddType('income')}
              className={cn("px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all", 
                addType === 'income' ? "bg-[#10b981] text-white" : "text-os-muted hover:bg-white/5")}
            >
              Income
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-os-muted uppercase">Amount</label>
              <Input type="number" placeholder="0.00" className="bg-os-bg border-os-border h-10" />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-[10px] font-bold text-os-muted uppercase">Description</label>
              <Input placeholder="What was this for?" className="bg-os-bg border-os-border h-10" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-os-muted uppercase">Category</label>
              <Select>
                <SelectTrigger className="bg-os-bg border-os-border h-10">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent className="bg-os-card border-os-border">
                  <SelectItem value="housing">Housing</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="salary">Salary</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="ghost" size="sm" onClick={() => setShowAdd(false)}>Cancel</Button>
            <Button size="sm" className="bg-os-money text-os-status">Save Entry</Button>
          </div>
        </div>
      )}
      {/* Transaction List */}
      <div className="bg-os-card border border-os-border rounded-xl overflow-hidden">
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_120px_100px_120px] items-center px-6 py-3 border-b border-os-border bg-os-bg/50 text-[10px] font-bold text-os-muted uppercase tracking-widest">
          <span>Description</span>
          <span className="hidden md:block">Category</span>
          <span className="hidden md:block">Date</span>
          <span className="text-right">Amount</span>
        </div>
        <div className="divide-y divide-os-border">
          {MOCK_TRANSACTIONS.map((t) => (
            <div key={t.id} className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_120px_100px_120px] items-center px-6 py-4 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-3">
                {t.type === 'income' ? 
                  <ArrowUpCircle className="w-5 h-5 text-[#10b981]" /> : 
                  <ArrowDownCircle className="w-5 h-5 text-rose-500" />
                }
                <span className="text-sm font-medium text-white group-hover:text-os-money transition-colors">{t.description}</span>
              </div>
              <div className="hidden md:block">
                <Badge variant="outline" className="text-[9px] border-os-border font-bold text-os-muted uppercase">{t.category}</Badge>
              </div>
              <div className="hidden md:block text-[10px] font-mono text-os-muted">
                {t.date.split('-').slice(1).join('/')}
              </div>
              <div className={cn("text-sm font-mono font-bold text-right", t.type === 'income' ? "text-[#10b981]" : "text-white")}>
                {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}