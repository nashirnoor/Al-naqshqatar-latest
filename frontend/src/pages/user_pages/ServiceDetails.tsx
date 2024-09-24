import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

interface LocationState {
  title: string;
  description: string;
  image: string;
}

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { title, description, image } = location.state as LocationState;

  return (
    <div className="container mx-auto py-12 my-20 px-4 bg-white">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          {image && (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
            />
          )}
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">{title}</h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">{description}</p>
          {/* <p className="text-sm text-gray-500">Service ID: {id}</p> */}
        </div>
      </div>
    </div>

  );
};

export default ServiceDetails;