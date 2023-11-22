import styles from "./style.module.css"

export const TechnologyCard = ({ tech }) => {
    return (
        <li className={`card__tech ${styles.flexbox}`}>
            <img src={tech.img} alt={`Tecnologia ${tech.name}`} />
            <h3 className="title4">{tech.name}</h3>
        </li>

    )
}