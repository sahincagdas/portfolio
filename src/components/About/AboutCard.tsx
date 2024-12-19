import React from 'react';
import { type LucideProps } from 'lucide-react';

interface AboutCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<LucideProps>;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-3 bg-blue-200 rounded-full shadow-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-center text-gray-700">{description}</p>
    </div>
  );
};

export default AboutCard;