import React from 'react'
import profile from '../assets/foto.jpg'
import background from '../assets/bg.gif'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div 
        className='max-w-[95%] m-auto mt-4 pb-32' 
        style={{ backgroundImage: `url(${background})`}}
    >
    <div className='flex justify-center pt-40'>
        <div className='flex flex-col justify-center items-center bg-black/80 w-[500px] py-4 rounded-3xl'>
            <img    
                src={profile}
                alt="profile"
                className='rounded-full w-44 h-44'
            />
        <div className='flex flex-col justify-center text-center pt-4 gap-4'>
            <h1 className='text-bold'>Luigi <span className='inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600'>Dalle Aste</span></h1>
            <TypeAnimation
        className='text-sm italic max-w-[50%] m-auto text-[#A0A1A0]'
      sequence={[
        '"My curiosity and my desire to learn new things allows me to approach problems and situations from different perspectives"', // Types 'One'
        3000, // Waits 1s
        ''
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      speed={60}
      deletionSpeed={80}
    />
{/*             <p className='text-sm italic max-w-[50%] m-auto text-[#A0A1A0]'>"My curiosity and my desire to learn new things allows me to approach problems and situations from different perspectives"</p>
 */}        </div>
        </div>
    </div>
    </div>
  )
}

export default Home