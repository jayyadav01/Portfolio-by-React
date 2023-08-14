import React from 'react'
import Header from './Header'
import './Home.css' 
import { Link  } from 'react-router-dom'

function Home() {
  return (
    <>  
        <div className='home'>
            <div className='parentbox'>
            </div>

                <div className='photoname'>
                    <img id='picture' src='./Realistic-Male-Profile-Picture.webp' alt='image'/>
                    <div className='name'>
                        <h1>Ananthu Krishnan</h1>
                        <h5>Web Developer</h5>
                        <a className='btn1' href='./resume.pdf'>RESUME</a>
                        <Link className='btn2' to='/Contact'>HIRE ME</Link>
                    </div>
                </div>
            
        </div>


    </>
  )
}

export default Home
