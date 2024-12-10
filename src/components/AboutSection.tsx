"use client"
import React, { useState, useTransition } from "react"
import Image from "next/image"
import {motion} from "framer-motion"

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="flex ">
                <span className="font-bold text-[#5d96eb]">Front-end:</span>
                <ul className="list-disc pt-8 pr-3">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>NextJS</li>
                </ul>
                <span className="font-bold text-[#5d96eb]">Back-end:</span>
                <ul className="list-disc pt-8">
                    <li>PHP</li>
                    <li>Larvel</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                </ul>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>BKACAD Academy of Technology</li>
                <li>GPA: 3.13 (current)</li>
            </ul>
        )
    },
    {
        title: "Soft skills",
        id: "soft_skills",
        content: (
            <ul className="list-disc pl-2">
                <li>English communication</li>
                <li>Teamwork skills</li>
                <li>Hard-working</li>
            </ul>
        )
    }
]

const variants = {
    default: { width: 0 },
    active: {width: "calc(100% - 0.75rem"}
}

const TabButton = ({active, selectTab, children}:any) => {
    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
    return(
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children} 
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="p-1 bg-blue-500 mt-2 mr-3">
            </motion.div>
        </button>
    )
}

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTrasition]:any = useTransition();
    
    const handleTabChange = (id:any) => {
        startTrasition(() => {
            setTab(id)
        })
    }

    return(
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 lg:items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" width={500} height={500} className="rounded-xl" alt={"about image"}/>
                <div className="flex flex-col h-full mt-4 md:mt-10 text-justify">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-base xl:text-lg">
                        Motivated and detail-oriented Fullstack Website Developer with
                        a strong foundation in both front-end andback-end development. 
                        Proficient in building dynamic and responsive websites using 
                        modern web technologies, including HTML, CSS, JavaScript, and 
                        framework such as React. Skilled in database management and 
                        deploying web applications. Eager to apply knowledge in real-world
                        projects and continue learning cutting-edge technologies. 
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                            >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                            >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("soft_skills")}
                            active={tab === "soft_skills"}
                            >
                            {" "}
                            Soft Skills{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection