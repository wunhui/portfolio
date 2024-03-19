import Link from 'next/link' 
// import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect, useState } from 'react';
// import Contact from './contact' 
import Header from './header'
import Loading from './loading'
import About from './about';
import Skill from './skill';
import Portfolio from './portfolio';
import { useEffect, useState } from 'react'
// import { useGSAP } from '@gsap/react';
export default function Home() { 
  let [loading, setLoading] = useState(false)
  useEffect(() => {
    if(loading === true) {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }, [])
  return (  
    <div className={`l-container ${ loading && 'full'}`}>   
      <div className='l-wrap'>
        {
          loading ? <Loading /> : null
        }
        <Header />
        <About />
        <Skill />
        <Portfolio />
      </div>
    </div>  
  )
}