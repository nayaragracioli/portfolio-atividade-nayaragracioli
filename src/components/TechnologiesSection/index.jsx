import { technologies } from "../../data/technologies"
import { TechnologyCard } from "./TechnologyCard"
import styles from "./style.module.css"


export const TechnologiesSection = () => {
    return (
        <section className={`container ${styles.flexbox}`}>
            <h2 className="title2">Tecnologias</h2>
            <ul>
                {technologies.map(tech => {
                    return (
                        <TechnologyCard key={tech.id} tech={tech}/>
                    )
                })}
            </ul>
        </section>
    )
}