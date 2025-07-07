import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0618] border-t border-gray-800 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright Text */}
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Arslan Shah. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://facebook.com/Arslan Shah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#8245ec]/10 hover:bg-[#8245ec]/20 text-[#8245ec] rounded-full transition-all"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>
            
            <a 
              href="https://wa.me/923171983246" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#8245ec]/10 hover:bg-[#8245ec]/20 text-[#8245ec] rounded-full transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
            </a>
            
            <a 
              href="mailto:arslanshah0506@gmail.com" 
              className="w-10 h-10 flex items-center justify-center bg-[#8245ec]/10 hover:bg-[#8245ec]/20 text-[#8245ec] rounded-full transition-all"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>
            
            <a 
              href="https://github.com/SyedArslanart" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#8245ec]/10 hover:bg-[#8245ec]/20 text-[#8245ec] rounded-full transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/syed-arslan-shah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-[#8245ec]/10 hover:bg-[#8245ec]/20 text-[#8245ec] rounded-full transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            
           
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;