"use client"

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32 px-6 sm:px-10 lg:px-20 bg-transparent">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[30rem] h-[30rem] bg-cyan-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-[10%] w-[25rem] h-[25rem] bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header with badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-cyan-300 text-sm font-semibold tracking-wide">About YuvaQ</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Empowering{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Businesses
            </span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            At <span className="text-cyan-300 font-semibold">YuvaQ</span>, we specialize in creating enterprise-grade
            digital ecosystems that combine the power of <span className="text-blue-300 font-medium">AI</span>,{" "}
            <span className="text-purple-300 font-medium">automation</span>, and{" "}
            <span className="text-cyan-300 font-medium">data intelligence</span>. Our goal is to simplify complexity,
            accelerate growth, and help businesses make smarter decisions through intuitive technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {[
            { number: "8+", label: "Years of Experience", color: "cyan" },
            { number: "50+", label: "Enterprise Clients", color: "blue" },
            { number: "20+", label: "Industries Served", color: "purple" },
            { number: "99.9%", label: "Uptime Guarantee", color: "cyan" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] transition-all duration-300"
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-${stat.color}-500/10 to-transparent`}
              ></div>

              <div className="relative z-10">
                <h4 className={`text-3xl sm:text-4xl font-bold mb-2 text-${stat.color}-300`}>{stat.number}</h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation First",
                description: "We push boundaries and embrace emerging technologies to deliver cutting-edge solutions.",
                icon: "⚡",
              },
              {
                title: "Reliability Built In",
                description: "Enterprise-grade infrastructure with 99.9% uptime ensures your business never stops.",
                icon: "🔒",
              },
              {
                title: "Human-Centered Design",
                description:
                  "Intuitive interfaces that empower users, not confuse them. Technology should serve people.",
                icon: "👥",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
