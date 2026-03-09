import React from 'react';
import { PersonalLayout } from '@/components/layout/PersonalLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wallet, ListOrdered, Target } from 'lucide-react';
import { FinanceOverview } from '@/components/money/FinanceOverview';
import { FinanceTransactions } from '@/components/money/FinanceTransactions';
import { FinanceSavings } from '@/components/money/FinanceSavings';
export function FinancePage() {
  return (
    <PersonalLayout>
      <div className="space-y-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-white">Money System</h1>
          <p className="text-sm text-os-muted">Resource allocation and financial health monitoring.</p>
        </header>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-os-card border border-os-border h-12 p-1 gap-1">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-os-money/10 data-[state=active]:text-os-money gap-2 px-4 transition-all"
            >
              <Wallet className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger
              value="transactions"
              className="data-[state=active]:bg-os-money/10 data-[state=active]:text-os-money gap-2 px-4 transition-all"
            >
              <ListOrdered className="w-4 h-4" />
              <span className="hidden sm:inline">Transactions</span>
            </TabsTrigger>
            <TabsTrigger
              value="savings"
              className="data-[state=active]:bg-os-money/10 data-[state=active]:text-os-money gap-2 px-4 transition-all"
            >
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Savings Goals</span>
            </TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="overview" className="m-0 outline-none">
              <FinanceOverview />
            </TabsContent>
            <TabsContent value="transactions" className="m-0 outline-none">
              <FinanceTransactions />
            </TabsContent>
            <TabsContent value="savings" className="m-0 outline-none">
              <FinanceSavings />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </PersonalLayout>
  );
}