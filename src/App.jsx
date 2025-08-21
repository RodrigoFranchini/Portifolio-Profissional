import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import SobreMim from "./components/SobreMim/SobreMim.jsx";
import Tecnologias from "./components/Tecnologias/Tecnologias.jsx";
import Projetos from './components/Projetos/Projetos.jsx';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Sidebar />
      <main style={{ marginLeft: 72, padding: "24px" }}>
          <SobreMim />
          <Tecnologias />
          <Projetos />
      </main>
    </>
  );
}
