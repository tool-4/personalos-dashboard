import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MindAudio } from './MindAudio';
import { Timer, Heart, Smile, Meh, Frown, CloudLightning } from 'lucide-react';
import { cn } from '@/lib/utils';
const MOODS = [
  { icon: CloudLightning, label: 'Stressed', color: 'text-rose-500' },
  { icon: Frown, label: 'Low', color: 'text-orange-400' },
  { icon: Meh, label: 'Neutral', color: 'text-os-muted' },
  { icon: Smile, label: 'Good', color: 'text-os-primary' },
  { icon: Heart, label: 'Great', color: 'text-[#8B5CF6]' },
];
export function MindDaily() {
  const [mood, setMood] = useState<string | null>(null);
  const [intention, setIntention] = useState('');
  const [journal, setJournal] = useState('');
  useEffect(() => {
    const saved = localStorage.getItem('mindSoul_daily');
    if (saved) {
      const data = JSON.parse(saved);
      setMood(data.mood);
      setIntention(data.intention);
      setJournal(data.journal);
    }
  }, []);
  const handleSave = () => {
    localStorage.setItem('mindSoul_daily', JSON.stringify({ mood, intention, journal }));
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted">Mood Check-in</h3>
            <div className="flex justify-between gap-2">
              {MOODS.map((m) => (
                <button
                  key={m.label}
                  onClick={() => setMood(m.label)}
                  className={cn(
                    "flex-1 flex flex-col items-center gap-2 p-3 rounded-lg border transition-all",
                    mood === m.label 
                      ? "bg-[#8B5CF6]/10 border-[#8B5CF6] scale-105" 
                      : "bg-os-bg border-os-border hover:border-os-muted/50"
                  )}
                >
                  <m.icon className={cn("w-6 h-6", mood === m.label ? m.color : "text-os-muted")} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-os-muted">{m.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted">Daily Intention</h3>
            <Input
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              placeholder="What is your primary focus today?"
              className="bg-os-bg border-os-border focus:border-[#8B5CF6]"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted">Quick Mind Dump</h3>
            <Textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Capture fleeting thoughts to clear space..."
              className="min-h-[150px] bg-os-bg border-os-border focus:border-[#8B5CF6] resize-none"
            />
          </div>
          <Button onClick={handleSave} className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
            Secure Mind State
          </Button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-[#8B5CF6]" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted">Mindfulness Space</h3>
          </div>
          <MindAudio />
        </div>
      </div>
    </div>
  );
}