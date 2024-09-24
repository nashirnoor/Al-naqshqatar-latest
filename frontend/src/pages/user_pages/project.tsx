import { fetchProject } from "@/api/Route";
import { projectCardProps } from "@/components/user_components/common/service_card/type";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";


const Project = () => {
  const navigate = useNavigate();

  const [completedProjects, setCompletedProjects] = useState<projectCardProps[]>([]);
  const [ongoingProjects, setOngoingProjects] = useState<projectCardProps[]>([]);

  const fetchData = async () => {
    const response: projectCardProps[] = (await fetchProject()) as projectCardProps[];
    console.log(response, "Fetched projects:");

    // Separate projects into completed and ongoing categories
    const completed = response.filter(project => project.category === "completed");
    const ongoing = response.filter(project => project.category === "ongoing");

    setCompletedProjects(completed);
    setOngoingProjects(ongoing);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen">
  {/* Header Section */}
  <header className="bg-white py-16 text-center text-black">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Our Projects</h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto">
        We take pride in our work. Here are some of our most recent projects categorized as Completed and Ongoing.
      </p>
    </div>
  </header>
  {/* Project Overview Section */}
  <section className="container mx-auto px-4 py-16 my-8 bg-white">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Completed Projects Card */}
      <div
        className="relative group bg-cover bg-center h-[350px] rounded-lg overflow-hidden shadow-lg p-6 text-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5673475/pexels-photo-5673475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="absolute inset-0 bg-green-800 opacity-80 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-bold text-white mb-4 mt-7">Completed Projects</h2>
          <div className="text-lg text-gray-200 mb-6 group-hover:text-center group-hover:text-xl group-hover:mb-4 transition-all duration-300">
            {completedProjects.length} projects completed successfully.
          </div>
          <button
            onClick={() => navigate("/completed-projects")}
            className="bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
          >
            View Completed Projects
          </button>
        </div>
      </div>

      {/* Ongoing Projects Card */}
      <div
        className="relative group bg-cover bg-center h-[350px] rounded-lg overflow-hidden shadow-lg p-6 text-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="absolute inset-0 bg-yellow-500 opacity-80 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-bold text-white mb-4 mt-7">Ongoing Projects</h2>
          <div className="text-lg text-gray-900 mb-6 group-hover:text-center group-hover:text-xl group-hover:mb-4 transition-all duration-300">
            {ongoingProjects.length} projects currently in progress.
          </div>
          <button
            onClick={() => navigate("/ongoing-projects")}
            className="bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
          >
            View Ongoing Projects
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
  );
};

export default Project;
