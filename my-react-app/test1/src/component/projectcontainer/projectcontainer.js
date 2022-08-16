import uniqid from "uniqid";
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './projectcontainer.css'


const Projectcontainer = ({ project}) => {
  return(
  <div className="project">
    <h3>{project.name}</h3>
    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="projects__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="projects__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
        <a
        href={project.sourceCode}
        area-label='sourceCode'
        className='link link--icon'
        >
        <GitHubIcon/>
        </a>
    )}

        {project.livePreview &&(
            <a
            href={project.livePreview}
            area-label='live preview'
            className='link link--icon'
            >
            <LaunchIcon/>
            </a>
        )}

  </div>
  );
};

export default Projectcontainer;
