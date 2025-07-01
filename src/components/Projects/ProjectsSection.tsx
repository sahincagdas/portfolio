import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import { projects, categories } from './ProjectsData';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setVisibleCount(3);
  }, [selectedCategory]);

  const filteredProjects = projects.filter(project =>
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Some important projects I've developed
          </p>
        </div>

        <div className="mt-12">
          <ProjectFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>

          {visibleCount < filteredProjects.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;