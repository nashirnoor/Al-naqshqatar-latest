import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ServiceCard from '../../components/user_components/common/service_card/ServiceCard';
import { fetchServiceCategories } from '@/api/Route'; 
import { ServiceCategoryProps } from '@/api/type';


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const Services = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isInView1 = useInView(ref1, { once: true });
  const [servicesData, setServicesData] = useState<ServiceCategoryProps[]>([]);
  
  const fetchServices = async () => {
    try {
      const response = await fetchServiceCategories();
      if (Array.isArray(response)) { 
        setServicesData(response);
      }
    } catch (err) {
      console.error("Error occurred during API call:", err);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="moving-background"></div>
      </div> 
      <div className="py-12 relative">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-semibold text-black">Our Services</h1>
            <p className="mt-4 text-xl text-center text-black">
              From consulting and strategy development to implementation and support, <br /> our comprehensive services can help your business thrive.
            </p>
          </div>
        </div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView1 ? 'show' : 'hidden'}
        className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
        ref={ref1}
      >
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            imgSrc={service.image} 
            title={service.title}
            description={service.description}
          />
        ))}
      </motion.div>
    </div>
  );
};


export default Services;
