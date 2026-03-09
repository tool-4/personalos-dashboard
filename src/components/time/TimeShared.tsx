import React from 'react';
import { cn } from '@/lib/utils';
import { TimeBlock, CATEGORY_COLORS } from './time-types';
interface TimeBlockElementProps {
  block: TimeBlock;
  className?: string;
}
export function TimeBlockElement({ block, className }: TimeBlockElementProps) {
  const color = CATEGORY_COLORS[block.category] || '#2a2a2a';
  return (
    <div
      className={cn(
        "rounded-md p-2 text-[10px] font-medium border-l-2 transition-all hover:brightness-110 cursor-default",
        className
      )}
      style={{
        backgroundColor: `${color}15`,
        borderColor: color,
        color: color
      }}
    >
      <div className="font-bold truncate uppercase tracking-tighter">{block.title}</div>
      <div className="opacity-70 font-mono">{block.start} - {block.end}</div>
    </div>
  );
}