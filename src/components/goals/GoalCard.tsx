import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
interface GoalCardProps {
  id: string;
  title: string;
  category: string;
  progress: number;
  deadline: string;
  daysRemaining: number;
  color: string;
}
export function GoalCard({ id, title, category, progress, deadline, daysRemaining, color }: GoalCardProps) {
  const navigate = useNavigate();
  return (
    <Card 
      className="bg-os-card border-os-border overflow-hidden cursor-pointer group hover:border-[#6366f1]/50 transition-all duration-300"
      onClick={() => navigate(`/goals/${id}`)}
    >
      <CardContent className="p-5 flex flex-col gap-5 h-full">
        <div className="flex items-start justify-between">
          <Badge 
            className="rounded-full font-bold text-[10px] px-2.5 py-0.5"
            style={{ backgroundColor: `${color}20`, color: color, borderColor: `${color}40` }}
            variant="outline"
          >
            {category}
          </Badge>
          <div className="text-[10px] font-mono font-bold text-os-muted flex items-center gap-1.5 uppercase">
            <Calendar className="w-3 h-3" />
            {deadline}
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-bold text-white group-hover:text-[#6366f1] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-os-muted">
            {daysRemaining} days remaining
          </p>
        </div>
        <div className="mt-auto space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-os-muted uppercase">Progress</span>
            <span className="text-sm font-mono font-bold text-white">{progress}%</span>
          </div>
          <Progress 
            value={progress} 
            className="h-1.5 bg-os-bg" 
            style={{ '--progress-background': '#6366f1' } as any}
          />
        </div>
        <div className="flex items-center justify-end pt-2 text-[10px] font-bold text-os-muted uppercase group-hover:text-[#6366f1] transition-colors">
          Manage Goal <ChevronRight className="w-3 h-3 ml-1" />
        </div>
      </CardContent>
    </Card>
  );
}