'use client';

import * as Popover from '@radix-ui/react-popover';
import { useState, useRef } from 'react';

interface TooltipData {
  type: string;
  description: string;
  relevance?: string;
  funding_source?: string;
}

interface TooltipProps {
  term: string;
  data: TooltipData;
  children: React.ReactNode;
}

export function Tooltip({ term, data, children }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleClose = () => {
    // Delay closing to allow moving to popover
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const typeColors: Record<string, string> = {
    country: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    policy: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
    statistic: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    person: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    organisation: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
    media: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    political: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    think_tank: 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300',
    research: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
    project: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
    initiative: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
    industry: 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
    infrastructure: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
    land_use: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    transport: 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300',
    programme: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
    framework: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300',
    data: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
    issue: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    company: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  };

  const typeLabels: Record<string, string> = {
    country: 'Country Model',
    policy: 'Policy',
    statistic: 'Key Data',
    person: 'Person',
    organisation: 'Organisation',
    media: 'Media',
    political: 'Political',
    think_tank: 'Think Tank',
    research: 'Research',
    project: 'Project',
    initiative: 'Initiative',
    industry: 'Industry',
    infrastructure: 'Infrastructure',
    land_use: 'Land Use',
    transport: 'Transport',
    programme: 'Programme',
    framework: 'Framework',
    data: 'Data',
    issue: 'Issue',
    company: 'Company',
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="inline text-amber-600 dark:text-amber-400 border-b-2 border-dotted border-amber-400 dark:border-amber-500 cursor-pointer transition-colors hover:text-amber-700 hover:border-amber-500 hover:bg-amber-50 dark:hover:text-amber-300 dark:hover:border-amber-400 dark:hover:bg-amber-900/20 rounded-sm px-0.5 -mx-0.5 font-inherit text-inherit"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          onClick={() => setIsOpen(!isOpen)}
        >
          {children}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="z-[100] w-80 max-w-[calc(100vw-32px)] p-4 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
          sideOffset={8}
          align="center"
          collisionPadding={16}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <div className="flex items-start gap-2 mb-3">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[data.type] || typeColors.policy}`}>
              {typeLabels[data.type] || data.type}
            </span>
          </div>

          <h4 className="font-semibold text-base text-slate-900 dark:text-slate-100 mb-2">
            {term}
          </h4>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            {data.description}
          </p>

          {data.funding_source && (
            <div className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700 pt-3 mt-3">
              <span className="font-semibold text-rose-600 dark:text-rose-400">Funding:</span>{' '}
              {data.funding_source}
            </div>
          )}

          {data.relevance && (
            <div className="text-xs text-sky-600 dark:text-sky-400 mt-2">
              <span className="font-semibold">Why it matters:</span>{' '}
              {data.relevance}
            </div>
          )}

          <Popover.Arrow className="fill-white dark:fill-slate-800" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
