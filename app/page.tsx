import Link from 'next/link';

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Energy Bills Cut in Half",
    description: "Scotland generates more renewable electricity than we use. You should pay £50/month, not £150.",
    stat: "£50/mo",
    statLabel: "target bill"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Housing Costs Capped",
    description: "If you earn £30,000, your rent or mortgage shouldn't exceed £625/month. We build enough homes to make this real.",
    stat: "25%",
    statLabel: "of income max"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Four-Day Week",
    description: "32 hours, same pay. A three-day weekend every week. Time to see your kids, have a life. Trials show productivity stays the same.",
    stat: "3",
    statLabel: "day weekend"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Free Childcare from Age 1",
    description: "No more choosing between working and looking after your kids. Sweden and Denmark do this. It pays for itself.",
    stat: "Free",
    statLabel: "from age 1"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Lower Income Tax",
    description: "We shift tax from wages onto land and wealth. If you work for a living, you keep more of what you earn.",
    stat: "Less",
    statLabel: "tax on work"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "NHS Fixed Properly",
    description: "Eight weeks for a hip replacement, not eighteen months. Funded by wealth we're currently giving to energy companies.",
    stat: "8",
    statLabel: "week target"
  },
];

const countries = [
  { name: "Norway", flag: "🇳🇴", lesson: "Wealth Fund" },
  { name: "Estonia", flag: "🇪🇪", lesson: "Digital Gov" },
  { name: "Denmark", flag: "🇩🇰", lesson: "Land Tax" },
  { name: "Iceland", flag: "🇮🇸", lesson: "4-Day Week" },
  { name: "Switzerland", flag: "🇨🇭", lesson: "Life Sciences" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              A Vision for a
              <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Better Scotland
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Less Tax, Less Work, More Life
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              A comprehensive framework for building a happier, fairer, and more prosperous society through technology, renewable wealth, and progressive policy reform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Link
                href="/policy"
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Read the Full Vision
              </Link>
              <Link
                href="#benefits"
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur border border-white/20"
              >
                What's In It For You?
              </Link>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "£100bn+", label: "Wealth Fund by 2045" },
              { value: "32hrs", label: "Working Week" },
              { value: "60-70%", label: "Pay Zero Land Tax" },
              { value: "£1,500", label: "Annual Savings" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-sky-400">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What's In It For You?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Before you read 50 pages of policy, here's what this actually means for your life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-white dark:hover:bg-slate-700 transition-all hover:shadow-xl border border-transparent hover:border-sky-200 dark:hover:border-sky-800"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sky-100 dark:bg-sky-900/50 rounded-xl text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-sky-600 dark:text-sky-400">{benefit.stat}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{benefit.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Models Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Not Fantasy. Proven Elsewhere.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Every policy exists somewhere today. We're just bringing together the best ideas from countries that already work better.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {countries.map((country, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-700 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">{country.flag}</span>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{country.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{country.lesson}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <blockquote className="text-xl md:text-2xl font-medium mb-4 italic">
              "The goal and objective of all economic policy should be collective wellbeing."
            </blockquote>
            <cite className="text-sky-200">— Nicola Sturgeon, Wellbeing Economy Alliance, 2020</cite>
          </div>
        </div>
      </section>

      {/* Who Opposes Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Who Doesn't Want You To Read This?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                If these ideas are so good, why haven't you heard them before? Because the people who'd pay more under these policies are the same people who control what you read and hear.
              </p>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span><strong>Six billionaires</strong> own 90% of UK print media. Most are non-domiciled for tax.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span><strong>433 landowners</strong> control half of Scotland's rural land. Many inherited it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span><strong>Energy companies</strong> made £125 billion in profits while your bills doubled.</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8">
              <h3 className="font-semibold text-xl text-slate-900 dark:text-white mb-4">
                This isn't conspiracy. It's just interests.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                People with money and power use that money and power to protect their position. The question is whether you let them.
              </p>
              <Link
                href="/policy#who-doesnt-want-you-to-read-this"
                className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-medium hover:text-sky-700 dark:hover:text-sky-300"
              >
                Learn more about media ownership
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See What's Possible?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            The full policy document explains exactly how we get there - with sources, data, and honest accounting. Every highlighted term shows you where the money comes from and who benefits.
          </p>
          <Link
            href="/policy"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Read the Full Vision
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-6 text-sm text-sky-200">
            Version 1.14 - January 2026
          </p>
        </div>
      </section>
    </div>
  );
}
