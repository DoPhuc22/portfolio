import { Col, Row } from "antd"
import React, { useRef, useState } from "react"
import ProjectTag from "./ProjectTag"
import { animate, motion, useInView } from "framer-motion"
import ProjectCard from "./ProjectCard"

const ProjectData = [
    {
        id: 1,
        title: "Cinema management website (Laravel)",
        description: "",
        image: "./images/projects/Project_2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DoPhuc22/project2.git",
        previewUrl: "/",
    },
    {
      id: 2,
      title: "Crud React",
      description: "Updating ...",
      image: "./images/projects/Crud_React.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/DoPhuc22/React-CRUD.git",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Mobile Game",
      description: "",
      image: "./images/projects/Mobile.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/DoPhuc22/Mobile-game.git",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Furniture Shop (PHP, MySQL)",
      description: "",
      image: "./images/projects/Project_1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/DoPhuc22/Project1.git",
      previewUrl: "/",
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const handleTagChange = (newTag:any) => {
        setTag(newTag);
    }

    const filteredProjects = ProjectData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }
    return(
        <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
    )
}

export default ProjectSection