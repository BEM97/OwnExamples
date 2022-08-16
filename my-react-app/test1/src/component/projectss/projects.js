import { projects } from "../portfolio";
import Projectcontainer from "../projectcontainer/projectcontainer";
import uniqid from "uniqid";
import "./projects.css";

const Projects = () => {
  if (!projects.length) return null;
  return (
    <section id="projects" className="sectionp projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <Projectcontainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
