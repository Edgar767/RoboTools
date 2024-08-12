import { useEffect } from 'react';
import FloatingBlocks from '../../Components/Animation/FloatingBlocks';

const RTSteamAcademy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <FloatingBlocks />
      <div className="relative z-10">
        <h4 className="title color-variation-1 mt-8 mb-20 text-center text-5xl font-extrabold">LA MEJOR MANERA DE ENSEÑAR ROBOTICA</h4>
        
        <h4 className="title color-variation-1 mt-8 mb-20 text-center">
          <span className="text-3xl font-extrabold">Dentro de RT STEAM Academy </span>
          <span className="text-2xl font-semibold">sus profesores tendran herramientas necesarias para poner en accion interesantes y divertidos proyectos de robotica, tecnologia y programacion</span>
        </h4>

        <h4 className="title color-variation-1 mt-8 mb-20 text-center">
          <span className="text-3xl font-extrabold">15 Años de Experiencia </span>
          <span className="text-2xl font-semibold">en el diseño de programas, cursos y </span>
          <span className="text-3xl font-extrabold">talleres educativos con enfoque STEAM</span>
        </h4>

        <h4 className="title color-variation-1 mt-8 mb-20 text-center text-5xl font-extrabold">CARACTERISTICAS DE RT STEAM ACADEMY</h4>
        <div className=''>
          <ul className="steps steps-vertical">
            <li className="step step-primary">Rubricas de Evaluacion Basada en Competencias</li>
            <li className="step step-secondary">Evaluaciones Parciales y Finales por grado escolar</li>
            <li className="step step-accent">Motiva y mejora el engagment de tus alumnos otorgando insignias conforme van avanzando</li>
            <li className="step step-error">Monitorea el avance y progreso de cada alumno y genera un reporte de su evaluacion</li>
            <li className="step step-warning">Generador de constancias de meritos y logros ligado a las insignias obtenidas durante el ciclo escolar</li>
          </ul>
        </div>
        
        <h4 className="title color-variation-1 mt-8 mb-5 text-center text-5xl font-extrabold">¿Que encontraras en</h4>
        <h4 className="title color-variation-1 mt-8 mb-20 text-center text-5xl font-extrabold">RT STEAM ACADEMY?</h4>
        <div className=''>
          <ul className="steps steps-vertical">
            <li className="step step-primary">Sesiones paso a paso usando la Metodologia de las 5´C y el aprendizaje basado en proyectos (ABP)</li>
            <li className="step step-secondary">Videos, Presentaciones y otras herramientas audiovisuales para contextualizar la clase</li>
            <li className="step step-accent">Manuales de Construccion paso a paso</li>
            <li className="step step-error">Programacion Ejemplo</li>
            <li className="step step-warning">Retos y Desafios</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RTSteamAcademy;