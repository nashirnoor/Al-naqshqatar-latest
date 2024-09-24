import { NavLink } from "react-router-dom";
import SocialMedia from "../common/SocialMedia";
import React, { useState, useEffect } from "react";
import { FaEnvelope } from 'react-icons/fa';
import { fetchServiceCategories } from "@/api/Route";
import { ServiceCategoryProps } from "@/api/type";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className={`z-50 bg-white from-transparent to-slate-950 ${isSticky ? 'bg-white' : 'bg-white'} sticky top-0 left-0 right-0 shadow-md transition-all duration-300`}>
      <header className="flex cursor-pointer text-black items-center mx-auto max-w-screen-xl justify-between h-[7rem] px-1">
        {/* Logo Section */}
        <div className="w-[90px] h-[100px] animate-bounce ">
          <NavLink to="/">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=112,fit=crop,q=95/m7V8PnDoX2ur9GvK/whatsapp-image-2023-10-15-at-22.21.49_prev_ui-dOqlV8w8rnUPzopk.png"
              alt="Logo"
            />
          </NavLink>
        </div>
        {/* Hamburger Menu Button */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {/* Navigation Menu */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static w-full md:w-auto top-full md:top-0 left-0 md:left-auto`}>
          <ul className="md:flex md:gap-4 bg-slate-900 md:bg-transparent flex-col md:flex-row items-center py-4 md:py-0 pl-6 md:pl-0 font-medium">
            {/* Navigation Links */}
            <li>
              <NavLink to="/" className={({ isActive }) => `block py-2 md:py-0 px-2 border-b-2 ${isActive ? 'border-white text-black font-medium' : 'border-transparent text-black'} hover:border-white hover:text-black transition-all duration-300 mr-5 text-2xl`} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `block py-2 md:py-0 px-2 border-b-2 ${isActive ? 'border-black text-black font-medium' : 'border-transparent text-black'} hover:border-white hover:text-black transition-all duration-300 mr-5 text-2xl`} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-partners" className={({ isActive }) => `block py-2 md:py-0 px-2 border-b-2 ${isActive ? 'border-black text-black font-medium' : 'border-transparent text-black'} hover:border-white hover:text-black transition-all duration-300 mr-5 text-2xl`} onClick={closeMenu}>
                Our Partners
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-clients" className={({ isActive }) => `block py-2 md:py-0 px-2 border-b-2 ${isActive ? 'border-black text-black font-medium' : 'border-transparent text-black'} hover:border-white hover:text-black transition-all duration-300 mr-5 text-2xl`} onClick={closeMenu}>
                Clients
              </NavLink>
            </li>
            {/* Dropdown for Services */}
            <li className="relative group">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  ` py-2 md:py-0 px-2 border-b-2 flex items-center justify-between ${isActive ? 'border-black text-black font-medium' : 'border-transparent text-black'} hover:border-white hover:text-black transition-all duration-300 mr-5 text-2xl`
                }
                onClick={closeMenu}
              >
                Services
                {/* Arrow Down Icon */}
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </NavLink>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 w-[200px] bg-white shadow-md hidden group-hover:block text-black">
                {servicesData.map((service) => (
                  <li key={service.id} className="hover:bg-gray-200">
                    <NavLink to={`/services-list/${service.id}`} className="block px-4 py-2">
                      {service.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            {/* Dropdown for Projects */}
            <li className="relative group">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  ` py-2 md:py-0 px-2 border-b-2 flex items-center justify-between ${isActive ? 'border-black text-black font-medium' : 'border-transparent text-black'} hover:border-white hover:text-black transition-all duration-300 mr-5 text-2xl`
                }
                onClick={closeMenu}
              >
                Projects
                {/* Arrow Down Icon */}
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </NavLink>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 w-[200px] bg-white shadow-md hidden group-hover:block text-black">
                <li className="hover:bg-gray-200">
                  <NavLink to="/completed-projects" className="block px-4 py-2">
                    Completed
                  </NavLink>
                </li>
                <li className="hover:bg-gray-200">
                  <NavLink to="/ongoing-projects" className="block px-4 py-2">
                    Ongoing
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `block py-2 md:py-0 px-2 border-b-2 ${isActive ? 'border-gray-400 text-black font-medium' : 'border-transparent text-black'} hover:border-white hover:text-black transition-all duration-300 mr-5 text-2xl`} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            <li className="md:hidden pt-4 text-black">
              <SocialMedia />
            </li>
          </ul>
        </nav>
        {/* Social Media Section and Email Section */}
        <div className="hidden md:flex flex-col items-end text-black mt-7">
          <SocialMedia className="mr-6" />
          <div className="flex items-center space-x-2 mt-5">
            <FaEnvelope className="w-5 h-5" />
            <span>info@alnaqshqatar.com</span>
          </div>
        </div>
      </header>
    </div>
  );
};

const MemoisedNavbar = React.memo(Navbar)
export default MemoisedNavbar;
