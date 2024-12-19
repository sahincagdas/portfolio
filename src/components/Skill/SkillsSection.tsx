import React from 'react';
import { Code, Server, GitBranch, Users } from 'lucide-react';
import SkillCategory from './SkillCategory';
import {
  frontendSkills,
  backendSkills,
  devopsTools,
  softSkills
} from './SkillsData';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Yeteneklerim
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Teknik ve profesyonel becerilerim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory
            title="Frontend Geliştirme"
            skills={frontendSkills}
            icon={<Code className="w-6 h-6" />}
          />
          <SkillCategory
            title="Backend Geliştirme"
            skills={backendSkills}
            icon={<Server className="w-6 h-6" />}
          />
          <SkillCategory
            title="DevOps & Araçlar"
            skills={devopsTools}
            icon={<GitBranch className="w-6 h-6" />}
          />
          <SkillCategory
            title="Soft Skills"
            skills={softSkills}
            icon={<Users className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;