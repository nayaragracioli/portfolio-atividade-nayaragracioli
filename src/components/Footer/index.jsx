import { user } from "../../data/user";
import styles from "./style.module.css";
import whatsIcon from "../../assets/whatsapp-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from "../../assets/github-icon.png";

// import gihubtIcon from "../../../assets/github-icon.png";

export const Footer = () => {
    return (
        <footer className={styles.flexbox}>

            <h2 className="title3">Contato</h2>
            <div>
                <img src={whatsIcon} alt="Logo do Whatsapp" />
                <img src={linkedinIcon} alt="Logo do LinkedIn" />
                <img src={githubIcon} alt="Logo do GitHub" />
            </div>
            <p className="paragraph">Todos os direitos reservados - {user}</p>


        </footer>
    )
}