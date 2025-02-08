"use client";

export default function CopyButton({ template }: { template: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(template)}
      className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors text-sm"
    >
      Copy Template
    </button>
  );
} 