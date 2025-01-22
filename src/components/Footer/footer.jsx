import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto bg-black text-gray-400 pt-16 grid grid-cols-4 gap-8 text-left text-sm max-w-6xl items-center">
      <ul className="list-none space-y-2 ">
        <div className="flex space-x-4 mb-4">
          <i className="fab fa-facebook "></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <li className="hover:underline cursor-pointer">Audio Description</li>
        <li className="hover:underline cursor-pointer">Investor Relations</li>
        <li className="hover:underline cursor-pointer">Legal Notices</li>
        <li className="hover:underline cursor-pointer">Ad Choices</li>
        <button className="border border-gray-400 px-2 py-1 text-sm rounded-md  hover:bg-red-700 hover:text-white hover:border-red-700">
          Service Code
        </button>
      </ul>
      <ul className="list-none space-y-2">
        <li className="hover:underline cursor-pointer">Help Center</li>
        <li className="hover:underline cursor-pointer">Jobs</li>
        <li className="hover:underline cursor-pointer">Cookie Preferences</li>
      </ul>
      <ul className="list-none space-y-2">
        <li className="hover:underline cursor-pointer">Gift Cards</li>
        <li className="hover:underline cursor-pointer">Terms of Use</li>
        <li className="hover:underline cursor-pointer">Corporate Information</li>
      </ul>
      <ul className="list-none space-y-2">
        <li className="hover:underline cursor-pointer">Media Center</li>
        <li className="hover:underline cursor-pointer">Privacy</li>
        <li className="hover:underline cursor-pointer">Contact Us</li>
      </ul>
      <p className="col-span-4 text-center text-sm mt-8">
        © 1997-2025 Netflix, Inc.
      </p>
    </footer>
  );
}

export default Footer;
