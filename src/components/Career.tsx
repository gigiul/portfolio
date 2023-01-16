import React, { useRef } from 'react'
import bg_code from '../assets/bg_code.png'
import {MdOutlineComputer} from 'react-icons/md'
import {FaSpaceShuttle} from 'react-icons/fa'
import CountUp, { useCountUp } from 'react-countup';

const Career = () => {
  return (
    <div id='career'>

        {/*COUNTER */}
        <div className=' relative flex justify-center items-center'>
        <img
            src={bg_code} alt="bg/code"
            className='w-full h-[200px] m-auto object-cover opacity-[10%]' />
        <div className='z-10 absolute text-center flex justify-center items-center gap-60'>
            <div className='flex justify-center gap-4'>
            <div className='text-sm md:text-md'>
                <CountUp className='font-bold md:text-4xl text-2xl' start={0} end={23343.012} separator="," duration={3} delay={8} />
                <p className='italic'>Lines of Code</p>
            </div>
            <div className='text-sm md:text-md'>
                <CountUp className='font-bold md:text-4xl text-2xl' start={0} end={18} separator="," duration={4} delay={8} />
                <p className='italic'>Total Projects</p>
            </div>
            <div className='text-sm md:text-md'>
                <CountUp className='font-bold md:text-4xl text-2xl' start={0} end={157612} separator="," duration={5} delay={8} />
                <p className='italic'>Failed Attempts</p>
            </div>
            </div>
        </div>
        </div>

        
        {/*Career*/}
        <div className='md:max-w-[85%] max-w-[95%] m-auto pt-12'>
        <div id='career' className='mb-4'>
            <p>Career</p>
            <h1>Jobs Career</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='bg-gray-600/20 rounded-2xl'>
                <div className='flex gap-8 md:m-8 mt-4 ml-3'>
                    <FaSpaceShuttle size={30} className='text-white'/>
                </div> 
                <h2 className='text-xl md:text-2xl font-bold md:ml-5 ml-3'>Playerself</h2>
                <h3 className='text-md md:text-xl italic text-[#A0A1A0] md:ml-5 ml-3'>Co-Founder</h3>
                <p className='text-xs text-[#A0A1A0] md:ml-5 ml-3'>Jan 2022 - Present</p>
                <ul className='list-disc list-inside mx-4 my-4'>
                    <li className='mx-4 my-4'>Coordination and executive participation in all the departments of the company, including software development, marketing and communications, business development, legal, product and service development.</li>
                </ul>
            </div>
            <div className='bg-gray-600/20 rounded-2xl'>
                <div className='flex gap-8 md:m-8 mt-4 ml-3'>
                    <MdOutlineComputer size={30} className='text-white'/>
                </div> 
                <h2 className='text-xl md:text-2xl font-bold md:ml-5 ml-3'>Virtualsun</h2>
                <h3 className='text-md md:text-xl italic text-[#A0A1A0] md:ml-5 ml-3'>System Administrator</h3>
                <p className='text-xs text-[#A0A1A0] md:ml-5 ml-3'>Oct 2018 - Nov 2020</p>
                <ul className='list-disc list-inside mx-4 my-4'>
                    <li>Installation, configuration, maintenance and administration of customers' IT systems such as computers, servers, routers, switches, backup systems.</li>
                    <li>Skills in installing, configuring, maintaining and administering operating systems such as Windows, Linux and macOS. In particular in the management of the Active Directory of Windows Server</li>
                    <li>Managing virtualization solutions with VMWare ESXi, including creating virtual machines and managing host clusters. Knowledge of physical server migration processes to virtualization with VMWare</li>
                </ul>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Career