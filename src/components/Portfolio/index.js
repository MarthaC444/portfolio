import React from "react";
import { useInView } from "react-intersection-observer";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListImage from "../../assets/editable-list-600x400.jpg";
import BloodMoonImage from "../../assets/blood-moon-600x400.jpg";
import ShaesFarmImage from "../../assets/shaes-farm-600x400.jpg";

import ProjectCard from "../ProjectCard";

const project = [
  {
    title: "List",
    image: ListImage,
    github:
      "https://github.com/MarthaC444/portfolio/blob/main/src/components/EditableList/index.js",
    example: "/List",
    description: "Level up a basic list with editable fields.",
    tech: "React React-Bootstrap",
  },
  {
    title: "Blood Moon Web App",
    image: BloodMoonImage,
    github: "https://github.com/MarthaC444/blood-moon-web",
    example: "https://blood-moon-web.vercel.app/",
    description: "In Progress! Auth pages and MUI installed.",
    tech: "React Next Supabase/PostgreSQL MUI",
  },
  {
    title: "SHAES Farm",
    image: ShaesFarmImage,
    // github: "#",
    example: "https://shaes.farm/poultry/",
    description:
      "Community outreach and marketing site. Based on html template Grayscale.",
    tech: "HTML Javascript CSS",
  },
];

function Portfolio(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <section
      id="portfolio"
      className="pt-5 pb-5"
      style={{ backgroundColor: "#e4e6e7" }}
    >
      <Container className="mt-3">
        <div ref={ref}>
          {inView ?           
          <h2 className="no-wait-fade-in mb-5 text-uppercase fw-bold text-center">
            Portfolio
          </h2> : null}
        </div>
        <Row className="py-3">
          {project.map((project, index) => (
            <ProjectCard key={Symbol(index).toString()} project={project} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
