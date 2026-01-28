const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm text-blue-600 font-medium">About the Platform</p>
          <h1 className="text-4xl font-bold mt-2">Designed for clarity in people data.</h1>
          <p className="text-lg text-gray-600 mt-4">
            We built this platform to help teams manage person records with accuracy,
            transparency, and speed. Every feature is focused on reducing friction
            and maintaining trustworthy data.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-3 text-gray-600">
              Empower teams to build reliable records with simple, guided workflows
              and an interface that stays out of the way.
            </p>
          </div>
          <div className="rounded-2xl bg-white border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">What We Value</h2>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Consistency over complexity</li>
              <li>Clear ownership and accountability</li>
              <li>Delightful, professional experiences</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-white border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Milestones</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              { year: "2023", title: "First prototype", body: "Validations and core CRUD flow." },
              { year: "2024", title: "Team launch", body: "Multi-user feedback and UX polish." },
              { year: "2025", title: "Production ready", body: "Reliability, speed, and scale." },
            ].map((item) => (
              <div key={item.year} className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">{item.year}</p>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Meet the Team</h2>
          <p className="mt-2 text-gray-600">
            A small group of engineers and designers focused on high-quality data
            experiences.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Alex Morgan", role: "Product Lead" },
              { name: "Jordan Lee", role: "Frontend Engineer" },
              { name: "Priya Nair", role: "Backend Engineer" },
              { name: "Omar Hassan", role: "UX Designer" },
              { name: "Sofia Alvarez", role: "QA Engineer" },
              { name: "Kai Chen", role: "Data Specialist" },
            ].map((member) => (
              <div key={member.name} className="rounded-xl border bg-white p-4">
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About