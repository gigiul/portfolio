import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {FiCpu} from 'react-icons/fi'
import {BsCodeSlash, BsLightbulb} from 'react-icons/bs'
import {IoDiceOutline} from 'react-icons/io5'
import {CiMonitor} from 'react-icons/ci'
import {BiWorld} from 'react-icons/bi'

const Knowledge = () => {

    const [current, setCurrent] = useState(1);

    const prevSlide = () => {
        setCurrent(current === 1 ? 6 : current - 1);
    }

    const nextSlide = () => {
        setCurrent(current === 6 ? 1 : current + 1);
    }
  
      const renderSwitchData = (current: any) => {
        if(current)
        switch (current) {
            case 1:
                return (<div className='flex flex-col justify-center items-center gap-4 px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center '>
                    <FiCpu size={30} className=''></FiCpu>
                    <h3 className='font-bold uppercase italic'>Technologies</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4 text-center'>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>React/Next</li>
                    <div className="w-[150px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Tailwindcss</li>
                    <div className="w-[150px] h-[10px] shadow-lg rounded-xl bg-slate-400"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>HTML/CSS</li>
                    <div className="w-[120px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Nest</li>
                    <div className="w-[100px] h-[10px] shadow-lg rounded-xl bg-slate-400"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Git</li>
                    <div className="w-[100px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Docker</li>
                    <div className="w-[100px] h-[10px] shadow-lg rounded-xl bg-slate-400"></div>
                    </div>
                </ul>
            </div>);
            case 2:
                return (<div className='flex flex-col justify-center items-center gap-4  px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center '>
                    <BsCodeSlash size={30} className=''></BsCodeSlash>
                    <h3 className='font-bold uppercase italic'>Languages</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4 text-center'>
                <div className='flex flex-col'>
                    <li className='flex justify-start'>Javascript</li>
                    <div className="w-[150px] h-[10px] shadow-lg rounded-xl bg-slate-400"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Typescript</li>
                    <div className="w-[130px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>C & C++</li>
                    <div className="w-[100px] h-[10px] shadow-lg rounded-xl bg-slate-400"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Python</li>
                    <div className="w-[90px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Bash</li>
                    <div className="w-[130px] h-[10px] shadow-lg rounded-xl bg-slate-400"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>SQL</li>
                    <div className="w-[100px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                </ul>
            </div>);
            case 3:
                return (<div className='flex flex-col justify-center items-center gap-4  px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center '>
                    <BsLightbulb size={30} className=''></BsLightbulb>
                    <h3 className='font-bold uppercase italic'>Quality</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4 text-center'>
                <div className='flex flex-col'>
                    <li className='flex justify-start'>Problem Solving</li>
                    <div className="w-[150px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Analitycal Mind</li>
                    <div className="w-[120px] h-[10px] shadow-lg rounded-xl bg-slate-400"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Indipendent Learning</li>
                    <div className="w-[130px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                </ul>
            </div>);
            case 4:
                return (<div className='flex flex-col justify-center items-center gap-4  px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center text-center '>
                    <IoDiceOutline size={30} className=''></IoDiceOutline>
                    <h3 className='font-bold uppercase italic'>Soft Skills</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4'>
                <div className='flex flex-col'>
                    <li className='flex justify-start'>Team Work</li>
                    <div className="w-[150px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Communication</li>
                    <div className="w-[130px] h-[10px] shadow-lg rounded-xl bg-slate-400"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Creativity</li>
                    <div className="w-[130px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                </ul>
            </div>);
            case 5:
                return (<div className='flex flex-col justify-center items-center gap-4  px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center text-center '>
                    <BiWorld size={30} className=''></BiWorld>
                    <h3 className='font-bold uppercase italic'>Languages</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4'>
                <div className='flex flex-col'>
                    <li className='flex justify-start'>Italian</li>
                    <div className="w-[150px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>English</li>
                    <div className="w-[120px] h-[10px] shadow-lg rounded-xl bg-slate-400"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Spanish</li>
                    <div className="w-[60px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                </ul>
            </div>);
            case 6:
                return (<div className='flex flex-col justify-center items-center gap-4  px-16 py-12'>
                <div className='flex gap-1 jusitfy-center items-center text-center '>
                    <CiMonitor size={30} className=''></CiMonitor>
                    <h3 className='font-bold uppercase italic'>Operating Systems</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4'>
                <div className='flex flex-col'>
                    <li className='flex justify-start'>Windows/Windows Server</li>
                    <div className="w-[150px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>MacOS</li>
                    <div className="w-[150px] h-[10px] shadow-lg rounded-xl bg-slate-400"></div>
                    </div>
                    <div className='flex flex-col'>
                    <li className='flex justify-start'>Linux</li>
                    <div className="w-[150px] h-[10px] shadow-lg rounded-xl bg-slate-300"></div>
                    </div>
                </ul>
            </div>);
            default:
                return (<></>);
            }
    }

  return (
    <div id='knwoledge' className='max-w-[1400px] h-[500px] w-full m-auto py-16 px-4 relative group'>
        <div    className='flex justify-center items-center w-full h-[98%] rounded-2xl'/>
            <div className='z-10 absolute top-[50%] right-[50%] left-[0] -translate-x-0  translate-y-[-50%] bg-gray-600/10 rounded-3xl w-full'>
                {renderSwitchData(current)}
            </div>
            <div className='z-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft  onClick={prevSlide} size={30} />
            </div>
            <div className='z-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight  onClick={nextSlide} size={30} />
            </div>
            <div className='flex justify-center items-center mt-4'>
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