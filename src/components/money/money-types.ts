export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
}
export interface SavingsGoal {
  id: string;
  title: string;
  target: number;
  current: number;
  icon: string;
}
export const CATEGORY_COLORS: Record<string, string> = {
  Housing: '#6366f1',
  Food: '#f59e0b',
  Transport: '#0ea5e9',
  Entertainment: '#8b5cf6',
  Health: '#10b981',
  Utilities: '#64748b',
  Salary: '#10b981',
  Freelance: '#3ecf8e',
  Investment: '#f59e0b',
};
export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', date: '2024-05-15', description: 'Monthly Salary', amount: 4500, category: 'Salary', type: 'income' },
  { id: '2', date: '2024-05-14', description: 'Apartment Rent', amount: 1200, category: 'Housing', type: 'expense' },
  { id: '3', date: '2024-05-14', description: 'Whole Foods Market', amount: 156.40, category: 'Food', type: 'expense' },
  { id: '4', date: '2024-05-13', description: 'Freelance Project X', amount: 350, category: 'Freelance', type: 'income' },
  { id: '5', date: '2024-05-12', description: 'Gas Station', amount: 65.00, category: 'Transport', type: 'expense' },
  { id: '6', date: '2024-05-11', description: 'Netflix Subscription', amount: 15.99, category: 'Entertainment', type: 'expense' },
  { id: '7', date: '2024-05-10', description: 'Electric Bill', amount: 92.50, category: 'Utilities', type: 'expense' },
  { id: '8', date: '2024-05-09', description: 'Gym Membership', amount: 50.00, category: 'Health', type: 'expense' },
];
export const MOCK_SAVINGS: SavingsGoal[] = [
  { id: 's1', title: 'Emergency Fund', target: 10000, current: 6500, icon: 'Shield' },
  { id: 's2', title: 'MacBook Pro M3', target: 2400, current: 1800, icon: 'Laptop' },
  { id: 's3', title: 'Japan Travel', target: 5000, current: 1250, icon: 'Plane' },
  { id: 's4', title: 'Investment Portfolio', target: 50000, current: 12400, icon: 'TrendingUp' },
];
export const FINANCE_STATS = {
  income: 4850,
  expenses: 2940,
  net: 1910,
};