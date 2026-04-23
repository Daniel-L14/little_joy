import { useParams } from "react-router-dom";
import { useState } from "react";
import ProductosRelacionados from "../Componentes/ProductosRelacionados";

export default function ProductoDetalle({ productos }) {
  const { id } = useParams();

  const producto = productos.find((p) => p.id === parseInt(id));

  // VALIDACIÓN
  if (!producto) return <p style={{ padding: "40px" }}>Producto no encontrado</p>;

  // ESTADOS
  const [imagenActiva, setImagenActiva] = useState(producto.imagenes[0]);
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");

  return (
    <div className="detalle-container">

      {/* CONTENIDO PRINCIPAL */}
      <div className="detalle">

        {/* 🖼️ GALERÍA */}
        <div className="galeria">

          {/* Imagen principal */}
          <img
            src={imagenActiva}
            alt={producto.nombre}
            className="imagen-principal"
          />

          {/* Miniaturas */}
          <div className="miniaturas">
            {producto.imagenes.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="mini"
                className="miniatura"
                onClick={() => setImagenActiva(img)}
              />
            ))}
          </div>
        </div>

        {/* 📋 INFORMACIÓN */}
        <div className="detalle-info">

          <h1>{producto.nombre}</h1>

          <p className="precio">${producto.precio}</p>

          <p className="descripcion">
            Prenda diseñada para brindar suavidad y comodidad a tu bebé.
            Material de alta calidad, ideal para el uso diario.
          </p>

          {/* 🏷️ OFERTA */}
          {producto.oferta && (
            <span className="badge-oferta">Oferta</span>
          )}

          {/* 👕 TALLAS */}
          <div className="tallas">
            <p><strong>Selecciona talla:</strong></p>

            <div className="tallas-grid">
              {producto.tallas.map((talla) => (
                <button
                  key={talla}
                  className={`talla-btn ${
                    tallaSeleccionada === talla ? "activa" : ""
                  }`}
                  onClick={() => setTallaSeleccionada(talla)}
                >
                  {talla}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ BENEFICIOS */}
          <div className="beneficios">
            <p>✔ Tela suave y segura para la piel</p>
            <p>✔ Envíos a todo Colombia</p>
            <p>✔ Atención personalizada</p>
          </div>

          {/* 🟢 BOTÓN */}
          <button
            className="boton comprar"
            onClick={() => {
              if (!tallaSeleccionada) {
                alert("Selecciona una talla antes de continuar");
                return;
              }

              window.open(
                `https://wa.me/573142352488?text=Hola, quiero comprar: ${producto.nombre} en talla ${tallaSeleccionada}`
              );
            }}
          >
            Comprar por WhatsApp
          </button>

        </div>
      </div>

      {/* 🔥 PRODUCTOS RELACIONADOS */}
      <ProductosRelacionados
        productos={productos}
        productoActual={producto}
      />

    </div>
  );
}