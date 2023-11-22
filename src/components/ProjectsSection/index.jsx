import { projects } from "../../data/projects"
import { ProjectCard } from "./ProjectCard"
import styles from "./style.module.css"

export const ProjectsSection = () => {
   
    return (
        <section className={`container ${styles.flexbox}`}>
            <h2 className="title3">Projetos</h2>
            <ul>
                {projects.map(project => {
                    return (
                        <ProjectCard key={project.id} project={project}/>
                    )
                })}
            </ul>
        </section>
    )
}