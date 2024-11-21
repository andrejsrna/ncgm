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
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-4 text-left text-lg font-semibold text-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-header-${id}`}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`accordion-content-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 text-gray-300 ">
          {content}
        </div>
      </div>
    </div>
  );
}
export default AccordionItem;