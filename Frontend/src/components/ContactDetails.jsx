import React from 'react';

function ContactDetails() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h4 className="text-lg font-semibold text-gray-700 mb-8 text-center">
        Give us a call or fill out our contact form and our Trip manager members will be in touch soon.
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Working Hours */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {/* Clock Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" height="24" width="24">
              <path d="M2.875 11.5a8.625 8.625 0 0 0 8.625 8.625m8.625 -8.625a8.625 8.625 0 1 0 -17.25 0" strokeWidth="1"></path>
              <path d="M11.5 6.7v4.8l0.48 0.48" strokeWidth="1"></path>
              <path d="M17.25 14.375h1.916..." strokeWidth="1"></path>
              <path d="M14.375 20.125v-5.75" strokeWidth="1"></path>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Mon-Fri</h2>
            <p className="text-gray-600">9:00 AM - 6:00 PM EST</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {/* Email Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
              {/* untouched paths */}
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Email</h2>
            <p className="text-gray-600">Saranshrawat166@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {/* Phone Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
              {/* untouched paths */}
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Phone</h2>
            <p className="text-gray-600">+91-7060036898</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {/* Address Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
              {/* untouched paths */}
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Address</h2>
            <p className="text-gray-600">123 Main Street, Anytown, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;