import React from 'react';
import { Code2, Lightbulb, Users } from 'lucide-react';
import AboutCard from './AboutCard';

const AboutContent = () => {
  const qualities = [
    {
      icon: Code2,
      title: "Technical Expertise",
      description: "Comprehensive experience in modern web technologies and software development tools"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Ability to create creative and effective solutions to complex problems"
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Contributing to successful projects through effective communication and collaboration"
    }
    
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {qualities.map((quality, index) => (
        <AboutCard
          key={index}
          Icon={quality.icon}
          title={quality.title}
          description={quality.description}
        />
      ))}
    </div>
  );
};

export default AboutContent;