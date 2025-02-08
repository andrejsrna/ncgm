'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';

const BlockRendererClient = ({ content }: { content: BlocksContent }) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
        ),
        heading: ({ children, level }) => {
          const classes = {
            1: "text-3xl font-bold text-white mb-6 mt-8",
            2: "text-2xl font-bold text-white mb-4 mt-6",
            3: "text-xl font-bold text-white mb-3 mt-5",
            4: "text-lg font-bold text-white mb-2 mt-4",
            5: "text-base font-bold text-white mb-2 mt-3",
            6: "text-sm font-bold text-white mb-2 mt-2"
          }[level] || "text-2xl font-bold text-white mb-4";

          return <div className={classes}>{children}</div>;
        },
        list: ({ children, format }) => {
          const classes = format === 'ordered' 
            ? "list-decimal pl-6 mb-4 text-gray-300 space-y-2"
            : "list-disc pl-6 mb-4 text-gray-300 space-y-2";
          
          return <ul className={classes}>{children}</ul>;
        },
        'list-item': ({ children }) => (
          <li className="leading-relaxed">{children}</li>
        ),
        link: ({ children, url }) => (
          <a 
            href={url} 
            className="text-blue-400 hover:text-blue-300 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        code: ({ children }) => (
          <code className="bg-gray-800 px-2 py-1 rounded text-sm">{children}</code>
        ),
        quote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4">
            {children}
          </blockquote>
        ),
      }}
      modifiers={{
        bold: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
        italic: ({ children }) => <em className="italic text-gray-300">{children}</em>,
        code: ({ children }) => <code className="bg-gray-800 px-1 rounded text-sm">{children}</code>,
      }}
    />
  );
};

export default BlockRendererClient;