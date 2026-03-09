import React, { useState, useRef } from 'react';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, Volume2, Wind, Music, Droplets, Power, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
  const [isPlayingMixer, setIsPlayingMixer] = useState(false);
  const audioCtx = useRef<AudioContext | null>(null);
  const toggleMixer = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.current.state === 'suspended') {
      audioCtx.current.resume();
    }
    setIsPlayingMixer(!isPlayingMixer);
  };
  return (
    <div className="space-y-8">
      <div className="space-y-6 p-4 bg-os-bg border border-os-border rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[10px] font-bold text-os-muted uppercase tracking-widest">Ambient Mixer</h4>
          <Button 
            size="sm" 
            variant={isPlayingMixer ? "destructive" : "secondary"}
            className={cn("h-7 px-3 text-[10px] font-bold uppercase tracking-wider", isPlayingMixer ? "bg-rose-500/10 border-rose-500/20 text-rose-500 hover:bg-rose-500/20" : "bg-os-mind/10 border-os-mind/20 text-os-mind hover:bg-os-mind/20")}
            onClick={toggleMixer}
          >
            {isPlayingMixer ? (
              <><Square className="w-3 h-3 mr-1.5 fill-current" /> Stop Mixer</>
            ) : (
              <><Power className="w-3 h-3 mr-1.5" /> Start Mixer</>
            )}
          </Button>
        </div>
        <div className={cn("space-y-6 transition-opacity duration-300", !isPlayingMixer && "opacity-40 grayscale pointer-events-none")}>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2 text-os-text">
                <Wind className={cn("w-3 h-3 text-[#8B5CF6]", isPlayingMixer && "animate-pulse")} /> Focus (Noise)
              </span>
              <span className="font-mono text-os-muted">{focus}%</span>
            </div>
            <Slider value={focus} onValueChange={setFocus} max={100} step={1} className="[&_[role=slider]]:bg-[#8B5CF6]" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2 text-os-text">
                <Music className={cn("w-3 h-3 text-[#8B5CF6]", isPlayingMixer && "animate-pulse")} /> Calm (Theta)
              </span>
              <span className="font-mono text-os-muted">{calm}%</span>
            </div>
            <Slider value={calm} onValueChange={setCalm} max={100} step={1} className="[&_[role=slider]]:bg-[#8B5CF6]" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2 text-os-text">
                <Droplets className={cn("w-3 h-3 text-[#8B5CF6]", isPlayingMixer && "animate-pulse")} /> Nature (Rain)
              </span>
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