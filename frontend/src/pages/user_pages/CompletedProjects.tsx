import React, { useEffect, useState } from "react";
import { fetchProject } from "@/api/Route";
import { Link } from "react-router-dom";

interface projectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const baseurl = 'http://localhost:8000/'

const CompletedProjects = () => {
  const [completedProjects, setCompletedProjects] = useState<projectCardProps[]>([]);

  const fetchData = async () => {
    const response: projectCardProps[] = (await fetchProject()) as projectCardProps[];
    const completed = response.filter(project => project.category === "completed");
    console.log(completed)
    setCompletedProjects(completed);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 my-16">
    <h1 className="text-4xl font-bold mb-8">Completed Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {completedProjects.map(project => (
        <Link key={project.id} to={`/project/${project.id}`}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img 
              src={`${baseurl}${project.image}`} 
              alt={project.title} 
              className="w-full h-64 object-cover transition-transform transform hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              {/* <p className="text-gray-600">{project.description}</p> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
  
  );
};

export default CompletedProjects;
