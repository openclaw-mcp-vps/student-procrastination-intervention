export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Procrastinating.<br />
          <span className="text-[#58a6ff]">Start Studying.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          FocusGuard monitors your study habits, detects procrastination patterns, and sends personalized interventions via email, SMS, and in-app nudges — before deadlines sneak up on you.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started for $7/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            ["📊", "Pattern Detection", "ML algorithms spot procrastination before it derails you"],
            ["🔔", "Smart Interventions", "Timely nudges via email, SMS, and in-app alerts"],
            ["📅", "Deadline Awareness", "Syncs with your course platform to track every due date"]
          ].map(([icon, title, desc]) => (
            <div key={title as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 text-left">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-semibold text-white mb-1">{title}</div>
              <div className="text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$7<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay on track</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Unlimited procrastination alerts",
              "Email + SMS interventions",
              "LMS & study app integrations",
              "Personalized study schedules",
              "Progress analytics dashboard"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does FocusGuard detect procrastination?",
              "Our ML model analyzes your study session timing, app usage patterns, and assignment deadlines to identify when you're likely to procrastinate — then intervenes before it happens."
            ],
            [
              "Which platforms does it integrate with?",
              "FocusGuard connects with Canvas, Blackboard, Moodle, Coursera, and more via API. A browser extension captures activity across any study site."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel your $7/mo subscription at any time with no fees or penalties. Your data is deleted within 30 days of cancellation."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
