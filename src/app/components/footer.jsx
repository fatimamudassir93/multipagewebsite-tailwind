"use client"
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="bg-pink-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Shazz's Cakes. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 mr-4"><RiInstagramFill /></a>
            <a href="#" className="hover:text-gray-400"><FaFacebookSquare /></a>
            <a href="#" className="hover:text-gray-400"><FaWhatsappSquare /></a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  