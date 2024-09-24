
// const About = () => {
//   return (
//     <div className="px-6 md:px-10 py-16 bg-gray-100">
//       {/* Introduction Section */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
//           Swimming Pools
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
//           We started as a small interior design firm in downtown Michigan, aiming to help home buyers make do with the new space that they had acquired. It soon became obvious that it would make sense to help our clients see beyond the walls and floor plans and be there with them from the get-go. Currently, we offer house realtor, interior design, and architecture services in order to help our customers find their forever homes as seamlessly and painlessly as possible.
//         </p>
//       </div>
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import React,{useEffect} from "react";
import { useRef,useState } from "react";
import Certificates from "./Certificates";
import newAbiutimage from '../../assets/aboutimage.jpg';
import construction from '../../assets/construction.jpg';
import landscapt from "../../assets/ladscapeimage.jpg";
import axios from "axios";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




//       {/* Business Partners Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
//         <div className="flex flex-col justify-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             International Business Partners
//           </h2>
//           <p className="text-lg text-gray-700">
//             We are a group of three companies working together to provide international business solutions. With our expertise and global network, we help businesses connect and thrive in the global market.
//           </p>
//         </div>
//         <div className="flex items-center justify-center">
//           <img
//             src="https://images.unsplash.com/photo-1532547616536-557a0d4d29ad?auto=format&fit=crop&w=1224&h=544"
//             alt="Business Partners"
//             className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
//           />
//         </div>
//       </div>

//       {/* Partners List Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-2">Summerwind</h3>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-2">Astral Spain</h3>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-2">Swis Spain</h3>
//         </div>
//       </div>

//       {/* Mission and Vision Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
//         <div className="flex flex-col">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
//           <p className="text-lg text-gray-700">
//             We're on a mission to change the way the housing market works. Rather than offering one service or another, we want to combine as many and make our clients' lives easy and carefree. Our goal is to match our clients with the perfect properties that fit their tastes, needs, and budgets.
//           </p>
//         </div>
//         <div className="flex flex-col">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
//           <p className="text-lg text-gray-700">
//             We want to live in a world where people can buy homes that match their needs rather than having to find a compromise and settle on the second-best option. That's why we take a lot of time and care in getting to know our clients from the moment they reach out to us and ask for our help.
//           </p>
//         </div>
//       </div>

//       {/* Team Image Section */}
//       <div className="mb-16">
//         <img
//           src="https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?auto=format&fit=crop&w=1224&h=544"
//           alt="Team"
//           className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
//         />
//       </div>

//       {/* Team Section */}
//       <div className="text-center mb-16">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
//         <p className="text-lg text-gray-700 mx-auto max-w-3xl">
//           Our strength lies in our individuality. Set up by Esther Bryce, the team strives to bring in the best talent in various fields, from architecture to interior design and sales.
//         </p>
//       </div>

//       {/* Team Members Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">A. Kumar</h3>
//           <p className="text-lg text-gray-600">Founder</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Lianne Wilson</h3>
//           <p className="text-lg text-gray-600">Broker</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Jaden Smith</h3>
//           <p className="text-lg text-gray-600">Architect</p>
//         </div>
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">Jessica Kim</h3>
//           <p className="text-lg text-gray-600">Photographer</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


interface AboutImage {
  id: number;
  image: string;
}

interface AboutSectionData {
  id: number;
  description: string;
}

const AboutSection = () => {
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [aboutData, setAboutData] = useState(null);
  const [aboutDataImage, setAboutDataImage] = useState([]);


  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const multiplier = 20;
    setRotateY((x / rect.width - 0.5) * multiplier);
    setRotateX((y / rect.height - 0.5) * -multiplier);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get<AboutSectionData[]>('http://127.0.0.1:8000/api/about/');
        setAboutData(response.data[0]);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  useEffect(() => {
    const fetchAboutDataImage = async () => {
      try {
        const response = await axios.get<AboutImage[]>('http://127.0.0.1:8000/api/about-image/');
        setAboutDataImage(response.data);
      } catch (error) {
        console.error('Error fetching about images:', error);
      }
    };

    fetchAboutDataImage();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-20">
    <div className="container mx-auto px-4">
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-20">
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: -90 }}
          animate={isInView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: -90 }}
          transition={{ duration: 1.9 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide leading-tight mb-6 mr-5">
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-600 to-purple-500 lg:inline ">
              <FlipLink href="">About us</FlipLink>
            </span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mr-3">
              {aboutData?.description || "Loading description..."}
            </p>
        </motion.div>
  
        <motion.div
          className="md:w-1/2 perspective-1000"
          initial={{ opacity: 0, x: 300 }}
          animate={isInView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, x: 300 }}
            animate={isInView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateX: 0.5, rotateY: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
            <Slider {...sliderSettings}>
                  {aboutDataImage.map((img) => (
                    <div key={img.id}>
                      <img
                        className="w-full h-80 object-cover"
                        src={img.image} 
                        alt={`About section image ${img.id}`}
                      />
                    </div>
                  ))}
                </Slider>
            </div>
          </motion.div>
        </motion.div>
      </div>
  
      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div 
          className="bg-white rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
            Our Mission
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-green-500"></div>
          </h2>
          <p className="text-lg text-gray-700">
            We're on a mission to change the way the housing market works. Rather than offering one service or another, we want to combine as many and make our clients' lives easy and carefree. Our goal is to match our clients with the perfect properties that fit their tastes, needs, and budgets.
          </p>
        </motion.div>
        <motion.div 
          className="bg-white rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
            Our Vision
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-purple-500"></div>
          </h2>
          <p className="text-lg text-gray-700">
            We want to live in a world where people can buy homes that match their needs rather than having to find a compromise and settle on the second-best option. That's why we take a lot of time and care in getting to know our clients from the moment they reach out to us and ask for our help.
          </p>
        </motion.div>
      </div>
      <div className="mt-20">
        <Certificates />
      </div>
    </div>
  </div>
  );
};

export default AboutSection;



const DURATION = 0.25
const STAGGER = 0.025
const FlipLink = ({ children, href }: {
  children: string;
  href: string
}) => {
  return (
    <motion.a 
      href={href}
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap
        text-4xl uppercase sm:text-5xl md:text-6xl lg:text-7xl
        bg-gradient-to-r from-gray-400 to-gray-300 px-4 py-2 rounded-md"
      style={{
        lineHeight: 1,
      }}
    >
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-green-500 to-yellow-500">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%"
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          )
        })}
      </div>
      <div className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-green-500 to-yellow-500">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%"
                },
                hovered: {
                  y: 0
                }
              }}
              transition={{
                delay: 0.2 * i
              }}
              className="inline-block"
              key={i}>
              {l}
            </motion.span>
          )
        })}
      </div>
    </motion.a>
  )
}
