export interface Skill {
    name: string;
    level: number;
  }
  
  export interface SkillCategory {
    title: string;
    skills: Skill[];
  }
  
  export const frontendSkills: Skill[] = [
    { name: "React.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Next.js", level: 82 }
  ];
  
  export const backendSkills: Skill[] = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 78 },
    { name: "RESTful APIs", level: 90 }
  ];
  
  export const devopsTools: Skill[] = [
    { name: "Git", level: 88 },
    { name: "Docker", level: 75 },
    { name: "CI/CD", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Linux", level: 80 }
  ];
  
  export const softSkills: Skill[] = [
    { name: "Problem Çözme", level: 95 },
    { name: "Takım Çalışması", level: 90 },
    { name: "İletişim", level: 85 },
    { name: "Proje Yönetimi", level: 80 },
    { name: "Adaptasyon", level: 88 }
  ];