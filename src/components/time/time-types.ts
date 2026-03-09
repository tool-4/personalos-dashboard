export interface TimeBlock {
  id: string;
  start: string;
  end: string;
  title: string;
  category: 'Deep Work' | 'Shallow Work' | 'Health' | 'Rest' | 'Admin';
}
export const CATEGORY_COLORS: Record<string, string> = {
  'Deep Work': '#0ea5e9',
  'Shallow Work': '#64748b',
  'Health': '#10b981',
  'Rest': '#8b5cf6',
  'Admin': '#f59e0b',
};
export const MOCK_WEEKLY_DATA = {
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  blocks: [
    { id: '1', day: 'Mon', start: '09:00', end: '12:00', title: 'Deep Work', category: 'Deep Work' },
    { id: '2', day: 'Mon', start: '14:00', end: '16:00', title: 'Client Sync', category: 'Shallow Work' },
    { id: '3', day: 'Tue', start: '08:00', end: '11:00', title: 'Architecture', category: 'Deep Work' },
    { id: '4', day: 'Wed', start: '07:00', end: '08:30', title: 'Gym Session', category: 'Health' },
    { id: '5', day: 'Fri', start: '16:00', end: '18:00', title: 'Review', category: 'Admin' },
  ]
};