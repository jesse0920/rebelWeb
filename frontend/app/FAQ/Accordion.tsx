import { useState } from 'react';
import styles from './faq.module.css';

interface Question {
  question: string;
  answer: string;
}

interface AccordionArgs {
  items: Question[];
}

export default function Accordion({ items }: AccordionArgs) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close it if it's already open
    } else {
      setOpenIndex(index); // Otherwise, open the clicked one
    }
  };

  return (
    <div className="w-full max-w-2xl border border-[var(--primary)]/50 rounded-xl overflow-hidden">
      
      <div className="text-4xl text-center text-[var(--primary)] border-[var(--primary)]/25 font-bold py-6 border-b">
        Frequently Asked Questions
      </div>

      {items.map((q, i) => (
        <div key={i} className="border-b border-[var(--primary)]/25">
          
          <button
            onClick={() => handleToggle(i)}
            className="flex items-center w-full text-left hover:bg-[var(--primary)]/10 p-4"
          >
            <div className="flex-1 font-bold text-[var(--primary)]">
              {q.question}
            </div>

            <div className="w-4 h-4">
              {openIndex === i ? (
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} viewBox="0 0 512 512"><path d="M112 328l144-144 144 144"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} viewBox="0 0 512 512"><path d="M112 184l144 144 144-144"/></svg>
              )}
            </div>
          </button>

          {openIndex === i && (
            <p className="p-4 pt-0">
              {q.answer}
            </p>
          )}

        </div>
      ))}
    </div>
  );
}