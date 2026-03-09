import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ChevronRight, Target, BarChart3, ListTree, Calendar } from 'lucide-react';
import { PersonalLayout } from '@/components/layout/PersonalLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
const steps = [
  { id: 1, title: 'Define', icon: Target },
  { id: 2, title: 'Metrics', icon: BarChart3 },
  { id: 3, title: 'Milestones', icon: ListTree },
  { id: 4, title: 'Schedule', icon: Calendar },
];
export function NewGoalPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => setCurrentStep((p) => Math.min(p + 1, steps.length));
  const prevStep = () => setCurrentStep((p) => Math.max(p - 1, 1));
  return (
    <PersonalLayout>
      <div className="max-w-2xl mx-auto space-y-10">
        <header className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/goals')} className="text-os-muted hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-white">Create New Goal</h1>
            <p className="text-sm text-os-muted">Architect your future through deliberate planning.</p>
          </div>
        </header>
        {/* Step Indicator */}
        <div className="flex items-center justify-between relative px-2">
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-px bg-os-border" />
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
              <div 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  currentStep === step.id ? "bg-[#6366f1] border-[#6366f1] text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]" : 
                  currentStep > step.id ? "bg-os-primary border-os-primary text-white" : "bg-os-bg border-os-border text-os-muted"
                )}
              >
                {currentStep > step.id ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
              </div>
              <span className={cn("text-[10px] font-bold uppercase tracking-wider", currentStep >= step.id ? "text-white" : "text-os-muted")}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
        {/* Wizard Form */}
        <div className="bg-os-card border border-os-border rounded-2xl p-8 min-h-[400px] flex flex-col">
          <div className="flex-1">
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-os-muted uppercase">What is your objective?</label>
                  <Input placeholder="e.g. Run a half marathon" className="bg-os-bg border-os-border p-6 text-lg" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-os-muted uppercase">Life Area</label>
                  <Select>
                    <SelectTrigger className="bg-os-bg border-os-border p-6 h-14">
                      <SelectValue placeholder="Select area..." />
                    </SelectTrigger>
                    <SelectContent className="bg-os-card border-os-border">
                      <SelectItem value="health">Health & Fitness</SelectItem>
                      <SelectItem value="career">Career & Work</SelectItem>
                      <SelectItem value="learning">Learning & Growth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-os-muted uppercase">Target Value</label>
                    <Input type="number" placeholder="0" className="bg-os-bg border-os-border p-6 h-14" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-os-muted uppercase">Unit</label>
                    <Input placeholder="kg, pages, books" className="bg-os-bg border-os-border p-6 h-14" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-os-muted uppercase">Target Deadline</label>
                  <Input type="date" className="bg-os-bg border-os-border p-6 h-14 block" />
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <p className="text-sm text-os-muted">Break your goal down into actionable milestones.</p>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input placeholder="Add a milestone..." className="bg-os-bg border-os-border" />
                    <Button variant="outline" className="border-os-border">Add</Button>
                  </div>
                  <div className="p-4 border border-dashed border-os-border rounded-lg text-center text-xs text-os-muted">
                    No milestones added yet.
                  </div>
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-os-muted uppercase">How often will you review this?</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Daily', 'Weekly', 'Monthly'].map((f) => (
                      <button key={f} className="p-4 rounded-xl border border-os-border bg-os-bg hover:border-[#6366f1] transition-all text-sm font-medium">
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-[#6366f1]/5 border border-[#6366f1]/20 rounded-xl text-xs text-[#6366f1] leading-relaxed">
                  Regular reviews are the engine of success. We'll remind you to check-in on the selected cadence.
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between pt-8 border-t border-os-border mt-8">
            <Button variant="ghost" onClick={prevStep} disabled={currentStep === 1} className="text-os-muted">
              Back
            </Button>
            <Button 
              className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8"
              onClick={currentStep === steps.length ? () => navigate('/goals') : nextStep}
            >
              {currentStep === steps.length ? 'Finish & Create' : 'Next Step'} <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </PersonalLayout>
  );
}