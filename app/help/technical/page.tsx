'use client';

import Link from 'next/link';
import { FaChevronLeft, FaCheck, FaCircle, FaExclamationTriangle, FaWaveSquare, FaServer, FaFile, FaGamepad } from 'react-icons/fa';
import { RiShieldKeyholeFill, RiSettings4Fill } from 'react-icons/ri';
import { MdMemory, MdOutlineIntegrationInstructions } from 'react-icons/md';

const neuralAnomalies = [
  {
    category: "Signal Fidelity",
    icon: <FaWaveSquare className="w-8 h-8" />,
    problems: [
      {
        title: "Neural Degradation",
        symptoms: [
          "Signal distortion matrix",
          "Low bandwidth neural stream",
          "Pattern compression artifacts"
        ],
        solutions: [
          "Verify high-fidelity neural pattern",
          "Confirm protocol format (Neural/320kbps)",
          "Re-sync from primary node",
          "Optimize neural export parameters"
        ]
      },
      {
        title: "Amplitude Anomalies",
        symptoms: [
          "Signal strength variance",
          "Inconsistent neural levels",
          "Pattern overflow detected"
        ],
        solutions: [
          "Execute neural normalization",
          "Calibrate master signal levels",
          "Apply quantum gain protocols",
          "Implement neural limiters"
        ]
      }
    ]
  },
  {
    category: "Data Protocols",
    icon: <FaFile className="w-8 h-8" />,
    problems: [
      {
        title: "Protocol Compatibility",
        symptoms: [
          "Neural pattern rejection",
          "Matrix recognition failure",
          "Protocol conversion errors"
        ],
        solutions: [
          "Use node-compatible protocols",
          "Execute professional conversion",
          "Sync correct protocol version",
          "Update neural codecs"
        ]
      },
      {
        title: "Neural Metadata",
        symptoms: [
          "Pattern data corruption",
          "Neural tag misalignment",
          "Data structure anomalies"
        ],
        solutions: [
          "Deploy metadata optimization",
          "Re-sync with full neural data",
          "Manual data reconstruction",
          "Implement systematic protocols"
        ]
      }
    ]
  },
  {
    category: "Matrix Integration",
    icon: <FaGamepad className="w-8 h-8" />,
    problems: [
      {
        title: "Neural DAW Sync",
        symptoms: [
          "Integration failure",
          "Plugin neural conflict",
          "Pattern sync issues"
        ],
        solutions: [
          "Update neural matrix",
          "Verify protocol compatibility",
          "Clear neural cache",
          "Sync quantum rate"
        ]
      },
      {
        title: "Neural Stream Matrix",
        symptoms: [
          "Neural desynchronization",
          "Stream pattern artifacts",
          "OBS neural conflicts"
        ],
        solutions: [
          "Configure neural parameters",
          "Optimize bandwidth protocol",
          "Set neural buffer matrix",
          "Update stream protocols"
        ]
      }
    ]
  }
];

const neuralSpecs = [
  {
    title: "Neural Protocols",
    specs: [
      "Quantum WAV (48kHz/24-bit)",
      "Neural MP3 (320kbps)",
      "Quantum AIFF (48kHz/24-bit)",
      "Neural FLAC (lossless)"
    ],
    icon: <FaServer className="w-8 h-8" />
  },
  {
    title: "System Matrix",
    specs: [
      "Advanced neural browser",
      "Pattern playback matrix",
      "Quantum storage array",
      "Stable neural uplink"
    ],
    icon: <MdMemory className="w-8 h-8" />
  },
  {
    title: "Matrix Compatibility",
    specs: [
      "Neural DAW integration",
      "Visual pattern editors",
      "Stream matrix protocols",
      "Neural pattern players"
    ],
    icon: <MdOutlineIntegrationInstructions className="w-8 h-8" />
  }
];

export default function TechnicalPage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.7) 1px, transparent 1px),
            radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      {/* Hero section */}
      <div className="relative border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Link
              href="/help"
              className="group relative inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
            >
              <FaChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-mono">Return to Support Matrix</span>
            </Link>
          </div>
          <h1 className="relative inline-block mb-6 mx-auto text-center w-full">
            <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
            <span className="relative text-5xl font-extrabold text-red-500 font-mono tracking-wider">
              Neural Signal Diagnostics Matrix
            </span>
          </h1>
          <p className="text-red-200/70 text-center max-w-2xl mx-auto font-light tracking-wider">
            Access advanced neural signal diagnostics and optimization protocols for seamless signal integration.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        {/* Neural Specifications */}
        <div className="mb-32">
          <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider mb-12">Neural Matrix Specifications</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {neuralSpecs.map((spec) => (
              <div
                key={spec.title}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative h-full bg-black border border-red-900/30 p-8">
                  <div className="text-red-500 mb-6">{spec.icon}</div>
                  <h3 className="text-xl font-mono font-bold text-red-500 mb-6">{spec.title}</h3>
                  <ul className="space-y-3">
                    {spec.specs.map((item, index) => (
                      <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                        <FaCircle className="w-2 h-2 text-red-500 flex-shrink-0" />
                        <span className="tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neural Anomalies */}
        <div className="space-y-32">
          {neuralAnomalies.map((category) => (
            <section key={category.category} className="relative">
              <div className="flex items-center gap-4 mb-12">
                <div className="text-red-500">{category.icon}</div>
                <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider">
                  {category.category} Matrix
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {category.problems.map((problem) => (
                  <div
                    key={problem.title}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                    <div className="relative h-full bg-black border border-red-900/30 p-8">
                      <h3 className="text-xl font-mono font-bold text-red-500 mb-8">{problem.title}</h3>
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-lg font-mono font-bold text-red-500 mb-4">Neural Symptoms:</h4>
                          <ul className="space-y-2">
                            {problem.symptoms.map((symptom, index) => (
                              <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                                <FaExclamationTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                                <span className="tracking-wide">{symptom}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-mono font-bold text-red-500 mb-4">Neural Solutions:</h4>
                          <ul className="space-y-2">
                            {problem.solutions.map((solution, index) => (
                              <li key={index} className="text-red-200/70 text-sm flex items-center gap-3">
                                <FaCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                                <span className="tracking-wide">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Support Matrix */}
        <div className="relative mt-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur"></div>
          <div className="relative bg-black border border-red-900/30 p-12 text-center">
            <h2 className="text-2xl font-mono font-bold text-red-500 tracking-wider mb-6">
              Neural Anomaly Detected?
            </h2>
            <p className="text-red-200/70 mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Our neural support matrix stands ready to assist with advanced diagnostics and anomaly resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/help/attribution"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <RiShieldKeyholeFill className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Attribution Matrix</span>
                </div>
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex"
              >
                <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-6 py-3 bg-black border border-red-500/30">
                  <RiSettings4Fill className="w-5 h-5 text-red-500" />
                  <span className="font-mono text-red-500">Neural Support</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
        </div>
      </div>
    </div>
  );
} 