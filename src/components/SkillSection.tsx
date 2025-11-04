import { Col, Row } from "antd";
import React, { useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import "devicon/devicon.min.css";

const LanguageData = [
  {
    id: 1,
    name: "HTML",
    icon: "devicon-html5-plain colored",
  },
  {
    id: 2,
    name: "CSS",
    icon: "devicon-css3-plain colored",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
  {
    id: 4,
    name: "React",
    icon: "devicon-react-original colored",
  },
  {
    id: 5,
    name: "Laravel",
    icon: "devicon-laravel-plain colored",
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain colored",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain colored",
  },
  {
    id: 8,
    name: "Figma",
    icon: "devicon-figma-plain colored",
  },
  {
    id: 9,
    name: "Typescript",
    icon: "devicon-typescript-plain colored",
  },
  {
    id: 10,
    name: "Git",
    icon: "devicon-git-plain colored",
  },
  {
    id: 11,
    name: "GitHub",
    icon: "devicon-github-original colored-white",
  },
];

const LanguageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <ul ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {LanguageData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Row
              gutter={[16, 16]}
            >
              <Col span={24} className="flex justify-center">
                <i
                  className = {`${project.icon} text-7xl hovver:visible text-white transition-all duration-300`}
                  title={project.name}
                />
              </Col>
            </Row>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default LanguageSection;
