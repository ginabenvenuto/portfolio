export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
        <span className="text-lg font-semibold text-gray-900">Gina Benvenuto</span>
        <a
          href="https://linkedin.com/in/ginabenvenuto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          LinkedIn →
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-8 pt-24 pb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Building products with AI.
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          Product builder exploring what&apos;s possible when you pair human creativity
          with Claude Code. Here are a few things I&apos;ve made.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto px-8 pb-24">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Projects
        </h2>
        <div className="space-y-6">
          {/* Job Scam Checker */}
          <a
            href="https://job-scam-checker.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-100 rounded-2xl p-8 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Job Opportunity Checker
              </h3>
              <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
                AI Tool
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Paste a job post, email, or upload a screenshot. Get an honest, non-judgmental
              second opinion on whether an opportunity looks legitimate — built for job seekers
              navigating platforms like LinkedIn and Indeed.
            </p>
          </a>

          {/* SF Parents Hub */}
          <a
            href="https://sf-parents-hub.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-gray-100 rounded-2xl p-8 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                SF Parents Hub
              </h3>
              <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full font-medium">
                Community
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              A community directory for parents and caregivers in San Francisco.
              WhatsApp groups, meetups, caregiver referrals, school info, and
              family-friendly activities — all in one place.
            </p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-8 py-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between text-sm text-gray-400">
          <span>Built with Claude Code</span>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/ginabenvenuto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ginabenvenuto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
