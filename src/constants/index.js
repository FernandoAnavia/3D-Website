import { 
    meta, 
    shopify, 
    starbucks, 
    atento, 
    hero,
    blender1,
    blender2,
    game1,
    game2,
    game3,
    game4,
    game5,
    java1,
    java2,
    java3,
    java4,
    java5,
    ml1,
    ml2,
    ml3,
    ml4,
    php1,
    php2,
    php3,
    php4,
    php5,
    php6,
    py1,
    py2,
    py3,
    py4,
    py5,
    py6,
    py7,
    web1,
    web2,
} from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [ //Gold #f7ca16
    {
        imageUrl: sass, //css 1
        name: "Blender",
        type: "Game",
        level: 50,
        background: '#879096',
        description: 'Blender: Intermediate',
    },
    {
        imageUrl: express, //express 2
        name: "Unity",
        type: "Game",
        level: 25,
        background: "#879096",
        description: 'Unity: Intermediate',
    },
    {
        imageUrl: git, //git 3
        name: "Git",
        type: "Version Control",
        level: 35,
        background: "#879096",
        description: 'Git: Intermediate',
    },
    {
        imageUrl: github, //github 4
        name: "GitHub",
        type: "Version Control",
        level: 65,
        background: "#879096",
        description: 'GitHub: Intermediate',
    },
    {
        imageUrl: motion, //html 5
        name: "C++",
        type: "Coding",
        level: 90,
        background: "#ad8a56",
        description: 'C++: Basic',
    },
    {
        imageUrl: redux, //javascript 6
        name: "MySQL",
        type: "Coding",
        level: 40,
        background: "#879096",
        description: 'MySQL: Intermediate',
    },
    {
        imageUrl: mongodb, //mongodb 7
        name: "MongoDB",
        type: "Database",
        level: 60,
        background: "#ad8a56",
        description: 'MongoDB: Basic',
    },
    {
        imageUrl: typescript, //motion 8
        name: "Python",
        type: "Coding",
        level: 40,
        background: "#879096",
        description: 'Python: Intermediate',
    },
    {
        imageUrl: mui, //mui 9
        name: "R",
        type: "Database",
        level: 85,
        background: "#ad8a56",
        description: 'R: Basic',
    },
    {
        imageUrl: react, //nextjs 10
        name: "React",
        type: "Web",
        level: 70,
        background: "#ad8a56",
        description: 'React: Basic',
    },
    {
        imageUrl: nextjs, //nodejs 11
        name: "Java",
        type: "Coding",
        level: 65,
        background: "#879096",
        description: 'Java: Intermediate',
    },
    {
        imageUrl: javascript, //react 12
        name: "JavaScript",
        type: "Web",
        level: 80,
        background: "#879096",
        description: 'JavaScript: Intermediate',
    },
    {
        imageUrl: html, //redux 13
        name: "HTML",
        type: "Web",
        level: 40,
        background: "#879096",
        description: 'HTML: Intermediate',
    },
    {
        imageUrl: css, //sass 14
        name: "CSS",
        type: "Web",
        level: 60,
        background: "#879096",
        description: 'CSS: Intermediate',
    }
];

