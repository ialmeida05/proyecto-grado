import React from 'react';
import './App.css';

function Encabezado() {
  return (
    <header className="header-box">
      <h1>Proyecto de Grado- IRENIC</h1>
      <p>Institución Educativa - Colegio San Alberto Magno</p>
    </header>
  );
}

function Presentacion() {
  return (
    <section className="card-box">
      <h2>Chatbot para las Normas de convivencia </h2>
      <p><strong>Estado del Proyecto:</strong> Fase de Desarrollo y Prototipado</p>
      <p>
        Este proyecto surge como respuesta a la necesidad de mejorar la comprension de las normas de convivencia 
      </p>
    </section>
  );
}

function Objetivos() {
  return (
    <section className="card-box">
      <h3>Objetivo General</h3>
      <p>
        Agilizar la comprensión y el cumplimiento de las normas de convivencia mediante un chatbot interactivo que brinde información y orientación a los estudiantes.
      </p>
    </section>
  );
}

// Componente del Reto de Aplicación (ubicado debajo de Objetivos)
function SolucionTecnica() {
  return (
    <section className="card-box">
      <h3>Solución Técnica</h3>
      <p>
        Implementaremos un chatbot interactivo que utilice inteligencia artificial para proporcionar información sobre las normas de convivencia y orientación a los estudiantes.
      </p>
      <h4>Requerimientos Mínimos del Sistema:</h4>
      <ul>
        <li>Chatbot interactivo</li>
        <li>Implementación de las normas de convivencia</li>
        <li>Interfaz web en React para presentación de datos</li>
        <li>Conexión a la red local de la institución</li>
      </ul>
    </section>
  );
}

function Integrantes() {
  return (
    <section className="card-box">
      <h3>Equipo de Trabajo</h3>
      <p>Estudiante: Ignacio Almeida</p>
      <p>Estudiante:Juan Ortega</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="main-container">
      <Encabezado />
      <main>
        <Presentacion />
        <Objetivos />
        <SolucionTecnica />
        <Integrantes />
      </main>
      <footer className="footer-box">
        <p>2026 - Proyecto de Grado Undécimo</p>
      </footer>
    </div>
  );
}