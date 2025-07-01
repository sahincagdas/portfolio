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
      "id": 4,
      "title": "AI Labeling Tool",
      "description": "A custom image labeling application designed for data annotation in AI projects. Supports exporting labeled data in JSON format and integrates with quality control processes.",
      "imageUrl": "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=2048&q=80",
      "technologies": ["HTML", "CSS", "JavaScript", "JSON"],
      "category": "Full Stack",
      "githubUrl": "https://github.com/your-username/labeling-tool"
    },
    {
      "id": 5,
      "title": "Street Racer 2D Game",
      "description": "A 2D car racing game developed using Unity. Includes dynamic obstacle system, progressive speed control, and fully designed UI assets.",
      "imageUrl": "https://plus.unsplash.com/premium_vector-1711987843374-6a228399f9d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmFjZXxlbnwwfHwwfHx8MA%3D%3Dauto=format&fit=crop&w=2048&q=80",
      "technologies": ["Unity", "C#", "Photoshop"],
      "category": "Full Stack",
      "githubUrl": "https://github.com/your-username/street-racer-2d"
    },
    {
      "id": 6,
      "title": "City Guide App",
      "description": "A mobile guide app that helps users explore local foods and historical places. Built with React Native, including dynamic region-based content.",
      "imageUrl": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=2048&q=80",
      "technologies": ["React Native", "TypeScript", "Context API", "Reanimated"],
      "category": "Mobile",
      "githubUrl": "https://github.com/your-username/sehir-rehberi"
    },
    {
      "id": 7,
      "title": "Raffle App",
      "description": "An event raffle application where users are matched randomly and notified via email. Includes participant validation, duplicate prevention, and state management.",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1718674394245-9f270c5fd2b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFmZmxlfGVufDB8fDB8fHww?auto=format&fit=crop&w=2048&q=80",
      "technologies": ["React.js", "JavaScript", "CSS", "EmailJS"],
      "category": "Full Stack",
      "githubUrl": "https://github.com/your-username/cekilis-uygulamasi"
    },
    {
      "id": 8,
      "title": "UnıCampus App",
      "description": "A campus assistant mobile application providing access to schedules, events, dining options, and navigation. Built with React Native and Firebase backend.",
      "imageUrl": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2048&q=80",
      "technologies": ["React Native", "JavaScript", "Firebase", "Expo"],
      "category": "Mobile",
      "githubUrl": "https://github.com/your-username/unicampus"
    },
    {
      "id": 9,
      "title": "Recipe Recommendation Site",
      "description": "A smart recipe recommendation site where users can filter based on time, diet, and difficulty. Provides full recipes, ingredient lists, and images.",
      "imageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2048&q=80",
      "technologies": ["HTML", "CSS", "JavaScript", "JSON"],
      "category": "Frontend",
      "githubUrl": "https://github.com/your-username/yemek-oneri"
    },
    {
      "id": 10,
      "title": "Cafe Menu Site",
      "description": "A responsive website for a cafe showcasing categorized menus with images, prices, and product details. Designed for both desktop and mobile users.",
      "imageUrl": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2048&q=80",
      "technologies": ["HTML5", "CSS3", "JavaScript"],
      "category": "Frontend",
      "githubUrl": "https://github.com/your-username/cafe-menu"
    },
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
  ];
  
  export const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile"];