import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import ProfileImage from '../../assets/profile.jpg'

const About = () => {
  return (
    <section id='about' className='relative pt-24 pb-12 px-[7vw] lg:px-[20vw] bg-[#050414]'>
      {/* Background pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20' />
      
      <div className='relative z-10'>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-8'>
          {/* Left Side Content (Unchanged) */}
          <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
              Hi, I am
            </h1>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
              Syed Arslan
            </h2>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
              <span className='text-white'>I am a </span>
              <ReactTypingEffect
                text={['Full Stack Developer', 'MERN Stack Developer', 'UI/UX Designer', 'Coder']}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => <span className='text-[#8245ec]'>{cursor}</span>}
              />
            </h3>
            
            <div className='max-h-[200px] overflow-y-auto pr-2 custom-scrollbar mb-6'>
              <p className='text-base sm:text-lg md:text-lg text-gray-400 leading-relaxed'>
                Coding isn't just my skill – it's my passion...
              </p>
            </div>

            <a 
              href="https://docs.google.com/document/d/1LODowiwbFZKdVH7MJ8BEhUWA1xEU7pjt/edit" 
              target='_blank'
              rel='nopener noreferrer'
              className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 16px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* Right Side Image with Tilt */}
          <div className='md:w-1/2 flex justify-center'>
            <Tilt
              tiltEnable={true}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#8245ec"
              glarePosition="all"
              className="w-[280px] h-[280px] rounded-full"
            >
              <div className='relative w-full h-full rounded-full border-4 border-[#8245ec]/30 overflow-hidden shadow-[0_0_30px_rgba(130,69,236,0.6)]'>
                <img 
                  src={ProfileImage} 
                  alt='Syed Arslan'
                  className='w-full h-full object-cover'
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About