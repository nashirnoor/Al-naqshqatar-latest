

import React from "react";
import clientlogo1 from "../../assets/client-logo/logo1.png";
// import clientlogo2 from "../../assets/client-logo/logo2.jpeg";
import clientlogo3 from "../../assets/client-logo/logo3.jpg";
// import clientlogo4 from "../../assets/client-logo/logo4.jpeg";
// import clientlogo5 from "../../assets/client-logo/logo4.jpeg";
import clientlogo6 from "../../assets/client-logo/logo6.jpeg";
import clientlogo7 from "../../assets/client-logo/logo7.png";
import clientlogo8 from "../../assets/client-logo/logo8.jpg";
import clientlogo9 from "../../assets/client-logo/logo9.png";
import clientlogo10 from "../../assets/client-logo/logo10.jpeg";
import clientlogo11 from "../../assets/client-logo/logo11.png";
import clientlogo12 from "../../assets/client-logo/logo12.png";
import clientlogo13 from "../../assets/client-logo/logo13.jpeg";
import clientlogo14 from "../../assets/client-logo/logo14.png";
import clientlogo15 from "../../assets/client-logo/logo15.png";
import clientlogo16 from "../../assets/client-logo/logo16.jpeg";
// import clientlogo17 from "../../assets/client-logo/logo17.jpeg";
import clientlogo18 from "../../assets/client-logo/logo18.png";
import clientlogo19 from "../../assets/client-logo/logo19.png";
// import clientlogo20 from "../../assets/client-logo/logo20.jpeg";
import clientlogo21 from "../../assets/client-logo/logo21.jpeg";
import clientlogo22 from "../../assets/client-logo/logo22.jpeg";
import clientlogo23 from "../../assets/client-logo/logo23.jpeg";
import clientlogo24 from "../../assets/client-logo/logo24.png";
// import clientlogo25 from "../../assets/client-logo/logo25.jpg";


const OurClients: React.FC = () => {
  const clients = [
    { id: 1, name: "", logo: clientlogo1 },
    // { id: 2, name: "", logo: clientlogo2 },
    { id: 3, name: "", logo: clientlogo3 },
    // { id: 4, name: "", logo: clientlogo4 },
    // { id: 5, name: "", logo: clientlogo5 },
    { id: 6, name: "", logo: clientlogo6 },
    { id: 7, name: "", logo: clientlogo7 },
    { id: 8, name: "", logo: clientlogo8 },
    { id: 9, name: "", logo: clientlogo9 },
    { id: 10, name: "", logo: clientlogo10 },
    { id: 11, name: "", logo: clientlogo11 },
    { id: 12, name: "", logo: clientlogo12 },
    { id: 13, name: "", logo: clientlogo13 },
    { id: 14, name: "", logo: clientlogo14 },
    { id: 15, name: "", logo: clientlogo15 },
    { id: 16, name: "", logo: clientlogo16 },
    // { id: 17, name: "", logo: clientlogo17 },
    { id: 18, name: "", logo: clientlogo18 },
    { id: 19, name: "", logo: clientlogo19 },
    // { id: 20, name: "", logo: clientlogo20 },
    { id: 21, name: "", logo: clientlogo21 },
    { id: 22, name: "", logo: clientlogo22 },
    { id: 23, name: "", logo: clientlogo23 },
    { id: 24, name: "", logo: clientlogo24 },
    // { id: 25, name: "", logo: clientlogo25 },
  ];

  //   return (
  //     <section className="py-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
  //       <h2 className="text-center text-gray-800 text-4xl font-bold mb-12">
  //         Our Truested Clients
  //       </h2>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-8">
  //         {clients.map((clients, index) => (
  //           <div
  //             key={index}
  //             className={`relative transform transition-transform hover:scale-105 duration-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl bg-white ${
  //               index % 2 === 0 ? "rotate-2" : "-rotate-2"
  //             }`}
  //           >
  //             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-0 hover:opacity-80 transition-opacity duration-300"></div>
  //             <div className="relative p-8 flex flex-col items-center">
  //               <img
  //                 src={clients.logo}
  //                 alt={`${clients.name} logo`}
  //                 className="w-32 h-32 object-contain mb-4 transform transition-transform duration-300 hover:scale-110"
  //               />
  //               <h3 className="text-center text-lg font-semibold text-gray-700 relative z-10">
  //                 {clients.name}
  //               </h3>
  //             </div>
  //             <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
  //               <h3 className="text-white text-2xl font-bold">{clients.name}</h3>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </section>
  //   );
  return (
    <section className="py-16">
      <h2 className="text-center text-gray-800 text-3xl font-bold mb-12">
        OUR TRUSTED CLIENTS
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className="relative w-36 h-36 rounded-md overflow-hidden shadow-md hover:shadow-md bg-white group animate-zoom-in-out"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-24 h-24 object-contain animate-zoom-in-out group-hover:scale-90"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300">
              <h3 className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{client.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
// };


// export default OurClients;
