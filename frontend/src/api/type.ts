interface Service {
    id: number;
    service_name: string;
    description: string;
    image_url: string;
    created_at: string;
  }
  
 export interface FetchServicesResponse {
    data: {
      data: Service[];
    };
  }



  export interface ServiceCategoryProps {
    id: number;
    title: string;
    description?: string;
    image?: string;
    created_at: string;
    subservices: string[];
  }
  
  export interface SubServicelistProps {
    id: number;
    service_category: number;
    title: string;
    description?: string;
    image?: string;
    subservices: string[]; // Adjust if you want more detail about subservices
  }
  