import React from 'react'
import gigiul from '../assets/gigiul.png'
import { AiFillPhone } from 'react-icons/ai'
import { GiPresent } from 'react-icons/gi'
import { MdGpsFixed, MdIntegrationInstructions, MdEmail } from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
import {HiBookOpen} from 'react-icons/hi'

const About = () => {
    return (
        <div data-name='about'   
             className='max-w-[95%] m-auto mt-8'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='flex justify-center items-center'>
                <img 
                    src={gigiul}
                    alt="/github_image"
                    className='h-[300px] rounded-2xl' />
            </div>
            <div>
                <h3>Biography</h3>
                <h1>Who I am</h1>
                <p className='italic md:text-md text-sm'>Hey my name is Luigi. After graduating in violin I decided to deepen my passion for Tech World.
                    I worked for two years as a system administrator and then continued my training at 42RomaLuiss, an innovative coding school without teachers. To date I am looking for new experiences to continue to grow in this sector.</p>
                <div className='grid md:grid-cols-2 grid-cols-1 mt-4 gap-4'>
                    <div className='flex flex-col gap-4 md:p-4 pl-4'>                            
                        <div className='flex items-center justify-start'>
                            <div className='flex justify-start'>
                                <GiPresent className='mr-1'></GiPresent>
                            </div>
                            <p className='mr-1 font-bold'>Birthday: </p>
                            <p className='md:text-md text-sm text-[#A0A1A0]'>14.05.1998</p>
                        </div>
                        <div className='flex items-center justify-start'>
                            <div className='flex justify-start'>
                                <MdGpsFixed className='mr-1'></MdGpsFixed>
                            </div>
                            <p className='mr-1 font-bold'>Location: </p>
                            <p className='md:text-md text-sm text-[#A0A1A0]'>Actually in Rome</p>
                        </div>
                        <div className='flex items-center justify-start'>
                            <div className='flex justify-start'>
                                <MdIntegrationInstructions className='mr-1'></MdIntegrationInstructions>
                            </div>
                            <p className='mr-1 font-bold'>Study: </p>
                            <p className='md:text-md text-sm text-[#A0A1A0]'>42 Roma Luiss</p>
                        </div>
                        <div className='flex items-center justify-start'>
                            <div className='flex justify-start'>
                                <HiBookOpen className='mr-1'></HiBookOpen>
                            </div>
                            <p className='mr-1 font-bold'>Instruction: </p>
                            <p className='md:text-md text-sm text-[#A0A1A0]'>Master Degree</p>
                        </div>
                    </div>
                    {/*Second column  */}
                    <div className='flex flex-col gap-4 md:pl-0 pl-4'>
                    <div className='flex items-center justify-start'>
                        <div className='flex justify-start'>
                            <IoLogoGameControllerB className='mr-1'></IoLogoGameControllerB>
                        </div>
                        <p className='mr-1 font-bold'>Interests: </p>
                        <p className='md:text-md text-sm text-[#A0A1A0]'>Coding, Games, Music, Soccer</p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <div className='flex justify-start'>
                            <AiFillPhone className='mr-1'></AiFillPhone>
                        </div>
                            <p className='mr-1 font-bold'>Phone: </p>
                            <p className='md:text-md text-sm text-[#A0A1A0]'>+39 3427473461</p>
                        </div>
                        <div className='flex items-center justify-start'>
                        <div className='flex justify-start'>
                            <MdEmail className='mr-1'></MdEmail>
                        </div>
                        <p className='mr-1 font-bold'>Email: </p>
                        <p className='break-all md:text-md text-sm text-[#A0A1A0]'>luigidalleaste@gmail.com</p>
                    </div>
                        <div className='flex items-center justify-start'>
                        <div className='flex justify-start'>
                            <AiFillGithub className='mr-1'></AiFillGithub>
                        </div>
                            <p className='mr-1 font-bold'>Github: </p>
                            <a className='underline md:text-md text-sm text-[#A0A1A0]' href='https://github.com/gigiul' target="_blank">Gigiul</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About

