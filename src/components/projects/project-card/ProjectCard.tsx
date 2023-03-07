import { Project } from '../../../data/projects.data';
import { Button } from '../../common/Button';
import IFrame from '../../common/Iframe';
import Image from '../../common/Image';
import { ProjectDetails, ProjectLanguage, ProjectLanguagesTools, ProjectPreview, ProjectTool, ProjectWrapper } from './ProjectCard.style';

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  const project = props.project;

  return (
    <ProjectWrapper>

      <ProjectDetails>
        <h3>{project.title}</h3>
        <ProjectLanguagesTools>
          {project.languages.map((language, index) => (
            <ProjectLanguage key={index} src={language.src} alt={language.name} />
          ))}
          {project.tools?.map((tool, index) => (
            <ProjectTool key={index} src={tool.src} alt={tool.name} />
          ))}
        </ProjectLanguagesTools>
        <p>{project.description.split('\n').map((line, index) => <p key={index}>{line}</p>)}</p>
        <div>
          {project.links.website && <Button as="a" href={project.links.website}>Site web</Button>}
          {project.links.file && <Button as="a" href={project.links.file}>Rapport</Button>}
        </div>
      </ProjectDetails>

      <ProjectPreview>
        {project.links.video ? <IFrame src={project.links.video} /> :
          project.links.image && <Image src={project.links.image} alt={project.title} />}
      </ProjectPreview>

    </ProjectWrapper>
  )
}

export default ProjectCard
