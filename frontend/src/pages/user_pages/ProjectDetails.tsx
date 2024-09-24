import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const baseurl = 'http://localhost:8000/'


interface ProjectDetailsProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  additional_images: { id: number; image: string }[];
}

const ProjectDetails = () => {
  const [project, setProject] = useState<ProjectDetailsProps | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`${baseurl}/projects/${id}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch project details');
        }
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16 my-14">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={`${baseurl}${project.image}`} alt={project.title} className="w-full rounded-lg shadow-lg h-96" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-600 mb-6">{project.description}</p>
          <p className="text-lg font-semibold">{project.category}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-6">Additional Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {project.additional_images.map((img) => (
          <img key={img.id} src={`${baseurl}${img.image}`} alt={`Additional ${project.title}`} className="w-full h-48 object-cover rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;