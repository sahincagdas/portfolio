interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    category: string;
    githubUrl?: string;
    liveUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform. It includes a user-friendly interface, secure payment system, and management panel.",
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      category: "Full Stack",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management Application",
      description: "A real-time task management and collaboration platform developed for teams.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      category: "Frontend",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "API Gateway Service",
      description: "A high-performance API Gateway solution developed for microservice architecture.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
      technologies: ["Node.js", "Express", "Docker", "Redis"],
      category: "Backend",
      githubUrl: "https://github.com"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform. It includes a user-friendly interface, secure payment system, and management panel.",
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      category: "Full Stack",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 5,
      title: "Task Management Application",
      description: "A real-time task management and collaboration platform developed for teams.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      category: "Frontend",
      githubUrl: "https://github.com"
    },
    {
      id: 6,
      title: "API Gateway Service",
      description: "A high-performance API Gateway solution developed for microservice architecture.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
      technologies: ["Node.js", "Express", "Docker", "Redis"],
      category: "Backend",
      githubUrl: "https://github.com"
    }
  ];
  
  export const categories = ["All", "Frontend", "Backend", "Full Stack"];