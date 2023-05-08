import React, { useEffect, useRef, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Wrapper from '../hoc/Wrapper'
import { knowledge } from '../constants';
import { motion } from "framer-motion";
import { textVariant, barVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";


const Skills = () => {

    const timeoutRef = useRef(null);
    const [current, setCurrent] = useState(1);

    const prevSlide = () => {
        setCurrent(current === 1 ? 6 : current - 1);
        clearTimeout(timeoutRef.current);
    }

    const nextSlide = () => {
        setCurrent(current === 6 ? 1 : current + 1);
        clearTimeout(timeoutRef.current);
    }

    function handleClick(index) {
        setCurrent(index);
        clearTimeout(timeoutRef.current);
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrent(current === 6 ? 1 : current + 1);
        }, 8000);
        timeoutRef.current = timeoutId;
    }, [current])

    const renderSwitchData = (current) => {
        const data = knowledge.find((item) => item.id === current);
        return (
            <div className='flex flex-col justify-center items-center gap-4 px-16 py-12'>
                <div className='flex gap-1 justify-center items-center '>
                    {<data.icon className='w-8 h-8' />}
                    <h3 className='font-bold text-2xl uppercase italic'>{data.title}</h3>
                </div>
                <ul className='flex flex-col gap-1 mt-4 text-center'>
                    {data?.items?.map((item, index) => (
                        <div className='flex flex-col' key={index}>
                            <li className='flex justify-start whitespace-nowrap'>{item.label}</li>
                            <div
                                className={`h-[10px] shadow-lg rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
                                style={{ width: `${item.width}%` }}
                            />
                        </div>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <>
            <div className='z-10 h-[400px] w-full bg-gray-600/10 rounded-3xl relative'>
                <motion.div className='xl:mr-0 mr-12' variants={fadeIn('up', 'spring', null, '2.5')}>
                    {renderSwitchData(current)}
                </motion.div>
                <div className='z-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] xl:left-24 left-0 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className='z-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] xl:right-24 right-0 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>
            <div className='flex justify-center items-center mt-4'>
                {
                    knowledge.map((item, index) => (
                        <div key={index} className={`text-2xl cursor-pointer ${current === index + 1 ? 'text-white' : 'text-white/50'}  hover:text-white`} onClick={() => handleClick(index + 1)} >
                            <RxDotFilled className='w-8 h-8' />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Skills