export const experiences = [
    {
        company_name: "Canbe (Ireland)",
        date: "March 2017 - October 2023",
        icon: starbucks,
        iconBg: "#a3752a",
        roles: [
            {
                title: "Hostels Manager",
                subDate: "February 2023 - October 2023",
                points: [
                    "Overseeing daily operations",
                    "Ensuring policies and quality standards are consistently met",
                    "Addressing queries and complaints offering prompt resolutions",
                    "Balancing weekly financial reports",
                    "Assisting with the recruiting and training of new staff",
                    "Inspection and supervision of the cleanliness quality throughout the buildings",
                    "Carrying out regular stock takes, keeping inventory levels and limiting losses"
                ],          
            },
            {
                title: "Manager Assistant",
                subDate: "May 2022 - February 2023",
                points: [
                    "Monitoring the smooth running of the front desk, ensuring policies are adhered to",
                    "Continually assessing and evaluating procedures, suggesting improvements",
                    "Ensuring the highest level of attention to detail and accuracy from the staff",
                    "Monitoring reservations, ensuring correct input into the system",
                    "Performing reception duties when necessary",
                ],
            },
            {
                title: "Front Desk Receptionist",
                subDate: "February 2018 - May 2022",
                points: [
                    "Welcoming and greeting guests in a warm and friendly way",
                    "Handling general phone and e-mail queries professionally and promptly",
                    "Registering check-ins and check-outs, updating relevant data in the system",
                    "Assisting in house guests with any requests or information necessary",
                    "Charging and recording payments in cash/card, balancing daily financial reports"
                ],
            },
            {
                title: "Cleaner",
                subDate: "March 2017 - February 2018",
                points: [
                    "Accomplishing the cleaning duties to the highest standards",
                    "Reporting maintenance issues",
                    "Having effective communication skills and teamwork",
                    "Providing excellent guest service",
                ],
            },
        ],
    },
    {
        company_name: "Atento (Mexico)",
        date: "January 2007 - September 2016",
        icon: atento,
        iconBg: "#FF5733",
        roles: [
            {
                title: "Supervisor",
                subDate: "February 2012 - September 2016",
                points: [
                    "Managing a team to ensure the metrics required by the company",
                    "Collaborating with other departments to improve service",
                    "Giving periodic reports to demonstrate team progress",
                    "Performing quality evaluations of recorded calls to detect improvements",
                    "Overseeing daily operations",
                    "Developing action plans to overcome team weaknesses",
                ],          
            },
            {
                title: "Quality analyst",
                subDate: "August 2011 - February 2012",
                points: [
                    "Evaluating call recordings to detect any improvements",
                    "Conducting ata analysis and presentations of agent performance",
                    "Providing personalized feedback for the evaluated calls",
                    "Implementing activities to reduce information mistakes",
                ],
            },
            {
                title: "Customer service agent",
                subDate: "January 2007 - August 2011",
                points: [
                    "Answering calls, chats, and emails from the bank's users, providing quality and efficient service focused on customer satisfaction",
                    "Escalating punctual cases to other departments or supervisors",
                    "Maintaining the different metrics of the company such as quality satisfaction, AHT (Average handling time), effective resolution, etc.",
                ],
            },
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-black',
        name: 'BadLuck Game',
        description: 'A 2D game coded in Unity that creates a radom maze, each room has a portal that spawns enemies; the final boss is placed randomly. The game ends when the character is hit 5 times or the boss is destroyed',
        images: [game1, game2, game3, game4, game5],
        link: 'https://github.com/FernandoAnavia/BadLuck_Game',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-orange',
        name: 'Inventory system',
        description: 'This is an application created with python that allows the user to manage an inventory by adding orders, updating the quantity when they are sold and generates reports to represent the income/outcome/demand through the time. It has a login system and allows them to create/modidy/delete users ',
        images: [py1, py2, py3, py4, py5, py6, py7],
        link: 'https://github.com/FernandoAnavia/FinalProject_Inventory_System',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'Animal Recognition',
        description: 'This model written in Python takes a large amount of animal pictures clasified by type, after being trained it is able to clasify correctly around 20% of the test pictures (It will be tuned soon)',
        images: [ml1, ml2, ml3, ml4],
        link: 'https://github.com/FernandoAnavia/ComputerVision_AnimalRecognition',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-red',
        name: 'College Managment System',
        description: 'A Java project to manage college procedures such as register students and enroll them into Branches/Degrees/Courses as well as manage their attendance and grades. It has a login system with 3 different privileges: Admin, Academic and Student. All the information is stored in MySQL',
        images: [java1, java2, java3, java4, java5],
        link: 'https://github.com/FernandoAnavia/JavaVGCollege',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: '3D website',
        description: 'You can fin the code of this very webpage here, it was coded using javaScript, react, three.js and tailwindCSS',
        images: [web1, web2],
        link: 'https://github.com/FernandoAnavia/3D-Website',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Quetzalcoatl 3D model',
        description: 'All the 3D models used on this website were designed by myslef using blender, the most representative one is the quetzalcoatl but, you can find more in my repositories',
        images: [blender1, blender2],
        link: 'https://github.com/FernandoAnavia/Quetzalcoatl',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-red',
        name: 'College managment system (backend)',
        description: 'This interface allows the user to perform CRUD operations (Create, Read, Update and Delete) for college transactions like enrolling students and modules. This is coded in PHP and uses MySQL as data managment',
        images: [php1, php2, php3, php4, php5, php6],
        link: 'https://github.com/FernandoAnavia/CA3_backend_College_CRUD',
    }
];  