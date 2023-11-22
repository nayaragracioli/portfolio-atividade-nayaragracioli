import styles from "./style.module.css";
import portfolio from "../../assets/portfolio.png";

export const Header = () => {
    return (
        <header className={styles.flexbox}>
            <img src={portfolio} alt="Portfólio" />
            <div>
                <p className="label">Sobre</p>
                <p className="label">Stack</p>
                <p className="label">Projetos</p>
            </div>
            <button className="label btn">Contato</button>
        </header>
    )
}