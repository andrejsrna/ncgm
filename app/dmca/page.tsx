import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy | No Copyright Gaming Music',
  description: 'DMCA takedown policy and copyright infringement reporting procedures for No Copyright Gaming Music.',
};

export default function DmcaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero section */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            DMCA Policy
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Our commitment to protecting intellectual property rights and handling copyright infringement claims.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Notice box */}
        <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Notice to Copyright Owners</h2>
          <p className="text-gray-300">
            No Copyright Gaming Music respects the intellectual property rights of others and expects our 
            users to do the same. We respond to notices of alleged copyright infringement that comply 
            with applicable law and are properly provided to us.
          </p>
        </div>

        {/* DMCA sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Filing a DMCA Notice</h2>
            <div className="bg-gray-800/30 p-6 rounded-lg">
              <p className="text-gray-400 mb-6">
                If you believe that your copyrighted work has been copied in a way that constitutes 
                copyright infringement, please provide our copyright agent with the following information:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "1. Physical/Electronic Signature",
                    content: "A physical or electronic signature of the copyright owner or authorized person"
                  },
                  {
                    title: "2. Identification of Work",
                    content: "Description of the copyrighted work claimed to have been infringed"
                  },
                  {
                    title: "3. Location Information",
                    content: "The location on our site of the material that you claim is infringing"
                  },
                  {
                    title: "4. Contact Information",
                    content: "Your contact information, including address, phone number, and email"
                  },
                  {
                    title: "5. Good Faith Statement",
                    content: "A statement that you have a good faith belief that use of the material is not authorized"
                  },
                  {
                    title: "6. Accuracy Statement",
                    content: "A statement that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-white font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Counter-Notice Procedures</h2>
            <div className="bg-gray-800/30 p-6 rounded-lg">
              <p className="text-gray-400 mb-4">
                If you believe your content was removed by mistake, you may file a counter-notice containing:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc pl-6">
                <li>Your physical or electronic signature</li>
                <li>Identification of the removed material and its location</li>
                <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                <li>Your name, address, and phone number</li>
                <li>A statement that you consent to local federal court jurisdiction</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Repeat Infringers</h2>
            <div className="bg-red-900/20 p-6 rounded-lg">
              <p className="text-gray-400">
                It is our policy to terminate the accounts of users who repeatedly infringe or are repeatedly 
                charged with infringing the copyrights or other intellectual property rights of others.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Submit DMCA Notice</h2>
            <div className="bg-gray-800/30 p-6 rounded-lg">
              <p className="text-gray-400 mb-6">
                Send your DMCA notices to our designated copyright agent:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Copyright Agent</h3>
                  <p className="text-gray-400">No Copyright Gaming Music</p>
                  <p className="text-gray-400">Enhold s.r.o.</p>
                  <p className="text-gray-400">Drobného 1900/2</p>
                  <p className="text-gray-400">841 02 Bratislava - mestská časť Dúbravka</p>
                  <p className="text-gray-400">Slovakia</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Email</h3>
                  <a 
                    href="mailto:dmca@nocopyrightgamingmusic.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    dmca@nocopyrightgamingmusic.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Warning notice */}
        <div className="mt-16 p-8 bg-yellow-900/20 rounded-xl border border-yellow-700/30">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            ⚠️ Important Notice
          </h2>
          <p className="text-gray-400 text-center">
            False notifications of copyright infringement may result in liability for damages. 
            Please ensure your claim is valid before submitting a DMCA notice.
          </p>
        </div>
      </div>
    </div>
  );
} 