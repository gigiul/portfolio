import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {FiCpu} from 'react-icons/fi'
import {BsCodeSlash, BsLightbulb} from 'react-icons/bs'
import {IoDiceOutline} from 'react-icons/io5'
import {GrLanguage, GrSystem} from 'react-icons/gr'
import {CiMonitor} from 'react-icons/ci'
import {BiWorld} from 'react-icons/bi'

const Knowledge = () => {
    const slides: typeof Array[] = [];

    const [current, setCurrent] = useState(1);

    const prevSlide = () => {
        setCurrent(current === 1 ? 6 : current - 1);
    }

    const nextSlide = () => {
        setCurrent(current === 6 ? 1 : current + 1);
    }

    const goToSlide = (slideIndex: any) => {
        setCurrent(slideIndex);
      };

    
      const renderSwitchData = (current: any) => {

        console.log("switch current", current);
        if(current)
        switch (current) {
            case 1:
                return (<div className='flex flex-col justify-center items-center gap-4 px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center '>
                    <FiCpu size={30} className=''></FiCpu>
                    <h3 className='font-bold uppercase italic'>Technologies</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4 text-center'>
                    <li>React/Next</li>
                    <li>Nest</li>
                    <li>Tailwind</li>
                    <li>HTML/CSS</li>
                    <li>Git</li>
                    <li>Docker</li>
                </ul>
            </div>);
            case 2:
                return (<div className='flex flex-col justify-center items-center gap-4  px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center '>
                    <BsCodeSlash size={30} className=''></BsCodeSlash>
                    <h3 className='font-bold uppercase italic'>Languages</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4 text-center'>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>C & C++</li>
                    <li>Python</li>
                    <li>Bash</li>
                    <li>SQL</li>
                </ul>
            </div>);
            case 3:
                return (<div className='flex flex-col justify-center items-center gap-4  px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center '>
                    <BsLightbulb size={30} className=''></BsLightbulb>
                    <h3 className='font-bold uppercase italic'>Quality</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4 text-center'>
                    <li>Problem Solving</li>
                    <li>Analytical Mind</li>
                    <li>Indipendent Learning</li>
                </ul>
            </div>);
            case 4:
                return (<div className='flex flex-col justify-center items-center gap-4  px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center text-center '>
                    <IoDiceOutline size={30} className=''></IoDiceOutline>
                    <h3 className='font-bold uppercase italic'>Soft Skills</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4'>
                    <li>Team Work</li>
                    <li>Communication</li>
                    <li>Creativity</li>
                </ul>
            </div>);
            case 5:
                return (<div className='flex flex-col justify-center items-center gap-4  px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center text-center '>
                    <BiWorld size={30} className=''></BiWorld>
                    <h3 className='font-bold uppercase italic'>Languages</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4'>
                    <li>Italian</li>
                    <li>English</li>
                    <li>Spanish</li>
                </ul>
            </div>);
            case 6:
                return (<div className='flex flex-col justify-center items-center gap-4  px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center text-center '>
                    <CiMonitor size={30} className=''></CiMonitor>
                    <h3 className='font-bold uppercase italic'>Operating Systems</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4'>
                    <li>Windows/Windows Server</li>
                    <li>MacOS</li>
                    <li>Linux</li>
                </ul>
            </div>);
            default:
                return (<></>);
            }
    }

    console.log("current: ", current)

  return (
    <div className='max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group'>
        <div    className='flex justify-center items-center w-full h-[95%] rounded-2xl'/>
            <div className='z-10 absolute top-[50%] right-[50%] left-[0] -translate-x-0  translate-y-[-50%] bg-gray-600/10 rounded-3xl w-full'>
                {renderSwitchData(current)}
            </div>
            <div className='z-20 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft  onClick={prevSlide} size={30} />
            </div>
            <div className='z-20 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight  onClick={nextSlide} size={30} />
            </div>
            <div className='flex justify-center items-center'>
                    <div className='text-2xl cursor-pointer hover:text-white/50' onClick={() => setCurrent(1)} >
                        <RxDotFilled />
                    </div>
                    <div className='text-2xl cursor-pointer hover:text-white/50' onClick={() => setCurrent(2)} >
                        <RxDotFilled />
                    </div>
                    <div className='text-2xl cursor-pointer hover:text-white/50' onClick={() => setCurrent(3)} >
                        <RxDotFilled />
                    </div>
                    <div className='text-2xl cursor-pointer hover:text-white/50' onClick={() => setCurrent(4)} >
                        <RxDotFilled />
                    </div>
                    <div className='text-2xl cursor-pointer hover:text-white/50' onClick={() => setCurrent(5)} >
                        <RxDotFilled />
                    </div>
                    <div className='text-2xl cursor-pointer hover:text-white/50' onClick={() => setCurrent(6)} >
                        <RxDotFilled />
            </div>
        </div>
    </div>
  )
}

export default Knowledge