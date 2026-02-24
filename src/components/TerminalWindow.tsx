import React from 'react';
import { Gauge, AlertTriangle } from 'lucide-react';
export type ContactFormState = 'empty' | 'filled' | 'submitted';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  isWarning?: boolean;
  /** When set, overrides isWarning and animates border/glow: empty=red, filled=yellow, submitted=green */
  formState?: ContactFormState;
}
export function TerminalWindow({
  title,
  children,
  className = '',
  isWarning = false,
  formState,
}: TerminalWindowProps) {
  const formStateStyles: Record<ContactFormState, { border: string; glow: string; icon: string }> = {
    empty: { border: 'border-brake-red', glow: 'shadow-glow-red', icon: 'text-brake-red' },
    filled: { border: 'border-form-yellow', glow: 'shadow-glow-yellow', icon: 'text-form-yellow' },
    submitted: { border: 'border-form-green', glow: 'shadow-glow-green', icon: 'text-form-green' },
  };
  const style = formState !== undefined
    ? formStateStyles[formState]
    : { border: isWarning ? 'border-brake-red' : 'border-challenger-orange', glow: isWarning ? 'shadow-glow-red' : 'shadow-glow-orange', icon: isWarning ? 'text-brake-red' : 'text-challenger-orange' };
  const borderColor = style.border;
  const glowClass = style.glow;
  const iconColor = style.icon;
  return (
    <div
      className={`relative bg-garage border-2 ${borderColor} ${glowClass} transition-all duration-500 ease-out ${className} overflow-hidden`}>

      {/* Carbon Fiber Background Overlay */}
      <div className="absolute inset-0 carbon-fiber opacity-20 pointer-events-none z-0"></div>

      {/* Header / Instrument Cluster Top */}
      <div className="relative z-10 bg-zinc-900/90 border-b border-zinc-700 p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {formState !== undefined ? (
            <AlertTriangle className={`${iconColor} w-5 h-5 transition-colors duration-500`} />
          ) : isWarning ? (
            <AlertTriangle className="text-brake-red w-5 h-5" />
          ) : (
            <Gauge className="text-challenger-orange w-5 h-5" />
          )}
          <span className="font-bebas text-xl tracking-wider text-white">
            {title}
          </span>
        </div>

        {/* Status Lights */}
        <div className="flex gap-2">
          <div
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              formState === 'empty' ? 'bg-brake-red animate-pulse' :
              formState === 'filled' ? 'bg-form-yellow' :
              formState === 'submitted' ? 'bg-form-green' :
              isWarning ? 'bg-brake-red animate-pulse' : 'bg-green-500'
            }`}
          />
          <div
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              formState === 'filled' ? 'bg-form-yellow' :
              formState === 'submitted' ? 'bg-form-green' : 'bg-zinc-700'
            }`}
          />
          <div
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              formState === 'submitted' ? 'bg-form-green' : 'bg-zinc-700'
            }`}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 p-6">{children}</div>

      {/* Decorative Corner Brackets */}
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${borderColor}`}>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${borderColor}`}>
      </div>
    </div>);

}