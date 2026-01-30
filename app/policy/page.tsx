import { PolicyContent } from '@/components/PolicyContent';
import { ShareButtons } from '@/components/ShareButtons';
import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'A Vision for a Better Scotland - Full Policy Document',
  description: 'The complete policy framework for building a happier, fairer, and more prosperous Scotland. Version 1.14, January 2026.',
};

async function getPolicy() {
  const filePath = path.join(process.cwd(), 'content', 'policy.md');
  const content = await fs.readFile(filePath, 'utf8');
  return content;
}

export default async function PolicyPage() {
  const content = await getPolicy();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Version 1.14 — January 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            A Vision for a
            <span className="block bg-gradient-to-r from-sky-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
              Better Scotland
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-sky-200 font-medium mb-4">
            Less Tax, Less Work, More Life
          </p>
          <p className="text-slate-400 max-w-xl mx-auto">
            Hover over <span className="border-b-2 border-dotted border-amber-400 text-amber-400">highlighted terms</span> to see funding sources, international examples, and who benefits.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="sticky top-16 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-3">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">Tooltip types:</span>
            <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">Countries</span>
            <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">Policies</span>
            <span className="px-2 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full">Data</span>
            <span className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">People</span>
            <span className="px-2 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full">Orgs</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <PolicyContent content={content} />
      </article>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-slate-100 to-sky-50 dark:from-slate-800 dark:to-slate-900 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Share This Vision
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The only way these ideas spread is if people share them. The newspapers won't do it for us.
          </p>
          <ShareButtons />
        </div>
      </section>
    </div>
  );
}
