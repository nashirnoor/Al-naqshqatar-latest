import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { bannerProps } from "@/components/user_components/common/service_card/type";
import { fetchBanner } from "@/api/Route";
import newAbiutimage from '../../assets/aboutimage.jpg'
import poolImage from '../../assets/poolimage.jpg'
import landscapImage from '../../assets/ladscapeimage.jpg'
import poolimage2 from '../../assets/IMG-20230316-WA0003(1).jpg'
import homebgvideo from '../../assets/output.mp4'
import OurPartner from "./OurPartners";
import OurClients from "./OurClients";
import Certificates from "./Certificates";
import { Link } from "react-router-dom";



const BackupHome = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const ref5 = React.useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const [banners, setBanners] = useState<bannerProps[] | []>();

  const [slideIndex, setSlideIndex] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  // function handleMouse(event) {
  //   const rect = event.currentTarget.getBoundingClientRect();
  //   x.set(event.clientX - rect.left - rect.width / 2);
  //   y.set(event.clientY - rect.top - rect.height / 2);
  // }
  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }


  const fetchData = async () => {
    const response: bannerProps[] = await fetchBanner() as bannerProps[];
    console.log(response, "Fetched projects:");
    setBanners(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const gridSqureVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const servicesData = [

    {
      imgSrc:
        "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=503&h=264",
      title: "Swimming Pool and Wellness Solutions",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=400&h=400",
      title: "Infrastructure Piping Excellence",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1609941699682-8188acb757df?auto=format&fit=crop&w=400&h=400",
      title: "Sports Flooring Mastery",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/multipurpose-synthetic-grass-2-mnlnR3DD9ntNaxz9.jpg",
      title: "Multipurpose Sports Court",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1578966663421-00f3bfebfa89?auto=format&fit=crop&w=861&h=861",
      title: "Tennis Court",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/synthetic-acrylic-basketball-court-YNqO0Jjwj2IwPber.jpeg",
      title: "Basket Ball Court",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/how-to-reinforce-a-gym-floor-12-AVL3RxDpezIqPMKq.jpg",
      title: "Gym Flooring",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/94008154-YD08W4O5G1fvOpqM.webp",
      title: "Cycle Track",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/polycomp-jogging-track-web-YX41Rb0KXVuyO6DW.jpg",
      title: "jogging Track",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V8PnDoX2ur9GvK/f3295b_09b999959568416196b005132b0c3c3c~mv2-AR02r12KNWtEb218.webp",
      title: "Horse Flooring ",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V8PnDoX2ur9GvK/outdoor-space-sand-horse-race-track-with-horseman-leading-horse-walk-many-footprint-sand-round-shape-horse-track-with-white-fence_36367-7538-dJoe9PJO3ZH6jz76.jpg",
      title: "Horse Sand Track ",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/cover-photo-playsafe-playground-m2WBZQ6KyvIGxrQA.jpg",
      title: "Kids Play Equipment's",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/sportsfitness-mediastandard-1_3b4b406c8cd22bcff0889949020ba739-AzGjlMeJEWtWn9pB.jpg",
      title: "Outdoor Fitness Equipment's ",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/1659704785032-AwvjR84xbnCq5Nxo.jpeg",
      title: "Odor Control Equipment's ",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/water-filtering-system-YX41RjjOJQSkgjea.png",
      title: "Water Filtration System",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=861&h=861",
      title: "Civil Work",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V8PnDoX2ur9GvK/ready-mix-concrete-placement-tips-Yan6R0EoOphKgGR5.webp",
      title: "Concrete Works",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V8PnDoX2ur9GvK/whatsapp-image-2023-10-13-at-09.34.11-A1a1Mjx1rJFVG42v.jpeg",
      title: "Plastering Works",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/building-painting-YKb1y8g4v0hpW6KG.jpg",
      title: "Building Painting Work",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/eg-rear-done-1024x576-mv05RPnnrOFklKkZ.jpg",
      title: "Water Fountain",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=861,fit=crop/m7V8PnDoX2ur9GvK/vinyl-flooring-installation-singapore-AMqaKD0B5DS3N31L.webp",
      title: "Vinyl Flooring",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V8PnDoX2ur9GvK/uw-river-falls_fieldhouse_2020-YKb1y85EnpSg76Pg.webp",
      title: "Indoor Sport Flooring ",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V8PnDoX2ur9GvK/firca-ile-zemin-izolasyon-yapan-adam-mjEPn4R0n1Sl5J0O.jpg",
      title: "Water Proofing ",
    },
    {
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V8PnDoX2ur9GvK/shotcrete-d95DkzW2RBUZa6W5.jpg",
      title: "Shotcrete Works",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <section className="relative h-screen">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-full"
            onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          >
            {banners && banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative pt-24 bg-cover bg-center bg-no-repeat h-screen"
                // style={{ backgroundImage: `url(${homebgvideo})` }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                  >
                    <source src={homebgvideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="relative flex items-center justify-center h-full px-12 mx-auto max-w-7xl">
                    <div className="text-center">
                      <motion.div
                        key={`title-${slideIndex}`}
                        initial={{ opacity: 0, y: -400 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-black md:text-6xl md:tracking-tight"
                      >
                        <span className="block w-full py-2 text-transparent  text-7xl bg-clip-text leading-12 bg-white lg:inline">
                          {banner.title}
                        </span>
                      </motion.div>
                      <motion.div
                        key={`description-${slideIndex}`}
                        initial={{ opacity: 0, y: 400 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        className="px-0 mb-8 text-lg text-gray-100 md:text-xl lg:px-24"
                      >
                        {banner.description}
                      </motion.div>
                      <motion.div
                        key={`button-${slideIndex}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-4 space-x-0 md:space-x-2 md:mb-8"
                      >

                        <a
                          href="/contact"
                          className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-black rounded-2xl sm:w-auto sm:mb-0 transition-transform duration-300 ease-in-out transform hover:bg-white hover:text-black hover:-translate-y-1"
                        >
                          Get Started
                          <svg
                            className="w-4 h-4 ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>

                      </motion.div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <div className="container mx-auto mt-16 text-black">
          <div
            ref={ref4}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -90 }}
              animate={isInView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: -90 }}
              transition={{ duration: 1.9 }}
            >
              <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
                <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-600 to-purple-500 lg:inline">
                  <FlipLink href="">About us</FlipLink>
                </span>
              </h1>
              <p className="mt-6 text-lg text-black leading-relaxed">
                We create exceptional experiences through innovative solutions for
                swimming pools, infrastructure piping, sports flooring,
                landscaping, civil fit-out, and car park enhancements. Enjoy our
                sauna, steam room, jacuzzi, plunge pool, ice bath, and ice
                fountain.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center perspective-1000"
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
                className="flex justify-center"
                initial={{ opacity: 0, x: 300 }}
                animate={isInView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotateX: 0.5, rotateY: 0.5 }}
                whileTap={{ scale: 0.50 }}
              >
                <img
                  className="rounded-lg shadow-md"
                  // src="https://img.freepik.com/free-photo/stair-pool_74190-1500.jpg?t=st=1726333263~exp=1726336863~hmac=825b76a6a886c69c4287866ef43c1636b8aa9cafb6feae405d7e26eaccf4f89b&w=740"
                  src={newAbiutimage}
                  alt="About Us"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div>
          <OurPartner />
        </div>
        <div className="container mx-auto my-32">
          <motion.div
            ref={ref1}
            variants={container}
            initial="hidden"
            animate={isInView1 ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {servicesData.map((items, index) => (
              <motion.div
                variants={gridSqureVariants}
                key={index}
                className="relative bg-green-400 shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-300 ease-in-out group hover:scale-105"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out group-hover:opacity-0"
                    src={items.imgSrc}
                    alt={items.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70 group-hover:opacity-0 transition-opacity duration-1000 ease-in-out"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h1 className="text-3xl font-semibold bg-transparent leading-10 group-hover:text-black text-black transition-colors duration-1000">
                      {items.title}
                    </h1>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer">
                    <Link to={'/services'}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="container mx-auto mt-16 text-black">
          <div
            ref={ref2}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
          >
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}

            >
              <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
                <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                  <FlipLink href="#">Swimming Pools</FlipLink>
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-black">
                Explore our portfolio of stunning swimming pool projects,
                showcasing our expertise in creating luxurious and functional
                aquatic spaces.
              </p>
            </motion.div>
            <motion.div
              className="w-full relative mx-auto h-auto overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 90 }} // Start from the right
              animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 90 }} // Move to its position
              transition={{ duration: 1.2, type: "spring", stiffness: 100 }} // Adjust duration and spring stiffness for the effect
            >
              <motion.img
                className="w-full h-auto rounded-lg scale-110 transition-transform duration-300 ease-in-out hover:scale-100"
                // src="https://images.unsplash.com/photo-1574744918163-6cef6f4a31b0?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxzd2ltbWluZ3xlbnwwfHx8fDE2OTY3NjA1MzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=703&h=495"
                src={poolImage}
                alt="About Us"
              />
            </motion.div>
          </div>
        </div>


        <div className="container mx-auto mt-16 text-black">
          <div
            ref={ref3}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
          >
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            >
              <img
                className="w-full h-auto rounded-lg transition-all duration-300 hover:scale-110"
                // src="https://images.unsplash.com/photo-1622015663319-e97e697503ee?auto=format&fit=crop&w=709&h=435"
                src={landscapImage}
                alt="About Us"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 90 }}
              animate={isInView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 90 }}
              transition={{ duration: 1.9, delay: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
                <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                  <StyledFlipLink href="#"> Transforming Outdoor</StyledFlipLink>
                  <StyledFlipLink href="#"> Spaces Through</StyledFlipLink>
                  <StyledFlipLink href="#">Exceptional Landscaping</StyledFlipLink>


                </span>
              </h1>
              <p className="mt-6 text-lg text-black leading-relaxed">
                Welcome to our world of landscaping, where we merge the beauty of
                nature with innovative design to craft outdoor spaces that are as
                stunning as they are functional. At AlNaqsh, we're passionate
                about bringing your outdoor vision to life. Discover our
                exceptional landscaping projects and let us show you the artistry
                and craftsmanship that can transform your outdoor environment.
              </p>
            </motion.div>
          </div>
        </div>

        <div>
          <OurClients />
        </div>
        <div
          ref={ref5}
          className="container  my-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            animate={isInView5 ? { opacity: 1, x: 0 } : { opacity: 0, x: -90 }}
            transition={{ duration: 1.9 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900">
              {" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                <StyledFlipLink href="">Contact Us</StyledFlipLink>
              </span>{" "}
            </h1>
            <form className="py-10" action="">
              <div className="flex flex-col py-4">
                <label
                  className="text-sm font-semibold text-black"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="border border-gray-300 px-4 py-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#000]"
                  type="text"
                  placeholder="Your Name"
                  id="name"
                />
              </div>
              <div className="flex flex-col py-4">
                <label
                  className="text-sm font-semibold text-black"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="border border-gray-300 px-4 py-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#000]"
                  type="email"
                  placeholder="Your email address"
                  id="email"
                />
              </div>
              <div className="flex flex-col py-4">
                <label
                  className="text-sm font-semibold text-black"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="border border-gray-300 px-4 py-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#000] resize-none h-32"
                  placeholder="Enter your message"
                  id="message"
                ></textarea>
              </div>
              <button className="px-6 py-3 bg-[#26853e] text-white font-semibold rounded-lg hover:bg-[#26853e] transition-colors duration-200 ease-in-out">
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className="flex justify-center"
            style={{ height: '650px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            {/* <img
              className="w-5/6 h-5/6 scale-110 transition-all duration-300 rounded-lg shadow-lg hover:scale-100"
              src={poolimage2}
              // src="https://images.unsplash.com/photo-1593055497705-59a84c5928b2?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw3fHxzd2ltbWluZ3xlbnwwfHx8fDE2OTY3NjA1MzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=606&h=584"
              alt="Contact Us Image"
            /> */}
            <img
              className="w-5/6 h-5/6 scale-110 transition-all duration-300 rounded-lg shadow-lg hover:scale-100"
              src={poolimage2}
              alt="Contact Us Image"
            />

          </motion.div>
        </div>
        <div>
          <Certificates />
        </div>
      </div>
    </>
  );
};
export default BackupHome;

const DURATION = 0.25
const STAGGER = 0.025
const FlipLink = ({ children, href }: {
  children: string;
  href: string
}) => {
  return (<motion.a href={href}
    initial="initial"
    whileHover="hovered"
    className="relative block overflow-hidden whitespace-nowrap
  text-4xl text-white bg-gray-600 uppercase sm:text-5xl md:text-6xl lg:text-7xl"
    style={{
      lineHeight: 1,
    }}
  >
    <div>
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
    <div className="absolute inset-0">
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


// Create a new component with the same styling as the <h1> tag
const StyledFlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap leading-12
  text-4xl text-white bg-gray-600 uppercase sm:text-3xl md:text-4xl lg:text-5xl"
      style={{
        lineHeight: '3rem', // Adjust to match the 'leading-tight' line height
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              delay: 0.2 * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

