// components/Support.tsx
'use client';

import React from 'react';

const Support: React.FC = () => {
  return (
    <section id="support" className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Informational Content */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Assistance?</h2>
          <p className="text-lg text-gray-600">
            We are here to help! Please fill out the form below, and our support team will get back to you as soon as possible.
          </p>
        </div>

        {/* Embedded Google Form */}
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScN1ecEiA7o5A0U8kUSeczq5A0Ymwbj5N2InCcT4-BMlyeCCQ/viewform?embedded=true" // Replace with your actual Google Form embed URL
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg shadow-lg"
              title="Support Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
