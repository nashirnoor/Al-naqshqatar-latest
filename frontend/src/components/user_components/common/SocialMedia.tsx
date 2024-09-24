// import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// type SocialMediaProps = {
//   className?: string;
// };

// const SocialMedia = ({ className = "" }: SocialMediaProps) => {
//   return (
//     <ul className={`${className} flex gap-5`}>
//       <li>
//         <FaFacebook size={24} />
//       </li>
//       <li>
//         <FaInstagram size={24} />
//       </li>
//       <li>
//         <FaLinkedinIn size={24} />
//       </li>
//       <li>
//         <FaXTwitter size={24} />
//       </li>
//     </ul>
//   );
// };

// export default SocialMedia;


import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './SocialMedia.css'
import { Link } from "react-router-dom";

type SocialMediaProps = {
  className?: string;
};

const SocialMedia = ({ className = "" }: SocialMediaProps) => {
  return (
    <ul className={`${className} flex gap-5 animate-icons`}>
      <li>
        <Link to={"https://www.facebook.com/profile.php?id=61561964022493&mibextid=ZbWKwL"} target="blank">
        <FaFacebook size={24} />
        </Link>
      </li>
      <li>
      <Link to={"https://www.instagram.com/alnaqshpools?igsh=enBtdGc4d2l1dHQz"} target="blank">
        <FaInstagram size={24} />
       </Link>
      </li>
      <li>
      <Link to={""} target="blank">
        <FaLinkedinIn size={24} />
       </Link>
      </li>
      <li><Link to={""} target="blank">
        <FaXTwitter size={24} />
       </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
