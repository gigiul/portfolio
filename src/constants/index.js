import { AiFillPhone } from 'react-icons/ai'
import { GiPresent } from 'react-icons/gi'
import { MdGpsFixed, MdIntegrationInstructions, MdEmail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoGameControllerB } from 'react-icons/io'
import { HiBookOpen } from 'react-icons/hi'


export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'knowledge',
        title: 'Knowledge',
    },
    {
        id: 'career',
        title: 'Career',
    },
    {
        id: 'contact',
        title: 'Contact',
    }
]

export const bioInfos = [
    {
        id: 'birthday',
        text: '14.05.1998',
        icon: GiPresent ,
    },
    {
        id: 'location',
        text: 'Currently in Rome',
        icon: MdGpsFixed,
    },
    {
        id: 'study',
        text: '42 Roma Luiss',
        icon: MdIntegrationInstructions,
    },
    {
        id: 'instruction',
        text: 'Master Degree',
        icon: HiBookOpen,
    },
    {
        id: 'interests',
        text: 'Music, Games, Sports',
        icon: IoLogoGameControllerB,
    },
    {
        id: 'phone',
        text: '+39 342 7473461',
        icon: AiFillPhone,
    },
    {
        id: 'email',
        text: 'luigidalleaste@gmail.com',
        icon: MdEmail,
    },
    {
        id: 'github',
        text: '',
        icon: AiFillGithub,
    },
]