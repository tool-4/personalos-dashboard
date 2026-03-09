import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Users, Calendar, MessageSquare, Phone, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
export function MindPeople() {
  const [people, setPeople] = useState<any[]>([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newPerson, setNewPerson] = useState({ name: '', relation: '', frequency: 'Weekly' });
  useEffect(() => {
    const saved = localStorage.getItem('mindSoul_people');
    if (saved) setPeople(JSON.parse(saved));
    else {
      setPeople([
        { id: 1, name: 'Mom', relation: 'Family', frequency: 'Daily', lastContact: 'Today', nextRemind: 'Tomorrow' },
        { id: 2, name: 'Sammie', relation: 'Best Friend', frequency: 'Weekly', lastContact: '3 days ago', nextRemind: 'May 20' },
        { id: 3, name: 'Marcus', relation: 'Mentor', frequency: 'Monthly', lastContact: 'Apr 28', nextRemind: 'May 28' },
      ]);
    }
  }, []);
  const addPerson = () => {
    if (!newPerson.name) return;
    const p = { 
      ...newPerson, 
      id: Date.now(), 
      lastContact: 'Never', 
      nextRemind: 'TBD' 
    };
    const updated = [p, ...people];
    setPeople(updated);
    localStorage.setItem('mindSoul_people', JSON.stringify(updated));
    setIsAddOpen(false);
    setNewPerson({ name: '', relation: '', frequency: 'Weekly' });
  };
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold uppercase tracking-widest text-os-muted flex items-center gap-2">
          <Users className="w-4 h-4 text-[#8B5CF6]" /> Relationship Network
        </h2>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Connection
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-os-card border-os-border text-white">
            <DialogHeader>
              <DialogTitle>Track Connection</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-os-muted">Full Name</label>
                <Input value={newPerson.name} onChange={(e) => setNewPerson({...newPerson, name: e.target.value})} className="bg-os-bg border-os-border" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-os-muted">Relationship</label>
                <Input value={newPerson.relation} onChange={(e) => setNewPerson({...newPerson, relation: e.target.value})} className="bg-os-bg border-os-border" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-os-muted">Review Frequency</label>
                <div className="flex gap-2">
                  {['Daily', 'Weekly', 'Monthly'].map(f => (
                    <button 
                      key={f} 
                      onClick={() => setNewPerson({...newPerson, frequency: f})}
                      className={cn("flex-1 py-2 text-xs border rounded-md transition-all", newPerson.frequency === f ? "bg-[#8B5CF6] border-[#8B5CF6] text-white" : "bg-os-bg border-os-border text-os-muted")}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={addPerson} className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED]">Archive Connection</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((p) => (
          <div key={p.id} className="bg-os-card border border-os-border rounded-xl p-5 space-y-5 hover:border-[#8B5CF6]/30 transition-all group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border border-os-border">
                  <AvatarFallback className="bg-os-bg text-[#8B5CF6] font-bold text-xs">{p.name.slice(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-sm font-bold text-white">{p.name}</h4>
                  <p className="text-[10px] text-os-muted uppercase font-bold tracking-tight">{p.relation}</p>
                </div>
              </div>
              <button className="text-os-muted hover:text-white p-1">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-os-bg border border-os-border rounded-lg p-3">
                <div className="text-[10px] font-bold text-os-muted uppercase mb-1">Last Contact</div>
                <div className="text-xs font-medium text-os-text">{p.lastContact}</div>
              </div>
              <div className="bg-os-bg border border-os-border rounded-lg p-3">
                <div className="text-[10px] font-bold text-os-muted uppercase mb-1">Frequency</div>
                <div className="text-[10px] font-bold text-[#8B5CF6] uppercase">{p.frequency}</div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-os-border">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-os-muted uppercase">
                <Calendar className="w-3 h-3" /> Remind: {p.nextRemind}
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 bg-os-bg border border-os-border rounded hover:border-[#8B5CF6]/50 transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 text-os-muted" />
                </button>
                <button className="p-1.5 bg-os-bg border border-os-border rounded hover:border-[#8B5CF6]/50 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-os-muted" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}