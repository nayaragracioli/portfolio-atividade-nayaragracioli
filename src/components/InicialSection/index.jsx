import { username } from "../../data/user";
import styles from "./style.module.css";
import computer from "../../assets/banner-img.png";


export const InicialSection = () => {
    return (
        <section className={`container ${styles.flexbox}`}>
            <div className={styles.flexbox__div}>
                <h3 className="name">{username}</h3>
                <h1 className="title1">Bem vindo ao
                    meu portfólio</h1>
                <p className="paragraph">Uma frase interessante sobre mim</p>
                <button className="label btn">Saiba mais</button>
            </div>
            <img src={computer} alt="Imagem de Computador" />
        </section>
    )
}