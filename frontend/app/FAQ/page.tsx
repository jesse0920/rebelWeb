'use client'
import styles from './faq.module.css'
import { useState } from 'react'
import Accordion from './Accordion';



interface Question {
  question: string;
  answer: string;
}

// TODO:
// - Simplify the logic of the toggle function make it adaptable/easily changeable
// - Fill out the faq.module.css to deal with more custom stuff related to my page
// - Reduce the logic in the page mostly simple tailwind and html

// DONE:
// - Move the accordion logic/structure into a separate component

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
  },
  {
    question: "Who can join?",
    answer: "Any UNLV and CSN student enrolled during the spring semester can attend. All majors are welcome."
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center w-full bg-[#111435] p-4 pt-24">
      <Accordion items={faqQuestions} allowMultiple={true} />
    </div>
  );
}