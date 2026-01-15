// src/components/Contact.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // Replace 'YOUR_FORM_ID' with the ID you got from Step 1
  const [state, handleSubmit] = useForm("mlggekbqooo");

  // 1. Success Message: What happens after they submit
  if (state.succeeded) {
      return (
        <div className="bg-white py-12 px-4">
            <div className="max-w-md mx-auto border rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4">Thanks for joining!</h2>
                <p className="text-gray-600">We received your message and will get back to you shortly.</p>
            </div>
        </div>
      );
  }

  return (
    <div className="bg-white py-12 px-4" id="contact">
      <div className="max-w-md mx-auto border rounded-lg shadow-lg p-8">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h2>

        {/* 2. Bind the handleSubmit to the form */}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input 
              id="name"
              type="text" 
              name="name" // IMPORTANT: Formspree needs this name attribute
              placeholder="Your Name" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input 
              id="email"
              type="email" 
              name="email" // IMPORTANT: Formspree needs this to reply to users
              placeholder="your@email.com" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea 
              id="message"
              name="message" // IMPORTANT: Needs name attribute
              rows="4"
              placeholder="Write your message here..." 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" // Changed from 'button' to 'submit'
            disabled={state.submitting} // Disable button while sending
            className="bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;



// // src/components/Contact.jsx
// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="bg-white py-12 px-4" id="contact">
//       <div className="max-w-md mx-auto border rounded-lg shadow-lg p-8">
        
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           Contact Us
//         </h2>

//         <form className="flex flex-col space-y-4">
          
//           {/* Name Input */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Name</label>
//             <input 
//               type="text" 
//               placeholder="Your Name" 
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           {/* Email Input */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Email</label>
//             <input 
//               type="email" 
//               placeholder="your@email.com" 
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           {/* Message Input */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Message</label>
//             <textarea 
//               rows="4"
//               placeholder="Write your message here..." 
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button 
//             type="button" 
//             className="bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300"
//             onClick={() => alert("Message Sent!")}
//           >
//             Submit
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;