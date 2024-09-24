import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchSubservicelists } from '@/api/Route'; 
import { SubServicelistProps } from '@/api/type';


const Servicelist: React.FC = () => {
  const [subServices, setSubServices] = useState<SubServicelistProps[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchSubServices = async () => {
      try {
        const response = await fetchSubservicelists();
        if (Array.isArray(response)) {
          const filteredSubServices = response.filter(
            (subService) => subService.service_category === parseInt(id as string)
          );
          setSubServices(filteredSubServices);
        }
      } catch (err) {
        console.error("Error occurred during API call:", err);
      }
    };
    fetchSubServices();
  }, [id]);

  return (
    <div className="container mx-auto bg-white my-16">
{subServices.slice(0, 1).map((subService) => (
  <h1 className="text-5xl font-bold mb-10 text-center text-gray-800">
    {subService.service_category_title}
  </h1>
))}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {subServices.map((subService) => (
    <Link 
      key={subService.id} 
      to={`/services-detail/${subService.id}`}
      state={{ title: subService.title, description: subService.description, image: subService.image }}
      className="group relative w-90 h-80 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative w-full h-full">
        {subService.image && (
          <img 
            src={subService.image} 
            alt={subService.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 transform transition-all duration-300 group-hover:translate-y-[-85%]">
        <h2 className="text-2xl font-bold mb-2 text-white">{subService.title}</h2>
        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          Click to explore more
        </p>
      </div>
      <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </Link>
  ))}
</div>

  </div>
  );
};

export default Servicelist;