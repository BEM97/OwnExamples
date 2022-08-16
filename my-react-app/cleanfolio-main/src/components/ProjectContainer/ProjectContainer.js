import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ projects }) => (
  <div className='project'>
    <h3 >{projects.name}</h3>

    <p className='project__description'>{projects.description}</p>
    {projects.stack && (
      <ul className='project__stack'>
        {projects.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {projects.sourceCode && (
      <a
        href={projects.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {projects.livePreview && (
      <a
        href={projects.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
