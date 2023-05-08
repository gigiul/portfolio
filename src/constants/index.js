import { AiFillPhone } from 'react-icons/ai'
import { GiPresent } from 'react-icons/gi'
import { MdGpsFixed, MdIntegrationInstructions, MdEmail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoGameControllerB } from 'react-icons/io'
import { HiBookOpen } from 'react-icons/hi'
import { BsCodeSlash, BsLightbulb } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FiCpu } from 'react-icons/fi'
import { IoDiceOutline } from 'react-icons/io5'
import { CiMonitor } from 'react-icons/ci'
import { BiWorld } from 'react-icons/bi'

import {
    //textures
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    bootstrap,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    //experiences
    virtualsun,
    playerself,
    mrs,
} from '../assets'


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
        id: 'projects',
        title: 'Projects',
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
        icon: GiPresent,
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
        text: 'mailto:luigidalleaste@gmail.com',
        icon: MdEmail,
    },
    {
        id: 'github',
        text: 'https://github.com/gigiul',
        icon: AiFillGithub,
    },
]

export const knowledge = [
    {
        id: 1,
        icon: FiCpu,
        title: "Technologies",
        items: [
            { label: "React/Next", width: "150" },
            { label: "Tailwindcss", width: "150" },
            { label: "Bootstrap", width: "100" },
            { label: "HTML/CSS", width: "120" },
            { label: "Node/Websocket", width: "110" },
            { label: "Git", width: "100" },
            { label: "Docker", width: "100" },
        ],
    },
    {
        id: 2,
        icon: BsCodeSlash,
        title: "Languages",
        items: [
            { label: "Javascript", width: "130" },
            { label: "Typescript", width: "100" },
            { label: "C++", width: "70" },
            { label: "C", width: "90" },
            { label: "Python", width: "80" },
            { label: "Bash", width: "100" },
            { label: "SQL", width: "120" },
        ],
    },
    {
        id: 3,
        icon: BsLightbulb,
        title: "Quality",
        items: [
            { label: "Problem Solving", width: "150" },
            { label: "Analytical Mind", width: "120" },
            { label: "Independent Learning", width: "130" },
        ],
    },
    {
        id: 4,
        icon: IoDiceOutline,
        title: 'Soft Skills',
        items: [
            { label: 'Team Work', width: 150 },
            { label: 'Communication', width: 130 },
            { label: 'Creativity', width: 130 },
        ]
    },
    {
        id: 5,
        icon: CiMonitor,
        title: 'Systems',
        items: [
            { label: 'Windows', value: 100 },
            { label: 'Windows Server', value: 90 },
            { label: 'Linux', value: 70 },
            { label: 'MacOS', value: 90 },
        ]
    },
    {
        id: 6,
        icon: BiWorld,
        title: 'Languages',
        items: [
            { label: 'Italian', width: 150 },
            { label: 'English', width: 120 },
            { label: 'Spanish', width: 90 },
        ]
    },
];

export const textures = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap CSS",
        icon: bootstrap,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
/*     {
        name: "MongoDB",
        icon: mongodb,
    }, */
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

export const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Modular Radar System (Remote)",
      icon: mrs,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
          "Developing and maintaining web applications for internal purpose using React.js and Node.js.",
          "Developing Front/Backend code for R&D projects that interact with radars technology.",
          "Main CSS framework used: BootstrapCSS",
          "Main Backend library used: WS",
      ],
  },
    {
        title: "Developer & Operations Manager",
        company_name: "Playerself",
        icon: playerself ,
        iconBg: "#383E56",
        date: "Jan 2022 - Present",
        points: [
          "Coordinating and participating in executive-level activities across all departments of the company.",
          "Leading and supporting software development initiatives.",
          "Overseeing marketing and communications efforts.",
          "Supporting business development activities.",
          "Deciding and supporting product/service development"
        ],
      },
    {
        title: "System Administrator",
        company_name: "Virtualsun",
        icon: virtualsun,
        iconBg: "#383E56",
        date: "Oct 2018 - Nov 2020",
        points: [
          "Installation, configuration, maintenance and administration of customers' IT systems such as computers, servers, routers, switches, backup systems.",
          "Skills in installing, configuring, maintaining and administering operating systems such as Windows, Linux and macOS. In particular in the management of the Active Directory of Windows Server",
          "Managing virtualization solutions with VMWare ESXi, including creating virtual machines and managing host clusters. Knowledge of physical server migration processes to virtualization with VMWare",
        ],
      },
];

export const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: null,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: null,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: null,
      source_code_link: "https://github.com/",
    },
  ];