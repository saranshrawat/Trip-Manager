import React, { useState } from "react";
import { faqData } from "../data/data";

function Accordion() {
  const [show, setShow] = useState([]);

  const accordionHandler = (id) => {
    setShow((prev) =>
         //filter out the id of the clicked item if already present remove it otherwise add it
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id] );       

  };

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-4">
      {faqData.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
        >
          <button
            onClick={() => accordionHandler(item.id)}
            className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-gray-800">{item.question}</span>
            <span className="text-gray-500">
              {show.includes(item.id) ? "−" : "+"}
            </span>
          </button>

           {/* if show contains the item.id render the answer it */}
          {show.includes(item.id) && (
            <div className="px-4 py-3 bg-white text-gray-600 animate-fadeIn">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;