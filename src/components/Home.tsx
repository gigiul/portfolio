import React from 'react'
import profile from '../assets/foto.jpg'
import background from '../assets/bg_black.gif'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div id='home'
        className='max-w-[95%] h-[500px] m-auto mt-4 p-16 flex flex-col items-center justify-center bg-cover' 
        style={{ backgroundImage: `url(${background})`}}
    >
            <div className='absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center mb-16'>
                <img    
                    src={profile}
                    alt="profile"
                    className='rounded-full w-44 h-44'
                />
                <h1 className='md:text-4xl text-2xl text-bold'>Luigi <span className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600'>Dalle Aste</span></h1>
            </div>
            <TypeAnimation
                className='absolute md:top-[50%] top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-sm italic w-[22rem] text-[#A0A1A0]'
                sequence={[
                '"My curiosity and my desire to learn new things allows me to approach problems and situations from different perspectives"', // Types 'One'
                3000, // Waits 1s
                ''
                ]}
                cursor={true}
                repeat={Infinity}
                speed={60}
                deletionSpeed={80}
            />
    </div>
  )
}

export default Home
