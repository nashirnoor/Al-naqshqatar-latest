import React from "react";
import partnerlogo1 from "../../assets/partners-logo/DROP POOLS.png";
import partnerlogo2 from "../../assets/partners-logo/EQUESTRIAN SURFACE LTD.png";
import partnerlogo3 from "../../assets/partners-logo/FLUIDRA POOLS.png";
import partnerlogo4 from "../../assets/partners-logo/HORIZONT.png";
import partnerlogo5 from "../../assets/partners-logo/LV SEN WOODpng.png";
import partnerlogo6 from "../../assets/partners-logo/SUMMERWIND.png";
import partnerlogo7 from "../../assets/partners-logo/UANGDONG HAISAN AMUSMENT TECHNOLOGY CO.png";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: "Partner 1", logo: partnerlogo1 },
  { id: 2, name: "Partner 2", logo: partnerlogo2 },
  { id: 3, name: "Partner 3", logo: partnerlogo3 },
  { id: 4, name: "Partner 4", logo: partnerlogo4 },
  { id: 5, name: "Partner 5", logo: partnerlogo5 },
  { id: 6, name: "Partner 6", logo: partnerlogo6 },
  { id: 7, name: "Partner 7", logo: partnerlogo7 },
];

const OurPartner: React.FC = () => {
  return (
    <section className="bg-white py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
        OUR OVERSEAS PARTNERS
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="group flex items-center justify-center p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            style={{ width: 'calc(25% - 2rem)', minWidth: '150px' }}
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-32 w-auto object-contain transform transition-transform duration-300 ease-in-out group-hover:scale-125"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>

  );
};

export default OurPartner;
