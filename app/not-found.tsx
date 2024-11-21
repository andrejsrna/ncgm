// pages/404.tsx
import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
        Go Back Home
      </Link>
    </div>
  );
};

export default Custom404;
