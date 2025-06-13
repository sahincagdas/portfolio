
import { Code2, Hammer, Lightbulb, Users, Star, Library } from 'lucide-react';
import AboutCard from './AboutCard';

const AboutContent = () => {
  const qualities = [
        // {
    //   icon: Code2,
    //   title: "Technical Expertise",
    //   description: "Comprehensive experience in modern web technologies and software development tools"
    // },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Ability to create creative and effective solutions to complex problems"
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Contributing to successful projects through effective communication and collaboration"
    },
    {
      icon: Star,
      title: "Interests",
      description: "Artificial Intelligence, Machine Learning, Computer Vision, Web Development, Mobile Development, LLMs, RAG, Prompt Engineering"
    },
    {
      icon: Code2,
      title: "Languages",
      description: "Python, JavaScript, HTML, CSS, SQL, C#"
    },
    {
      icon: Library,
      title: "Frameworks & Libraries",
      description: "React, React Native, TensorFlow, OpenCV, Pandas, NumPy"
    },
    {
      icon: Hammer,
      title: "Tools & Platforms",
      description: "Git, Firebase, Cursor, VS Code, Postman"
    },
    
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