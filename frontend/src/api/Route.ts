import { bannerProps, projectCardProps } from "@/components/user_components/common/service_card/type";
import axios from "axios";
import { ServiceCategoryProps, SubServicelistProps } from "./type";

const userApi = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
});

// export const addServiceApi = async (data: FormData) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       withCredentials: true,
//     };

//     return await userApi.post("/addservices", data, config);
//   } catch (err) {
//     console.error("Error occurred during API call:", err);
//   }
// };

export const fetchServiceCategories = async (): Promise<ServiceCategoryProps[] | string> => {
  try {
    const response = await userApi.get("api/service-categories"); 
    console.log(response.data, "Fetched Service Categories");
    return response.data as ServiceCategoryProps[]; // 
  } catch (err) {
    console.error("Error occurred during API call:", err);
    return "";
  }
};


export const fetchSubservicelists = async (): Promise<SubServicelistProps[]> => {
  try {
    const response = await userApi.get("api/sub-services");
    console.log(response.data, "Fetched sub-Services list");
    return response.data as SubServicelistProps[];
  } catch (err) {
    console.error("Error occurred during API call:", err);
    return [];
  }
};

export const fetchProject = async ():Promise<projectCardProps|string> => {
  try {
    const data= await userApi.get("/projects")
    console.log(data.data,"ithu data")
    return data.data as projectCardProps
  } catch (err) {
    console.error("Error occurred during API call:", err);
    return ""
  }
};


export const fetchBanner = async ():Promise<bannerProps|string> => {
  try {
    const data= await userApi.get("/banners")
    console.log(data.data,"ithu banners")
    return data.data as bannerProps
  } catch (err) {
    console.error("Error occurred during API call:", err);
    return ""
  }
};

// export const fetchSingleServiceApi = async (serviceId:number) =>{
//   try {
//     return await userApi.get(`/editservice/${serviceId}`)
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const editServiceApi = async (serviceId: number, data: FormData) => {
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       withCredentials: true,
//     };

//     data.append("serviceId", serviceId.toString());

//     return await userApi.put("/editservices", data, config);
//   } catch (err) {
//     console.error("Error occurred during API call:", err);
//   }
// };

// export const deleteService = async (serviceId:number) =>{
//   try{
//     return await userApi.delete(`/deleteservice/${serviceId}`)
//   }catch(err){
//     console.log(err)
//   }
// }

