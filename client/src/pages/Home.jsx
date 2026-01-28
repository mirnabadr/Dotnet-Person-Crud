

import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                Built for reliable people data
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Manage people records with clarity and confidence.
              </h1>
              <p className="text-lg text-gray-600">
                A focused platform that keeps your person data clean, consistent,
                and easy to maintain across teams.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/person"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 transition"
                >
                  Get Started
                </Link>
                <Link
                  to="/about"
                  className="rounded-lg border border-gray-300 px-5 py-2.5 text-gray-700 font-medium hover:bg-gray-100 transition"
                >
                  View Documentation
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Secure</span>
                <span>•</span>
                <span>Fast</span>
                <span>•</span>
                <span>Modern UI</span>
              </div>
            </div>
            <div className="rounded-2xl border bg-linear-to-br from-blue-50 to-purple-50 p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Profiles", value: "2.4k" },
                  { label: "Active Teams", value: "68" },
                  { label: "Avg. Response", value: "120ms" },
                  { label: "Uptime", value: "99.9%" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-white p-4">
                <p className="text-sm text-gray-500">Latest update</p>
                <p className="font-medium">Data validation rules refined</p>
                <p className="text-sm text-gray-600">
                  Reduce duplicates and standardize records automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-semibold">Everything you need to stay organized</h2>
          <p className="text-gray-600">
            Purpose-built features that help teams collaborate on person data without
            losing accuracy.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Smart Forms",
              description:
                "Validated inputs and safe defaults reduce errors and keep entries consistent.",
            },
            {
              title: "Fast Search",
              description:
                "Find and filter people instantly with lightweight queries.",
            },
            {
              title: "Change Tracking",
              description:
                "Confidently update records with clear edit flows and feedback.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ready to streamline your workflow?</h3>
              <p className="text-gray-600">
                Start building a cleaner, more trustworthy source of people data.
              </p>
            </div>
            <Link
              to="/person"
              className="rounded-lg bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
            >
              Launch the Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home