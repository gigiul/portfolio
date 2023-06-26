import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../hoc/Wrapper'
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import Skills from './Skills';
import BallCanvas from './canvas/Ball';
import { textures } from '../constants';
import { isMobile } from 'react-device-detect';


const Knowledge = () => {


    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Knowledge</p>
                <h2 className={styles.sectionHeadText}>Skills</h2>
            </motion.div>
            <Skills />
            <div className='flex flex-wrap justify-center gap-10 mt-12'>
                {
                    isMobile ?
                        (
                            textures.map((item, index) => {
                                if (item.name === 'React JS' || item.name === 'Tailwind CSS') {
                                    return (
                                        <div key={item.name} className='w-28 h-28'>
                                            <BallCanvas icon={item.icon} />
                                        </div>
                                    )
                                } else {
                                    return null
                                }
                            })
                        ) :
                        (
                            textures.map((item, index) => {
                                return (
                                    <div key={item.name} className='w-28 h-28'>
                                        <BallCanvas icon={item.icon} />
                                    </div>
                                )
                            }))
                }
            </div>
        </>
    )
}

export default Wrapper(Knowledge, 'knowledge')