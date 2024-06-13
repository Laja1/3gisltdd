"use client";

import { useState } from "react";

const accordionData = [
  {
    title: "Clarify",
    content:
      "An essential part of the process, this is where we learn about your company, how you work, and your short and long-term goals whilst making ourselves aware of all factors that can affect your business needs. We work closely with you to agree business objectives and how these will be met. We'll also define the project scope, the budget and how the success of the project will be measured. We'll be your business consultants.",
  },
  {
    title: "Specify",
    content:
      "Having agreed to your business objectives, the next stage involves establishing exactly what your solution will be and we build this into a detailed specification, encompassing the target audiences, functionality, technical deliverables and creative design. We would expect to discuss and refine it until a solution is arrived at that suits your requirements.",
  },
  {
    title: "Design and Build",
    content:
      "Working from the specification, we design and build the solution, developing the brand, and functionality of your project. Quality Assurance will be evaluated on the work done, and this will allow users and client to view the progress throughout the stage of the design. When you are satisfied with the design of the basic structure we can move onto the next stage.",
  },
  {
    title: "Implement",
    content:
      "We now build the final product, marrying all the parts into one complete solution. If required, we can integrate the solution into your own in-house systems ready for the launch. The project deliverables are all thoroughly tested and quality assured again before the launch and you'll receive any training required managing and maintaining it.",
  },
  {
    title: "Enhance",
    content:
      "Absolutely. We understand the importance of seamless integration. Our SaaS solution is designed to work harmoniously with a variety of popular tools and platforms, ensuring a smooth workflow and reducing any disruptions to your current processes.",
  },
];

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b rounded-md border-gray-200 bg-gray-100 last:border-b-0">
    <button
      className="w-full flex justify-between items-center py-4 px-6 text-left text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none transition-colors duration-200"
      onClick={onClick}
    >
      <span className="text-sm">{title}</span>
      <svg
        className={`w-6 h-6 transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    {isOpen && (
      <div className="px-6 py-4 text-gray-700 text-sm leading-loose open-sans bg-gray-50 transition-opacity duration-200">
        {content}
      </div>
    )}
  </div>
);

const Methodology = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Methodology</h2>
        <p className="text-lg text-gray-600 mt-2">
          Our comprehensive approach to delivering the best solutions for your business.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Methodology;
