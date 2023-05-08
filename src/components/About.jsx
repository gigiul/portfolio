import React from 'react'
import gigiul from '../assets/gigiul.png'
import { Wrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { bioInfos } from "../constants";





const About = () => {
    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Biography</p>
                <h2 className={styles.sectionHeadText}>Who I am.</h2>
            </motion.div>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='flex justify-start xl:items-center items-start'>
                    <img
                        src={gigiul}
                        alt="/github_image"
                        className='h-[300px] rounded-2xl' />
                </div>
                <div>
                    <p className='italic md:text-xl text-sm mt-4 bg-clip-text bg-gradient-to-r from-[#915EFF] to-pink-600 text-transparent '>After graduating in violin, I decided to deepen my passion for the Tech world. I worked for two years as a system administrator and then continued my education at 42RomaLuiss, an innovative teacherless coding school. To this day I am still looking for new experiences to continue growing in this field.
                    </p>
                    <div className="flex xl:flex-row flex-col mt-8 gap-4">
                        <div className="w-full flex flex-col gap-4 whitespace-nowrap">
                            {bioInfos.slice(0, Math.ceil(bioInfos.length / 2)).map((info, index) => (
                                <motion.div key={index} variants={fadeIn('right', 'spring', null, '1.5')} className="flex">
                                    {<info.icon className='w-5 h-5 mr-2' />}
                                    <p className="capitalize font-bold ">{info.id}: &nbsp;</p>
                                    <p className="text-secondary">{info.text}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="w-full flex flex-col gap-4 whitespace-nowrap">
                            {bioInfos.slice(Math.ceil(bioInfos.length / 2)).map((info, index) => (
                                <motion.div key={index} variants={fadeIn('left', 'spring', null, '1.5')} className="flex">
                                    {<info.icon className='w-5 h-5 mr-2' />}
                                    <p className="capitalize font-bold ">{info.id}: &nbsp;</p>
                                    { info.id === "github" ? <a className='text-secondary underline hover:text-white' href={info.text} target='_blank'>Gigiul</a> :  info.id === "email" ? <a className='text-secondary underline hover:text-white' href={info.text}>Mailto</a> : <p className="text-secondary" >{info.text}</p>}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapper(About, "about")