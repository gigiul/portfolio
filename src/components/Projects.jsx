import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { Wrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  github_link,
  iframe,
  image
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        className='bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full'
      >
        <div className='relative w-full'>
          {iframe ?

            <iframe
              className='md:opacity-50 hover:opacity-100 border-2 rounded-md'
              src={iframe}
              width="100%"
              height="600px"
            /> :
            <img
              src={image} className="object-cover h-[600px]" />
          }
          <div className='absolute h-[3rem] inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(github_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <div className="flex justify-between">
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <button onClick={() => window.open(iframe, "_blank")} className="rounded-2xl py-1 px-6 border-white border-2 font-semibold hover:text-black hover:bg-white">
              Visit
            </button>
          </div>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex md:flex-wrap md:flex-row flex-col justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <motion.div variants={textVariant()}>
        <div className='flex flex-col md:flex-row justify-between items-center py-20'>
          <div className='flex flex-col justify-start'>
            <div className='p-2 mb-4 border-2 border-white rounded-xl text-center'>
              <a href='#about'><p>Contact Me</p></a>
            </div>
            <div className='border-t-2 border-white'>
              <p>Updated on may 2023</p>
              <div className='flex gap-4 md:justify-start justify-center mt-4'>
                <a href="https://github.com/gigiul" target="_black"><AiFillGithub size={30} /></a>
                <a href="https://www.linkedin.com/in/ldalleaste/" target="_black"><AiFillLinkedin size={30} /></a>
              </div>
            </div>
          </div>
        </div>
       </motion.div>
    </>
  );
};

export default Wrapper(Projects, "projects");
