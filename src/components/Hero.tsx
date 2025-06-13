
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight animate-fade-in">
            <span className="block text-gray-900">Hi, I'm Cagdas Sahin</span>
            <span className="block gradient-text mt-4"> Jr. Software Developer</span>
            
          </h1>
          <p className="mt-10 max-w-lg mx-auto text-xl text-gray-600 animate-fade-in" style={{animationDelay: '0.2s'}}>
            I'm a passionate software developer with a knack for creating innovative solutions.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full text-white gradient-bg hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-soft"
            >
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full text-primary-600 bg-white border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 flex items-center gap-2 shadow-soft"
            >
              My Projects
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;