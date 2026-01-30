'use client';

import { useState } from 'react';

export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <button
        onClick={copyLink}
        className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-sky-600/25"
      >
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
      <a
        href="/vision-scotland-policy.pdf"
        download="Vision-Scotland-Policy-v1.14.pdf"
        className="px-6 py-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600 inline-flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Download PDF
      </a>
    </div>
  );
}
