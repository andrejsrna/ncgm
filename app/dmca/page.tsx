export default function DmcaPage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Neural Grid Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      {/* Noir Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/10 to-black" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero section */}
        <div className="border-b border-red-900/30 backdrop-blur-sm bg-black/40">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-center mb-4 glitch-text">
              <span className="block absolute -left-0.5 -top-0.5 text-red-600 opacity-80 blur-[1px]">
                Neural Rights Protection Protocol
              </span>
              <span className="relative text-red-500">
                Neural Rights Protection Protocol
              </span>
            </h1>
            <p className="text-red-200/70 text-center max-w-2xl mx-auto font-mono tracking-wider">
              Safeguarding Neural Patterns in the Digital Matrix
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Notice box */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-900 to-red-600 opacity-50 group-hover:opacity-75 blur transition duration-500 rounded-lg" />
            <div className="relative bg-black/80 border border-red-800/50 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-semibold text-red-400 mb-4 font-mono">System Alert: Pattern Protection</h2>
              <p className="text-red-200/70">
                NCGM mainframe actively monitors neural pattern signatures. Unauthorized replication of protected patterns 
                will trigger automated defense protocols. Submit infringement reports through official channels below.
              </p>
            </div>
          </div>

          {/* DMCA sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-red-500 mb-6 font-mono">Neural Pattern Violation Report Protocol</h2>
              <div className="bg-black/80 border border-red-900/30 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-red-200/70 mb-6 font-mono">
                  Submit the following data points to initiate pattern violation investigation:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Protocol 01: Authentication Signature",
                      content: "Digital or analog authentication pattern of rights holder"
                    },
                    {
                      title: "Protocol 02: Pattern Identification",
                      content: "Neural signature of the protected pattern"
                    },
                    {
                      title: "Protocol 03: Violation Coordinates",
                      content: "Matrix coordinates of unauthorized pattern replication"
                    },
                    {
                      title: "Protocol 04: Neural Uplink Data",
                      content: "Your connection protocols for system response"
                    },
                    {
                      title: "Protocol 05: Integrity Verification",
                      content: "Confirmation of unauthorized pattern usage"
                    },
                    {
                      title: "Protocol 06: Authentication Oath",
                      content: "Sworn statement of data accuracy and authorization status"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900/50 to-black opacity-75 group-hover:opacity-100 blur-sm transition duration-500 rounded-lg" />
                      <div className="relative bg-black/60 p-4 rounded-lg border border-red-800/30 group-hover:border-red-600/50 transition duration-300">
                        <h3 className="text-red-400 font-medium mb-2 font-mono">{item.title}</h3>
                        <p className="text-red-200/60 text-sm">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-500 mb-6 font-mono">Counter-Protocol Procedures</h2>
              <div className="bg-black/80 border border-red-900/30 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-red-200/70 mb-4 font-mono">
                  If your neural pattern was flagged in error, initiate counter-protocol with:
                </p>
                <ul className="text-red-200/60 space-y-2 list-[square] pl-6 marker:text-red-500">
                  <li>Digital authentication signature</li>
                  <li>Matrix coordinates of removed pattern</li>
                  <li>Sworn declaration of legitimate pattern usage</li>
                  <li>Neural uplink protocols</li>
                  <li>Jurisdiction acceptance protocol</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-500 mb-6 font-mono">Pattern Violation Enforcement</h2>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-900 to-red-600 opacity-30 group-hover:opacity-50 blur transition duration-500 rounded-lg" />
                <div className="relative bg-black/80 p-6 rounded-lg border border-red-800/50">
                  <p className="text-red-200/70 font-mono">
                    Repeat pattern violators will be subject to permanent neural network disconnection. 
                    System maintains zero tolerance for repeated unauthorized pattern replication.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-red-500 mb-6 font-mono">Neural Rights Enforcement Node</h2>
              <div className="bg-black/80 border border-red-900/30 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-red-200/70 mb-6 font-mono">
                  Direct violation reports to authorized enforcement node:
                </p>
                <div className="space-y-4">
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900/50 to-black opacity-75 group-hover:opacity-100 blur-sm transition duration-500 rounded-lg" />
                    <div className="relative bg-black/60 p-4 rounded-lg border border-red-800/30">
                      <h3 className="text-red-400 font-medium mb-2 font-mono">Enforcement Node Location</h3>
                      <p className="text-red-200/60">No Copyright Gaming Music</p>
                      <p className="text-red-200/60">Enhold s.r.o.</p>
                      <p className="text-red-200/60">Drobného 1900/2</p>
                      <p className="text-red-200/60">841 02 Bratislava - mestská časť Dúbravka</p>
                      <p className="text-red-200/60">Slovakia</p>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900/50 to-black opacity-75 group-hover:opacity-100 blur-sm transition duration-500 rounded-lg" />
                    <div className="relative bg-black/60 p-4 rounded-lg border border-red-800/30">
                      <h3 className="text-red-400 font-medium mb-2 font-mono">Neural Uplink</h3>
                      <a 
                        href="mailto:dmca@nocopyrightgamingmusic.com" 
                        className="text-red-400 hover:text-red-300 transition-colors font-mono"
                      >
                        dmca@nocopyrightgamingmusic.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Warning notice */}
          <div className="mt-16 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-900 to-red-900 opacity-30 group-hover:opacity-50 blur transition duration-500 rounded-xl" />
            <div className="relative p-8 bg-black/80 rounded-xl border border-yellow-900/30">
              <h2 className="text-xl font-semibold text-yellow-500 mb-4 text-center font-mono">
                ⚠️ Critical System Warning
              </h2>
              <p className="text-yellow-200/70 text-center font-mono">
                False pattern violation reports will trigger system backlash protocols.
                Verify pattern ownership before initiating violation reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 