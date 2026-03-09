import React, { useState, useRef, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, Volume2, Wind, Music, Droplets } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
const LIBRARY = [
  { id: 1, title: 'Box Breathing', duration: '5:00', type: 'Technique' },
  { id: 2, title: 'Deep Presence', duration: '10:00', type: 'Meditation' },
  { id: 3, title: 'Ego Dissolution', duration: '15:00', type: 'Guided' },
  { id: 4, title: 'Sleep Hygiene', duration: '12:00', type: 'Talk' },
  { id: 5, title: 'Stress Release', duration: '8:00', type: 'Guided' },
  { id: 6, title: 'Gratitude Scan', duration: '10:00', type: 'Guided' },
  { id: 7, title: 'Focus Sharpener', duration: '5:00', type: 'Technique' },
  { id: 8, title: 'Loving Kindness', duration: '15:00', type: 'Guided' },
];
export function MindAudio() {
  const [focus, setFocus] = useState([20]);
  const [calm, setCalm] = useState([40]);
  const [nature, setNature] = useState([10]);
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const audioCtx = useRef<AudioContext | null>(null);
  const oscillators = useRef<any[]>([]);
  const toggleMixer = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    // Simplification for UI representation: In a real app we'd start/stop noise nodes here
  };
  return (
    <div className="space-y-8">
      <div className="space-y-6 p-4 bg-os-bg border border-os-border rounded-xl">
        <h4 className="text-[10px] font-bold text-os-muted uppercase tracking-widest mb-4">Ambient Mixer</h4>
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2 text-os-text"><Wind className="w-3 h-3 text-[#8B5CF6]" /> Focus (Noise)</span>
              <span className="font-mono text-os-muted">{focus}%</span>
            </div>
            <Slider value={focus} onValueChange={setFocus} max={100} step={1} className="[&_[role=slider]]:bg-[#8B5CF6]" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2 text-os-text"><Music className="w-3 h-3 text-[#8B5CF6]" /> Calm (Theta)</span>
              <span className="font-mono text-os-muted">{calm}%</span>
            </div>
            <Slider value={calm} onValueChange={setCalm} max={100} step={1} className="[&_[role=slider]]:bg-[#8B5CF6]" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2 text-os-text"><Droplets className="w-3 h-3 text-[#8B5CF6]" /> Nature (Rain)</span>
              <span className="font-mono text-os-muted">{nature}%</span>
            </div>
            <Slider value={nature} onValueChange={setNature} max={100} step={1} className="[&_[role=slider]]:bg-[#8B5CF6]" />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-[10px] font-bold text-os-muted uppercase tracking-widest">Guided Library</h4>
        <div className="grid grid-cols-1 gap-2">
          {LIBRARY.map((track) => (
            <div 
              key={track.id}
              className="flex items-center justify-between p-3 rounded-lg bg-os-bg border border-os-border hover:border-[#8B5CF6]/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setActiveTrack(activeTrack === track.id ? null : track.id)}
                  className="w-8 h-8 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white transition-all"
                >
                  {activeTrack === track.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div>
                  <div className="text-sm font-medium text-white">{track.title}</div>
                  <div className="text-[10px] text-os-muted uppercase font-mono">{track.type} • {track.duration}</div>
                </div>
              </div>
              {activeTrack === track.id && (
                <div className="w-24 h-1 bg-os-card rounded-full overflow-hidden">
                  <div className="h-full bg-[#8B5CF6] animate-pulse" style={{ width: '45%' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}