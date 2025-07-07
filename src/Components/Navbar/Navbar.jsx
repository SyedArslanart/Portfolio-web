import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] lg:px-[20vw] bg-[#050414]/80 backdrop-blur-md shadow-md`}>
      <div className='text-white py-2 flex justify-between items-center h-full'>
        {/* Logo */}
        <div className='text-sm font-semibold cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Syed Arslan</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Shah</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        
        <ul className='hidden md:flex space-x-6 text-gray-300'>
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${
              activeSection === item.id ? "text-[#8245ec]" : ""
            }`}>
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        
        <div className='hidden md:flex space-x-3'>
          <a href="https://github.com/SyedArslanart" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#8245ec]'>
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/syed-arslan-shah" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-[#8245ec]'>
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden'>
          {isOpen ? (
            <FiX className='text-2xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className='text-2xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu (Now includes all items and social icons) */}
      {isOpen && (
        <div className='md:hidden fixed top-14 left-0 w-full bg-[#050414] bg-opacity-95 backdrop-blur-lg z-50 py-4'>
          <ul className='flex flex-col items-center space-y-4 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer text-lg ${
                activeSection === item.id ? "text-[#8245ec]" : "hover:text-white"
              }`}>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            
            {/* Mobile Social Icons */}
            <div className='flex space-x-6 pt-4'>
              <a href="https://github.com/SyedArslanart" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-white'>
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/syed-arslan-shah" target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-white'>
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;