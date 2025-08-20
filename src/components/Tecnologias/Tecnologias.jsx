import './Tecnologias.css';  // Crie o arquivo CSS conforme abaixo
import { tecnologias } from "../../config/Config.js";  // Presumo que você tenha as tecnologias definidas aqui, ou defina-as diretamente no arquivo

export default function Tecnologias() {
    return (
        <section className="tecnologias">
            <h2 className="tecnologias__titulo">Tecnologias</h2>
            <div className="tecnologias__cards">
                {tecnologias.map((tecnologia, index) => (
                    <div className="tecnologias__card" key={index}>
                        <h3>{tecnologia.name}</h3>
                        <p>{tecnologia.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
