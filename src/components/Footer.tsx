import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='md:max-w-[85%] max-w-[95%] m-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center py-20'>
            <div className='border-t-2 border-white'>
            <p>© Copyright 2022. All rights are reserved.</p>
            <div className='flex gap-4 md:justify-start justify-start mt-4'>
                <a href="https://github.com/gigiul" target="_black"><AiFillGithub size={30}/></a>
                <a href="https://www.linkedin.com/in/ldalleaste/" target="_black"><AiFillLinkedin size={30}/></a>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Footer