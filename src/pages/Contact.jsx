import React from "react";

const Contact = () => {
  return (
    <div className="w-ful p-6 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-8">Contact</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="mb-8 space-y-4">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send
              </button>
            </form>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Contact Information
              </h3>
              <p>
                <strong>Address:</strong> Istanbul, Turkey
              </p>
              <p>
                <strong>Phone:</strong> +90 555 555 55 55
              </p>
              <p>
                <strong>Email:</strong> info@mesastore.com
              </p>
            </div>
          </div>
          {/* Map */}
          <div className="md:w-1/2 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <div className="w-full h-64 flex-1">
              <iframe
                title="Google Map Istanbul"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12034.858839999999!2d28.9783592!3d41.0082376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9c2c5e6b1b7%3A0x2e6b1b7b1b7b1b7b!2sİstanbul!5e0!3m2!1sen!2str!4v1680000000000!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
