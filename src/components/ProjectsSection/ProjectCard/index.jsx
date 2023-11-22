import styles from "./style.module.css";
import gitIcon from "../../../assets/git-icon.png"


export const ProjectCard = ({ project }) => {
    return (
        <li className={`card__projects ${styles.flexbox}`}>
            <div className={styles.flexbox__div}>
                <h3 className="title4">{project.name}</h3>
                <p className="paragraph">{project.description}</p>
                <a className="link" href="#">Saiba mais</a>
            </div>
            <div className={styles.flexbox__img}>
                <img src={gitIcon} alt="Logo do GitHub" />
            </div>
        </li>
    )
}