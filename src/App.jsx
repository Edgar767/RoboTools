import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Inicio from './Pages/Inicio';
import Nosotros from './Pages/Nosotros';
import Contacto from './Pages/Contacto';
import Footer from './Components/Footer';
import ProgramasEscolares from './Pages/ProgramasEscolares/ProgramasEscolares';
import CursosRobotools from './Pages/CursosRobotools/CursosRobotools';
import RTSteamAcademy from './Pages/RTSteamAcademy/RTSteamAcademy';
import SalasInteractivas from './Pages/SalasInteractivas/SalasInteractivas';
import Productos from './Pages/Productos/Productos';
import Tienda from './Pages/Tienda';
import Eventos from './Pages/Eventos';
import Noticias from './Pages/Noticias';
import Preescolar from './Pages/ProgramasEscolares/Preescolar/Preescolar';
import Primaria from './Pages/ProgramasEscolares/Primaria/Primaria';
import Secundaria from './Pages/ProgramasEscolares/Secundaria/Secundaria';
import Robotica from './Pages/ProgramasEscolares/Primaria/Robotica/Robotica';
import LegoEducation from './Pages/ProgramasEscolares/Primaria/Robotica/LegoEducation';
import Microbit from './Pages/ProgramasEscolares/Primaria/Robotica/Microbit';
import MojoRT from './Pages/ProgramasEscolares/Primaria/Robotica/MojoRT';
import Aeronautica from './Pages/ProgramasEscolares/Primaria/Aeronautica/Aeronautica';
import Cohetes from './Pages/ProgramasEscolares/Primaria/Aeronautica/Cohetes';
import Drones from './Pages/ProgramasEscolares/Primaria/Aeronautica/Drones';
import RealidadVirtual from './Pages/ProgramasEscolares/Primaria/Realidad_Virtual/RealidadVirtual';
import Breakout from './Pages/ProgramasEscolares/Primaria/Breakout/Breakout';
import RoboticaSec from './Pages/ProgramasEscolares/Secundaria/RoboticaSec/RoboticaSec';
import LegoEducationSec from './Pages/ProgramasEscolares/Secundaria/RoboticaSec/LegoEducationSec';
import MicrobitSec from './Pages/ProgramasEscolares/Secundaria/RoboticaSec/MicrobitSec';
import AeronauticaSec from './Pages/ProgramasEscolares/Secundaria/AeronauticaSec/AeronauticaSec';
import CohetesSec from './Pages/ProgramasEscolares/Secundaria/AeronauticaSec/CohetesSec';
import DronesSec from './Pages/ProgramasEscolares/Secundaria/AeronauticaSec/DronesSec';
import RealidadVirtualSec from './Pages/ProgramasEscolares/Secundaria/Realidad_VirtualSec/RealidadVirtualSec';
import BreakoutSec from './Pages/ProgramasEscolares/Secundaria/BreakoutSec/BreakoutSec';
import CursoSteam from './Pages/CursosRobotools/CursoSteam';
import HorariosCostos from './Pages/CursosRobotools/HorariosCostos';
import Convenios from './Pages/CursosRobotools/Convenios';
import AgendarClase from './Pages/CursosRobotools/AgendarClase';
import RecorridoVirtual from './Pages/CursosRobotools/RecorridoVirtual';
import Ingenius from './Pages/SalasInteractivas/Ingenius';
import Sensoria from './Pages/SalasInteractivas/Sensoria';
import LegoProductos from './Pages/Productos/ProductosRobotica/LegoProductos';
import QoboProductos from './Pages/Productos/ProductosRobotica/QoboProductos';
import Next20Productos from './Pages/Productos/ProductosRobotica/Next20Productos';
import MicrobitProductos from './Pages/Productos/ProductosRobotica/MicrobitProductos';
import CrowbitsProductos from './Pages/Productos/ProductosRobotica/CrowbitsProductos';
import CrowtailsProductos from './Pages/Productos/ProductosRobotica/CrowtailsProductos';
import MojoRTProductos from './Pages/Productos/ProductosRobotica/MojoRTProductos';
import DronesProductos from './Pages/Productos/ProductosAeronautica/DronesProductos';
import CoheteBasicoProductos from './Pages/Productos/ProductosAeronautica/CoheteBasicoProductos';
import CoheteAvanzadoProductos from './Pages/Productos/ProductosAeronautica/CoheteAvanzadoProductos';
import VisoresProductos from './Pages/Productos/ProductosRealidadVirtual/VisoresProductos';
import MergeCubeProductos from './Pages/Productos/ProductosRealidadVirtual/MergeCubeProductos';
import KitMergeProductos from './Pages/Productos/ProductosRealidadVirtual/KitMergeProductos';

