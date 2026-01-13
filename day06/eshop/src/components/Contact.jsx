// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-12 px-4" id="contact">
      <div className="max-w-md mx-auto border rounded-lg shadow-lg p-8">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h2>

        <form className="flex flex-col space-y-4">
          
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea 
              rows="4"
              placeholder="Write your message here..." 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="button" 
            className="bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300"
            onClick={() => alert("Message Sent!")}
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;