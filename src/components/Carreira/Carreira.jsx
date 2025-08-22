import React from "react";
import { carreira } from "../../config/Config";
import "./Carreira.css";

export default function Carreira() {
  return (
    <section id="career" className="carreira">
      <header className="carreira__header">
        <h1>Carreira</h1>
      </header>

      <ul className="carreira__lista">
        {carreira.map((exp) => (
          <li key={exp.id} className="carreira__item">
            <div className="carreira__item-header">
              <h3 className="carreira__cargo">{exp.cargo}</h3>
              <span className="carreira__periodo">{exp.periodo}</span>
            </div>
            <h4 className="carreira__empresa">{exp.empresa}</h4>
            <p className="carreira__descricao">{exp.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
