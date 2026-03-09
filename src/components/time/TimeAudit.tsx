import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
const auditData = [
  { activity: 'Deep Work: Coding', planned: 4.0, actual: 3.5, delta: -0.5, status: 'Good' },
  { activity: 'Admin & Emails', planned: 1.0, actual: 2.0, delta: 1.0, status: 'Over' },
  { activity: 'Meetings', planned: 2.0, actual: 1.5, delta: -0.5, status: 'Under' },
  { activity: 'Exercise', planned: 1.0, actual: 1.0, delta: 0, status: 'Perfect' },
];
export function TimeAudit() {
  return (
    <div className="space-y-8">
      <div className="bg-os-card border border-os-border rounded-xl overflow-hidden">
        <Table>
          <TableHeader className="bg-os-bg/50">
            <TableRow className="border-os-border hover:bg-transparent">
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-os-muted">Activity Area</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-os-muted">Planned (H)</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-os-muted">Actual (H)</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-os-muted">Delta</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-os-muted text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditData.map((row) => (
              <TableRow key={row.activity} className="border-os-border hover:bg-white/5 transition-colors">
                <TableCell className="font-medium text-white text-sm">{row.activity}</TableCell>
                <TableCell className="font-mono text-os-text">{row.planned.toFixed(1)}</TableCell>
                <TableCell className="font-mono text-os-text">{row.actual.toFixed(1)}</TableCell>
                <TableCell className={cn("font-mono", row.delta > 0 ? "text-orange-400" : row.delta < 0 ? "text-os-primary" : "text-os-muted")}>
                  {row.delta > 0 ? `+${row.delta}` : row.delta}
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant="outline" className="text-[10px] font-bold border-os-border uppercase">
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted">Reflection: Time Thieves</h3>
          <Textarea
            placeholder="What stole your focus today? (e.g., Slack notifications, unexpected calls)"
            className="min-h-[120px] bg-os-bg border-os-border text-sm resize-none focus:border-[#0ea5e9]"
          />
        </div>
        <div className="bg-os-card border border-os-border rounded-xl p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-os-muted">Calibration for Tomorrow</h3>
          <Textarea
            placeholder="How will you adjust your schedule for better alignment?"
            className="min-h-[120px] bg-os-bg border-os-border text-sm resize-none focus:border-[#0ea5e9]"
          />
        </div>
      </div>
    </div>
  );
}