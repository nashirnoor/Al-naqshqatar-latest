import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/user_pages/Home";
import Services from "../pages/user_pages/Services";
import Project from "../pages/user_pages/project";
import Contact from "../pages/user_pages/Contact";
import About from "../pages/user_pages/About";
import OurClients from "@/pages/user_pages/OurClients";
import OurPartners from '@/pages/user_pages/OurPartners';
import BackupHome from "@/pages/user_pages/BackupHome";
import Servicelist from "@/pages/user_pages/Servicelist";
import ServiceDetails from "@/pages/user_pages/ServiceDetails";
import CompletedProjects from "@/pages/user_pages/CompletedProjects";
import OngoingProjects from "@/pages/user_pages/OngoingProjects";
import ProjectDetails from "@/pages/user_pages/ProjectDetails";

const UserRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services-list/:id" element={<Servicelist />} />
        <Route path="/services-detail/:id" element={<ServiceDetails />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-partners" element={<OurPartners />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/home-backup" element={<BackupHome />} />
        <Route path="/completed-projects" element={<CompletedProjects />} />
        {/* Ongoing Projects Page */}
        <Route path="/ongoing-projects" element={<OngoingProjects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />

      </Route>
    </Routes>
  );
};
export default UserRoute;
