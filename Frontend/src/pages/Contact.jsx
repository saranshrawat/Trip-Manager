import React from 'react';
import Heading from '../components/Heading';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import { ContactPageData } from '../data/data';

function Contact() {
  const { title, title_span, subtitle, description, varient } = ContactPageData;

  return (
    <div className="flex flex-col items-center px-4 py-10">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section: Heading */}
        <div className="flex-1">
          <Heading
            title={title}
            title_span={title_span}
            subtitle={subtitle}
            description={description}
            varient={varient}
          />

           <div className="mt-12 w-full max-w-4xl">
        <ContactDetails />
      </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="flex-1  rounded-lg p-6">
          <ContactForm />
        </div>
      </div>

      {/* Bottom Section: Contact Details */}
     
    </div>
  );
}

export default Contact;