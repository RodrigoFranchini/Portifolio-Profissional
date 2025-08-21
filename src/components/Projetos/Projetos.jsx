import React from "react";
import { FaGithub } from "react-icons/fa";
import { projetos } from "../../config/Config";
import "./Projetos.css";

export default function Projetos() {
  return (
    <section id="projects" className="projetos">
      <header className="projetos__header">
        <h1>Projetos</h1>
        <p>
          Uma vitrine do meu trabalho, destacando minhas habilidades e
          experiência em desenvolvimento back-end.
        </p>
      </header>

      <ul className="projetos__lista">
        {projetos.map((p) => (
          <li key={p.id} className="projeto-card">
            <div className="projeto-card__content">
              <h3 className="projeto-card__title">{p.nome}</h3>
              <p className="projeto-card__desc">{p.descricao}</p>

              {Array.isArray(p.tecnologias) && p.tecnologias.length > 0 && (
                <div className="projeto-card__techs">
                  {p.tecnologias.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {p.github && (
                <a
                  className="btn"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Veja no GitHub <FaGithub />
                </a>
              )}
            </div>

            {p.imagem && (
              <div className="projeto-card__thumb">
                <img src={p.imagem} alt={`Imagem do projeto ${p.nome}`} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
