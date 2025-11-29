'use client'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  interface Question {
    question: string;
    answer: string;
  }

  const faqQuestions: Question[] = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is an event where individuals come together to collaborate on software or hardware projects within a set time frame."
    },
    {
      question: "Is there a theme?",
      answer: "Yes, each hackathon may have a specific theme or focus area, such as healthcare, education, or sustainability."
    },
    {
      question: "How many people can be in a group?",
      answer: "Group sizes can vary, but typically teams consist of 2 to 5 members."
    }
  ];

  return (
    <div className="flex flex-col border border-white-500 p-4 rounded-lg">
      {faqQuestions.map((q, i) => (
        <div key={i}>
          <button
            className="flex justify-between items-center w-full font-bold border-t border-gray-500 p-4 m-2 text-left hover:bg-gray-800 transition-colors"
            onClick={() => {
              if (index === i) {
                setIsOpen(!isOpen);
              } else {
                setIndex(i);
                setIsOpen(true);
              }
            }}
          >
            <div>{q.question}</div>
            
            <div className="text-xl">
              {isOpen && index === i ? '-' : '+'}
            </div>
          </button>
          
          {isOpen && index === i && (
            <div className="p-4 m-2 mt-0">
              {q.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}