// components/AccordionItem.jsx
'use client';

import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
    id: number;
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick, id }) => {
  return (
    <div className="relative group">
      {/* Glitch effect border */}
      <div className="absolute -inset-px bg-gradient-to-r from-red-800/50 via-red-600/50 to-red-800/50 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
      
      {/* Button */}
      <button
        onClick={onClick}
        className={`
          relative flex justify-between items-center w-full p-6 text-left 
          font-mono text-lg font-medium
          ${isOpen ? 'text-red-500' : 'text-gray-300'} 
          hover:text-red-400 transition-colors duration-300
          focus:outline-none focus-visible:ring focus-visible:ring-red-500/50
          border-b border-red-900/20
          bg-black/40 backdrop-blur-sm
        `}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-header-${id}`}
      >
        {/* Title with glitch effect */}
        <span className="relative">
          <span className="absolute -left-0.5 -top-0.5 text-red-600 opacity-0 group-hover:opacity-80 blur-[1px] transition-opacity duration-300">
            {title}
          </span>
          {title}
        </span>

        {/* Chevron icon with glow */}
        <ChevronDown
          className={`
            w-6 h-6 transition-all duration-300
            ${isOpen ? 'text-red-500 rotate-180' : 'text-red-800'}
            group-hover:text-red-500
            drop-shadow-[0_0_3px_rgba(239,68,68,0.5)]
          `}
        />
      </button>

      {/* Content panel */}
      <div
        id={`accordion-content-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        className={`
          relative overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          bg-gradient-to-b from-black via-black/95 to-black
        `}
      >
        {/* Content with side border glow */}
        <div className="relative p-6 text-gray-300">
          <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-red-800/0 via-red-600/50 to-red-800/0" />
          <div className="relative ml-4">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;