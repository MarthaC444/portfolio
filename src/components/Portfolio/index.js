import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListImage from "../../assets/editable-list-600x400.jpg";
import BloodMoonImage from "../../assets/blood-moon-600x400.jpg";

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
    description:
      "In Progress! Audio meditations and exercises, self check-ins, reminders, and data visualizations.",
    tech: "React Next Supabase MUI",
  },
  {
    title: "Blood Moon Mobile App",
    image:
      "https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d",
    github: "",
    example: "",
    description: "Coming soon. Blood Moon mobile app.",
    tech: "React-Native Supabase NativeBase",
  },
];

function Portfolio(props) {
  return (
    <section
      id="portfolio"
      className="pt-5 pb-5"
      style={{ backgroundColor: "#e4e6e7" }}
    >
      <Container className="mt-3">
        <h2 className="mb-5 text-uppercase fw-bold text-center">Portfolio</h2>
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
