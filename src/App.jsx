import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ESTILOS
import "./App.css";

// COMPONENTES
import BarraNavegacion from "./Componentes/BarraNavegacion";
import WidgetWhatsApp from "./Componentes/WidgetWhatsApp";
import Loader from "./Componentes/Loader";

// PÁGINAS
import Inicio from "./Paginas/Inicio";
import Categorias from "./Paginas/Categorias";
import Ofertas from "./Paginas/Ofertas";
import ProductoDetalle from "./Paginas/ProductoDetalle";

// DATA
import productosData from "./Data/productos";

function App() {
  // LOADER
  const [cargando, setCargando] = useState(true);

  // BUSCADOR GLOBAL
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // LOADER ACTIVO
  if (cargando) return <Loader />;

  return (
    <Router>

      {/* NAVBAR */}
      <BarraNavegacion setSearchQuery={setSearchQuery} />

      {/* RUTAS */}
      <Routes>

        {/* INICIO */}
        <Route
          path="/"
          element={
            <Inicio
              productos={productosData}
              searchQuery={searchQuery}
            />
          }
        />

        {/* CATEGORÍAS */}
        <Route
          path="/categorias"
          element={
            <Categorias
              productos={productosData}
              searchQuery={searchQuery}
            />
          }
        />

        {/* OFERTAS */}
        <Route
          path="/ofertas"
          element={<Ofertas productos={productosData} />}
        />

        {/* DETALLE PRODUCTO */}
        <Route
          path="/producto/:id"
          element={<ProductoDetalle productos={productosData} />}
        />

      </Routes>

      {/* WHATSAPP */}
      <WidgetWhatsApp />

    </Router>
  );
}

export default App;