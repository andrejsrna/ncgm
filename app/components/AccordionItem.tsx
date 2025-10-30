import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

interface AccordionItemProps {
  id: number;
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick, id }) => {
  return (
    <div className="border-b border-border last:border-none">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-800 transition hover:text-primary focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-header-${id}`}
        type="button"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`}
        />
      </button>

      <div
        id={`accordion-content-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 text-sm text-slate-600">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
