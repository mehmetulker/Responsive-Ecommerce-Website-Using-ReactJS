import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className=" w-full p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">React E-Commerce Application</h1>
      <p className="mb-4 max-w-2xl text-center">
        This project is a modern e-commerce application built using up-to-date
        web development technologies. Users can browse products, add them to the
        cart, and place orders. Products can be filtered by category, type, and
        price, and there is a search feature to find products by name.
        Currently, there is no dedicated component for user registration and
        login/logout operations. The application adopts a responsive design
        approach to ensure a smooth experience on all devices.
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
        <ul className="list-disc list-inside text-left">
          <li>
            <span className="font-medium">React:</span> For building the user
            interface
          </li>
          <li>
            <span className="font-medium">Context API:</span> For state
            management
          </li>
          <li>
            <span className="font-medium">React Router:</span> For page
            navigation
          </li>
          <li>
            <span className="font-medium">Tailwind CSS:</span> For fast and
            modern styling
          </li>
          <li>
            <span className="font-medium">React Toastify:</span> For
            notifications
          </li>
        </ul>
      </div>
      <p className="text-gray-600 max-w-2xl text-center">
        The project aims to provide a seamless and user-friendly shopping
        experience for customers.
      </p>
    </div>
  );
};

export default About;
