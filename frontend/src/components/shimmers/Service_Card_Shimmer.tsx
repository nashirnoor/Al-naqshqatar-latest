import { motion } from "framer-motion";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ServiceShimmer = () =>{
    console.log('vjfdbvjh');
    
    
    return (
        <motion.div
        className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        variants={gridSquareVariants}
      >
        <div className="relative w-full h-48 bg-gray-300 animate-pulse"></div>
        <div className="p-3 bg-gray-200">
          <div className="bg-gray-300 animate-pulse"></div>
        </div>
       
      </motion.div>
);
}

export default ServiceShimmer;