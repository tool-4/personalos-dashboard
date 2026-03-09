import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Search, Sparkles, History, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format, subDays } from 'date-fns';
const PROMPTS = [
  "What made you smile today?",
  "What's one thing you've been avoiding but need to face?",
  "If you could talk to your 5-year-old self, what would you say?",
  "What does 'peace' look like to you right now?",
  "Describe a moment of friction today and how you handled it."
];
export function MindJournal() {
  const [currentPrompt, setCurrentPrompt] = useState(PROMPTS[0]);
  const [entry, setEntry] = useState('');
  const [history, setHistory] = useState<any[]>([]);
  const [heatmap, setHeatmap] = useState<number[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem('mindSoul_journal');
    if (saved) {
      const data = JSON.parse(saved);
      setHistory(data.history || []);
      setHeatmap(data.heatmap || new Array(91).fill(0));
    } else {
      setHeatmap(new Array(91).fill(0).map(() => Math.floor(Math.random() * 5)));
    }
  }, []);
  const saveEntry = () => {
    if (!entry.trim()) return;
    const newEntry = {
      id: Date.now(),
      date: new Date().toISOString(),
      prompt: currentPrompt,
      text: entry
    };
    const updatedHistory = [newEntry, ...history];
    const updatedHeatmap = [...heatmap];
    updatedHeatmap[90] = Math.min(updatedHeatmap[90] + 1, 4);
    const data = { history: updatedHistory, heatmap: updatedHeatmap };
    localStorage.setItem('mindSoul_journal', JSON.stringify(data));
    setHistory(updatedHistory);
    setHeatmap(updatedHeatmap);
    setEntry('');
    setCurrentPrompt(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
  };
  return (
    <div className="space-y-8">
      <div className="bg-os-card border border-os-border rounded-xl p-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted mb-6">Reflection Heatmap (90 Days)</h3>
        <div className="grid grid-cols-13 gap-1.5 overflow-x-auto pb-4 custom-scrollbar">
          {heatmap.map((val, i) => (
            <div 
              key={i} 
              className={cn(
                "aspect-square rounded-sm border border-black/20",
                val === 0 ? "bg-os-bg" :
                val === 1 ? "bg-[#8B5CF6]/20" :
                val === 2 ? "bg-[#8B5CF6]/40" :
                val === 3 ? "bg-[#8B5CF6]/70" : "bg-[#8B5CF6]"
              )}
            />
          ))}
        </div>
        <div className="flex items-center justify-end gap-2 mt-2">
          <span className="text-[10px] text-os-muted uppercase font-bold">Less</span>
          {[0, 1, 2, 3, 4].map(v => (
            <div key={v} className={cn("w-2 h-2 rounded-sm", v === 0 ? "bg-os-bg border border-os-border" : "bg-[#8B5CF6]")} style={{ opacity: v * 0.25 || 1 }} />
          ))}
          <span className="text-[10px] text-os-muted uppercase font-bold">More</span>
        </div>
      </div>
      <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" /> Prompted Journal
          </h3>
          <Button variant="ghost" size="sm" onClick={() => setCurrentPrompt(PROMPTS[Math.floor(Math.random() * PROMPTS.length)])} className="text-[10px] font-bold uppercase text-os-muted hover:text-[#8B5CF6]">
            Shuffle Prompt
          </Button>
        </div>
        <div className="p-4 bg-os-bg border border-os-border rounded-xl italic text-os-text text-sm border-l-4 border-l-[#8B5CF6]">
          "{currentPrompt}"
        </div>
        <Textarea 
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Start writing..."
          className="min-h-[200px] bg-os-bg border-os-border focus:border-[#8B5CF6] resize-none"
        />
        <div className="flex justify-end">
          <Button onClick={saveEntry} className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-10">
            Archive Entry
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted flex items-center gap-2">
          <History className="w-4 h-4" /> Past Reflections
        </h3>
        <div className="space-y-4">
          {history.length > 0 ? history.map((h) => (
            <div key={h.id} className="bg-os-card border border-os-border rounded-xl p-5 hover:border-[#8B5CF6]/30 transition-all">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono font-bold text-os-muted">{format(new Date(h.date), 'MMMM do, yyyy • HH:mm')}</span>
                <span className="text-[10px] font-bold text-[#8B5CF6] uppercase bg-[#8B5CF6]/10 px-2 py-0.5 rounded">Prompted</span>
              </div>
              <p className="text-sm text-os-text leading-relaxed">{h.text}</p>
            </div>
          )) : (
            <div className="text-center py-12 text-os-muted border-2 border-dashed border-os-border rounded-xl">
              No entries archived yet. Start your journey today.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}