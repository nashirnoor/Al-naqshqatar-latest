import  { useEffect, useState } from "react";
import { fetchProject } from "@/api/Route";
import { Link } from "react-router-dom";
const baseurl = 'http://localhost:8000/'

interface projectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const OngoingProjects = () => {
  const [ongoingProjects, setOngoingProjects] = useState<projectCardProps[]>([]);

  const fetchData = async () => {
    const response: projectCardProps[] = (await fetchProject()) as projectCardProps[];
    const ongoing = response.filter(project => project.category === "ongoing");
    console.log(ongoing,"onaosdfi")
    setOngoingProjects(ongoing);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 my-14">
    <h1 className="text-4xl font-bold mb-8">Ongoing Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ongoingProjects.map(project => (
        <Link key={project.id} to={`/project/${project.id}`}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img 
              src={`${baseurl}${project.image}`} 
              alt={project.title} 
              className="w-full h-64 object-cover transition-transform transform hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
  
  );
};

export default OngoingProjects;
