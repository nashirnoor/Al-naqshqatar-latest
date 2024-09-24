import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { bannerProps } from "@/components/user_components/common/service_card/type";
import { fetchBanner } from "@/api/Route";
import homebgvideo from '../../assets/output.mp4'
import { TypeAnimation } from 'react-type-animation';



const Home = () => {
  const [banners, setBanners] = useState<bannerProps[] | []>();
  const [slideIndex, setSlideIndex] = useState(0);
  const fetchData = async () => {
    const response: bannerProps[] = await fetchBanner() as bannerProps[];
    console.log(response, "Fetched projects:");
    setBanners(response);
  };

  useEffect(() => {
    fetchData();
  }, []);
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
            {banners &&
              banners.map((banner, index) => (
                <SwiperSlide key={index}>
                  <div className="relative pt-24 bg-cover bg-center bg-no-repeat h-screen">
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
                        <div className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-black md:text-6xl md:tracking-tight">
                          <TypeAnimation
                            sequence={[
                              banner.title, // Show the title
                              2000, // Wait for 2 seconds
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            className="block w-full py-2 text-transparent text-7xl bg-clip-text leading-12 bg-white lg:inline"
                          />
                        </div>

                        <div className="px-0 mb-8 text-lg text-gray-100 md:text-xl lg:px-24">
                          <TypeAnimation
                            sequence={[
                              banner?.description,
                              2500,
                            ]}
                            wrapper="p"
                            cursor={true}
                            repeat={Infinity}
                          />
                        </div>

                        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                          <a
                            href="/services"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      </div>
    </>
  );
};
export default Home;
