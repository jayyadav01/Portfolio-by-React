import React from 'react'
import './Home.css' 
import { Link  } from 'react-router-dom'

function Home() {
  return (
    <>  
        <div className='home'>
            <div className='parentbox'></div>

                <div className='photoname'>
                    <img id='picture' src='./pic.jpeg' alt='image'/>
                    <div className='name'>
                        <h1>Jay Kumar Yadav</h1>
                        <h5>Frontend Developer</h5>
                        <a className='btn1' href='./Jay Resume.pdf'>RESUME</a>
                        <Link className='btn2' to='/Contact'>HIRE ME</Link>
                    </div>
                </div>
            
        </div>


    </>
  )
}

export default Home
