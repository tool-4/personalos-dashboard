import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Star, Shield, Zap, X, Timer, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
export function MindGrowth() {
  const [values, setValues] = useState<string[]>(['Integrity', 'Discipline', 'Curiosity', 'Legacy']);
  const [newValue, setNewValue] = useState('');
  const [lessons, setLessons] = useState<string[]>([]);
  const [isLocked, setIsLocked] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('mindSoul_growth');
    if (saved) {
      const data = JSON.parse(saved);
      setValues(data.values || []);
      setLessons(data.lessons || []);
      setIsLocked(data.isLocked || false);
    }
  }, []);
  const saveGrowth = (updatedData: any) => {
    localStorage.setItem('mindSoul_growth', JSON.stringify({ values, lessons, isLocked, ...updatedData }));
  };
  const addValue = () => {
    if (newValue && !values.includes(newValue)) {
      const v = [...values, newValue];
      setValues(v);
      saveGrowth({ values: v });
      setNewValue('');
    }
  };
  const removeValue = (v: string) => {
    const next = values.filter(val => val !== v);
    setValues(next);
    saveGrowth({ values: next });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <section className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#8B5CF6]" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted">Identity & Values</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {values.map(v => (
              <Badge key={v} className="bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30 px-3 py-1 text-xs group flex items-center gap-2">
                {v}
                <button onClick={() => removeValue(v)} className="opacity-50 hover:opacity-100 transition-opacity">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            <div className="flex gap-2 w-full md:w-auto mt-2">
              <Input 
                value={newValue} 
                onChange={(e) => setNewValue(e.target.value)}
                placeholder="New core value..." 
                className="h-8 bg-os-bg border-os-border text-xs w-40" 
              />
              <Button onClick={addValue} size="sm" variant="outline" className="h-8 text-[10px] font-bold uppercase border-os-border">Add</Button>
            </div>
          </div>
        </section>
        <section className="bg-os-card border border-os-border rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#8B5CF6]" /> Lessons Log
            </h3>
          </div>
          <div className="space-y-4">
            {[
              "Consistency outperforms intensity in the long run.",
              "Quality of thinking determines quality of decisions.",
              "Focus is a resource to be guarded, not a tap to be left running."
            ].map((lesson, i) => (
              <div key={i} className="p-4 bg-os-bg border border-os-border rounded-xl flex items-start gap-4">
                <div className="text-[#8B5CF6] font-mono font-bold mt-1">0{i+1}</div>
                <p className="text-sm text-os-text">{lesson}</p>
              </div>
            ))}
            <Button variant="ghost" className="w-full border-2 border-dashed border-os-border text-os-muted hover:border-[#8B5CF6]/50 hover:text-[#8B5CF6] h-12 text-xs uppercase font-bold">
              Append New Insight
            </Button>
          </div>
        </section>
      </div>
      <div className="space-y-6">
        <section className="bg-os-card border border-os-border rounded-xl p-6 space-y-6 border-t-4 border-t-[#8B5CF6]">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#8B5CF6]" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted">Letter to Future Self</h3>
          </div>
          {isLocked ? (
            <div className="space-y-6 text-center py-8">
              <div className="w-16 h-16 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-[#8B5CF6]" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">Vault Encrypted</h4>
                <p className="text-xs text-os-muted">Your message is locked until the specified date.</p>
              </div>
              <div className="bg-os-bg border border-os-border rounded-lg p-4 space-y-1">
                <div className="text-[10px] font-bold text-os-muted uppercase">Unlocking In</div>
                <div className="text-xl font-mono font-bold text-white flex items-center justify-center gap-2">
                  <Timer className="w-4 h-4 text-[#8B5CF6]" /> 214d 12h
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-os-muted leading-relaxed">
                Record your current headspace, goals, and state of being for your future self to reflect upon.
              </p>
              <Textarea 
                placeholder="Where are you now? What do you hope you've achieved by next year?"
                className="min-h-[200px] bg-os-bg border-os-border text-sm resize-none"
              />
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-os-muted">Unseal Date</label>
                <Input type="date" className="bg-os-bg border-os-border h-10" defaultValue="2025-05-01" />
              </div>
              <Button onClick={() => { setIsLocked(true); saveGrowth({ isLocked: true }); }} className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
                Seal into Vault
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}