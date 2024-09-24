import React from "react";
import { motion } from "framer-motion";
import { serviceCardProps } from "./type"; 
import { Link } from "react-router-dom";

const ServiceCard: React.FC<serviceCardProps> = ({
  id,
  imgSrc,
  title,
  description,
}) => {
  return (
    <Link to={`/services-list/${id}`} className="block">
    <motion.div
      className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group"
    >
      <div className="relative w-full h-64">
        {imgSrc ? (
          <img
            src={imgSrc}
            loading="lazy"
            alt={title || "Service Image"}
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-indigo-300 text-gray-800 px-4 py-2 rounded-full font-semibold">Learn More</span>
        </div>
      </div>
      <div className="p-5 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-green-900">
          {title || "Untitled Service"}
        </h2>
        <div className="flex items-center text-gray-600 group-hover:text-red-800 transition-colors duration-300">
          <span>Explore service</span>
          <svg
            className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  </Link>

  );
};

export default ServiceCard;