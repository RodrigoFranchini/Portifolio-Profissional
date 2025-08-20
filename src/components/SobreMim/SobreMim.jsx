import './SobreMim.css';
import {profile, sobremim} from "../../config/Config.js";


export default function SobreMim() {
    return (
        <section id = "home">
        <section className="sobre-mim">
            <div className="sobre-mim__imagem">
                <img src="./././public/images/HomeFoto.png" alt="Rodrigo Franchini" />
            </div>
            <div className="sobre-mim__texto">
                <h2 className="sobre-mim__titulo">{profile.name}</h2>
                <p className="sobre-mim__subtitulo">Sobre Mim</p>
                <p>{sobremim.texto1}</p>
                <p>{sobremim.texto2}</p>
            </div>
        </section>
        </section>
    );
}
