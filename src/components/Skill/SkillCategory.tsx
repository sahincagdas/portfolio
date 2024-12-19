import React from 'react';
import SkillBar from './SkillBar';
import { type Skill } from './SkillsData';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  icon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar
            key={index}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;