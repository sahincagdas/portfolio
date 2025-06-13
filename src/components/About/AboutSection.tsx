
import AboutContent from './AboutContent';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-700 sm:text-5xl">
            About
          </h2>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Profile Image */}
            <div className="w-full md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Profile"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            {/* Bio */}
            <div className="w-full md:w-2/3 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hello! I’m Cagdas Sahin, a passionate and curious software developer with a background in Computer Engineering and a growing focus on Artificial Intelligence and frontend development. I love building solutions that blend functionality with user-centered design — whether it's a smart automation tool or a visually engaging mobile app.</p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                With my approach focused on continuous learning and development, I closely follow new technologies and integrate them into my projects. I value teamwork and open communication, striving to achieve the best outcome in every project.
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-gray-700"><strong>Education:</strong> Bachelor of Computer Engineering</p>
                <p className="text-gray-700"><strong>Experience:</strong> 3+ Years of Professional Software Development</p>
                <p className="text-gray-700"><strong>Focus Areas:</strong> Web Development, Software Architecture, UI/UX</p>
              </div>
            </div>
          </div>
          
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;