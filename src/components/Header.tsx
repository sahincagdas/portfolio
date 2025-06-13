import React from 'react';
// Gerekli ikonları lucide-react kütüphanesinden import ediyoruz
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

// Header bileşenini oluşturuyoruz
const Header = () => {
  // Mobil menünün açık/kapalı durumunu kontrol eden state
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    // Sayfa başında sabit duran, yarı şeffaf ve bulanık arka plana sahip header
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      {/* İçeriği ortalamak ve kenar boşlukları için konteyner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header içeriğinin flex yapısı */}
        <div className="flex justify-between items-center py-4">
          {/* Logo/Başlık alanı - tıklandığında home kısmına yönlendirir */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-gray-900">
              Cagdas Sahin
            </a>
          </div>
          
          {/* Masaüstü Navigasyon Menüsü - md breakpoint'inden sonra görünür */}
          <nav className="hidden md:flex items-center space-x-8">
            
            <a href="#about" className="text-gray-500 hover:text-gray-900 font-bold">About</a>
            <a href="#projects" className="text-gray-500 hover:text-gray-900 font-bold">Projects</a>
            
            <a href="#contact" className="text-gray-500 hover:text-gray-900 font-bold" >Contact</a>
          </nav>

          {/* Sosyal Medya Linkleri - md breakpoint'inden sonra görünür */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/sahincagdas" className="text-gray-700 hover:text-gray-900" target="_blank" rel="noopener noreferrer" >
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/cagdas-sahin-01aa3b2a0/" className="text-gray-700 hover:text-gray-900" target="_blank" rel="noopener noreferrer" >
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sahin.cagdas@outlook.com" className="text-gray-700 hover:text-gray-900">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobil Menü Butonu - sadece md breakpoint'inden küçük ekranlarda görünür */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Menü durumuna göre ikon değişimi */}
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobil Menü - isMenuOpen true olduğunda ve md breakpoint'inden küçük ekranlarda görünür */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Skills</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

// Header bileşenini dışa aktarıyoruz
export default Header;