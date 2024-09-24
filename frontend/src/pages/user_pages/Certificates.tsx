
// import React, { useState } from "react";
// import ReactModal from "react-modal";
// import certificate1 from "../../assets/certificates/img4.jpg";
// import certificate2 from "../../assets/certificates/img9.jpg";
// import certificate3 from "../../assets/certificates/img14.jpg";

// interface Certificate {
//   imageUrl: string;
// }

// const certificates: Certificate[] = [
//   {
//     imageUrl: certificate1,
//   },
//   {
//     imageUrl: certificate2,
//   },
//   {
//     imageUrl: certificate3,
//   },
// ];

// const Certificates: React.FC = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const openModal = (imageUrl: string) => {
//     setSelectedImage(imageUrl);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedImage(null);
//   };

//   return (
//     <section className="py-12 bg-gray-100 dark:bg-gray-800">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
//           CERTIFICATES
//         </h2>
//         <div className="flex justify-center">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {certificates.map((cert, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
//                 style={{ width: '250px', height: '350px' }}
//               >
//                 <img
//                   src={cert.imageUrl}
//                   alt={`Certificate ${index + 1}`}
//                   className="w-full h-full object-cover cursor-pointer"
//                   onClick={() => openModal(cert.imageUrl)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <ReactModal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           contentLabel="Certificate Modal"
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
//           overlayClassName="fixed inset-0"
//         >
//           <div className="relative max-w-3xl mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
//             >
//               &times;
//             </button>
//             {selectedImage && (
//               <img
//                 src={selectedImage}
//                 alt="Selected Certificate"
//                 className="w-full h-auto max-h-[80vh] object-contain"
//               />
//             )}
//           </div>
//         </ReactModal>
//       </div>
//     </section>
//   );
// };

// export default Certificates;


import React, { useState } from "react";
import ReactModal from "react-modal";
import certificate1 from "../../assets/certificates/img4.jpg";
import certificate2 from "../../assets/certificates/img9.jpg";
import certificate3 from "../../assets/certificates/img14.jpg";

interface Certificate {
  imageUrl: string;
}

const certificates: Certificate[] = [
  {
    imageUrl: certificate1,
  },
  {
    imageUrl: certificate2,
  },
  {
    imageUrl: certificate3,
  },
];

const Certificates: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          CERTIFICATES
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
                style={{ width: '250px', height: '350px' }}
              >
                <img
                  src={cert.imageUrl}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openModal(cert.imageUrl)}
                />
              </div>
            ))}
          </div>
        </div>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Certificate Modal"
          className="fixed inset-0 flex items-center justify-center pt-[8rem]"
          overlayClassName="inset-0 bg-black bg-opacity-75"
        >
          <div className="relative max-w-3xl mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2  text-gray-800 dark:text-gray-100 bg-red-800 dark:bg-red p-2 rounded-full"
            >
              &times;
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected Certificate"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </div>
        </ReactModal>
      </div>
    </section>
  );
};

export default Certificates;
