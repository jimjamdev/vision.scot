import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white">vision.scot</span>
            </div>
            <p className="text-sm leading-relaxed">
              A comprehensive framework for building a happier, fairer, and more prosperous Scotland through technology, renewable wealth, and progressive policy reform.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-sky-400 transition-colors">Full Policy Document</Link>
              </li>
              <li>
                <Link href="/policy#executive-summary" className="hover:text-sky-400 transition-colors">Executive Summary</Link>
              </li>
              <li>
                <Link href="/policy#the-scottish-wealth-fund" className="hover:text-sky-400 transition-colors">Scottish Wealth Fund</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Key Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/policy#four-day-week" className="hover:text-sky-400 transition-colors">Four-Day Week</Link>
              </li>
              <li>
                <Link href="/policy#land-value-tax" className="hover:text-sky-400 transition-colors">Land Value Tax</Link>
              </li>
              <li>
                <Link href="/policy#cheaper-energy" className="hover:text-sky-400 transition-colors">Cheaper Energy</Link>
              </li>
              <li>
                <Link href="/policy#housing" className="hover:text-sky-400 transition-colors">Affordable Housing</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          <p>Version 1.14 - January 2026</p>
          <p className="mt-2">
            Built with transparency. View the{' '}
            <span className="text-sky-400">funding data</span> behind any highlighted term.
          </p>
        </div>
      </div>
    </footer>
  );
}
