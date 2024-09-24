import SocialMedia from "../common/SocialMedia";
import isoImg from "../../../assets/IMS-vision.png";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,FaWhatsapp } from 'react-icons/fa';
import { TbDeviceLandlinePhone } from "react-icons/tb";

const Footer = () => {
  return (
  <div
  className="sm:px-12 py-16 bg-black bg-cover bg-center"
  // style={{ backgroundImage: `url('https://www.timeoutdoha.com/cloud/timeoutdoha/2023/10/06/Doha-landmarks.jpg')` }}
>
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-2xl font-bold text-gray-200">
          Subscribe to our newsletter
        </h1>
        <p className="text-gray-300 mt-2">
          Stay updated with our latest news and offers.
        </p>
        <form action="" className="mt-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300">
              Your email
            </label>
            <input
              id="email"
              className="border border-gray-300 px-4 py-3 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#2E994D] w-full sm:w-[70%]"
              type="email"
              placeholder="Your email address"
              required
            />
          </div>
          <button className="mt-6 px-6 py-3 bg-[#2E994D] text-white font-medium rounded-md hover:bg-[#24803b] transition-colors duration-300">
            Submit
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-200">Contacts</h1>
  
          <div className="mt-4 flex items-center text-gray-300">
            <FaEnvelope className="mr-2" />
            info@alnaqshqatar.com
          </div>
  
          <div className="mt-4 flex items-center text-gray-300">
            <TbDeviceLandlinePhone className="mr-2" />
            +974 41439515
          </div>
  
          <div className="mt-4 flex items-center text-gray-300">
            <FaPhoneAlt className="mr-2" />
            +974 30078151
          </div>
          <div className="mt-4 flex items-center text-gray-300">
            <FaWhatsapp className="mr-2" />
            +974 30078151
          </div>
  
          <div className="mt-4 flex items-center text-gray-300">
            <FaMapMarkerAlt className="mr-2 text-3xl" />
            Office No. B 122, 2nd floor, Entrance 6, Building 43, Souq Al Nayef,
            Street 100, Zone 56 Ain Khaled Qatar
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-200">Socials</h1>
          <div className="mt-6 space-x-4">
            <SocialMedia className="text-white" />
          </div>
          <div className="mt-6">
            <h1 className="text-2xl font-bold text-gray-200">
              AWARDS & AFFILIATIONS
            </h1>
            <div className="w-28 h-20 mt-6">
              <img className="w-full h-full object-cover" src={isoImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};
export default Footer;
