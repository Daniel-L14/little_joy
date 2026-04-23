import "./estilos/principal.css";

import BarraNavegacion from "./componentes/BarraNavegacion";
import Hero from "./componentes/Hero";
import Categorias from "./componentes/Categorias";
import Productos from "./componentes/Productos";
import PiePagina from "./componentes/PiePagina";
import WidgetWhatsApp from "./componentes/WidgetWhatsApp";

function App() {
  return (
    <>
      <BarraNavegacion />
      <Hero />
      <Categorias />
      <Productos />
      <PiePagina />
      <WidgetWhatsApp />
    </>
  );
}

export default App;