const App = () => {
  return (
      <Router>
          <div>
              <Navbar /> {/* Mostrar la Navbar en todas las páginas */}
              <Routes>
                  <Route path="/" element={<Navigate to="/inicio" />} />
                  <Route path="/inicio" element={<Inicio />} />
                  <Route path="/nosotros" element={<Nosotros />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="/programasescolares" element={<ProgramasEscolares />} />
                  <Route path="/cursosrobotools" element={<CursosRobotools />} />
                  <Route path="/rtsteamacademy" element={<RTSteamAcademy />} />
                  <Route path="/salasinteractivas" element={<SalasInteractivas />} />
                  <Route path="/productos" element={<Productos />} />
                  <Route path="/tienda" element={<Tienda />} />
                  <Route path="/eventos" element={<Eventos />} />
                  <Route path="/noticias" element={<Noticias />} />
                  <Route path="/preescolar" element={<Preescolar />} />
                  <Route path="/primaria" element={<Primaria />} />
                  <Route path="/secundaria" element={<Secundaria />} />
                  <Route path="/robotica" element={<Robotica />} />
                  <Route path="/legoeducation" element={<LegoEducation />} />
                  <Route path="/microbit" element={<Microbit />} />
                  <Route path="/mojort" element={<MojoRT />} />
                  <Route path="/aeronautica" element={<Aeronautica />} />
                  <Route path="/cohetes" element={<Cohetes />} />
                  <Route path="/drones" element={<Drones />} />
                  <Route path="/realidadvirtual" element={<RealidadVirtual />} />
                  <Route path="/breakout" element={<Breakout />} />
                  <Route path="/roboticasec" element={<RoboticaSec />} />
                  <Route path="/legoeducationsec" element={<LegoEducationSec />} />
                  <Route path="/microbitsec" element={<MicrobitSec />} />
                  <Route path="/aeronauticasec" element={<AeronauticaSec />} />
                  <Route path="/cohetessec" element={<CohetesSec />} />
                  <Route path="/dronessec" element={<DronesSec />} />
                  <Route path="/realidadvirtualsec" element={<RealidadVirtualSec />} />
                  <Route path="/breakoutsec" element={<BreakoutSec />} />
                  <Route path="/cursosteam" element={<CursoSteam />} />
                  <Route path="/horarioscostos" element={<HorariosCostos />} />
                  <Route path="/convenios" element={<Convenios />} />
                  <Route path="/agendarclase" element={<AgendarClase />} />
                  <Route path="/recorridovirtual" element={<RecorridoVirtual />} />
                  <Route path="/ingenius" element={<Ingenius />} />
                  <Route path="/sensoria" element={<Sensoria />} />
                  <Route path="/legoproductos" element={<LegoProductos />} />
                  <Route path="/qoboproductos" element={<QoboProductos />} />
                  <Route path="/next20productos" element={<Next20Productos />} />
                  <Route path="/microbitproductos" element={<MicrobitProductos />} />
                  <Route path="/crowbitsproductos" element={<CrowbitsProductos />} />
                  <Route path="/crowtailsproductos" element={<CrowtailsProductos />} />
                  <Route path="/mojortproductos" element={<MojoRTProductos />} />
                  <Route path="/dronesproductos" element={<DronesProductos />} />
                  <Route path="/cohetebasicoproductos" element={<CoheteBasicoProductos />} />
                  <Route path="/coheteavanzadoproductos" element={<CoheteAvanzadoProductos />} />
                  <Route path="/visoresproductos" element={<VisoresProductos />} />
                  <Route path="/mergecubeproductos" element={<MergeCubeProductos />} />
                  <Route path="/kitmergeproductos" element={<KitMergeProductos />} />
              </Routes>
              <Footer /> {/* Mostrar Footer en todas las páginas */}
          </div>
      </Router>
  );
}

export default App;
