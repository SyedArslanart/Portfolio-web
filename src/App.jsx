import React from "react"
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'


import Work from './Components/Work/Work'


function App() {
 
  return (
   <div className="bg-[#050414]">
  <div className="absolute inset-0 
    bg-[linear-gradient(to_right,_#4f4f4f2e_1px,_transparent_1px),linear-gradient(to_bottom,_#4f4f4f2e_1px,_transparent_1px)] 
    bg-[size:14px_24px] 
    [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,_#000_70%,_transparent_100%)] 
    z-0">
  </div>

    
    <div>
      <Navbar/>
<About/>

<Education/>
<Skills/>
<Work/>
<Experience/>
<Contact/>




<Footer/>



</div>

   </div>
  )
}

export default App
