import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  const slides = [
    {
      titulo: "Nueva colección",
      subtitulo: "Comodidad y estilo para tu bebé",
      texto: "Prendas suaves y modernas hechas con amor",
      imagen: "/assets/banner1.jpg",
    },
    {
      titulo: "Ofertas especiales",
      subtitulo: "Hasta 30% de descuento",
      texto: "Aprovecha precios únicos por tiempo limitado",
      imagen: "/assets/banner2.jpg",
    },
    {
      titulo: "Little Joy",
      subtitulo: "Momentos llenos de amor",
      texto: "Ropa pensada para cuidar a tu bebé",
      imagen: "/assets/banner3.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // AUTO PLAY
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  return (
    <div className="banner fade-in">

      {/* TEXTO */}
      <div className="banner-contenido">
        <h2>{slides[index].titulo}</h2>
        <h1>{slides[index].subtitulo}</h1>
        <p>{slides[index].texto}</p>

        <button
          className="boton"
          onClick={() => navigate("/categorias")}
        >
          Explorar ahora
        </button>
      </div>

      {/* IMAGEN */}
      <div className="banner-img">
        <img src="/assets/banner1.jpg" />
      </div>

      {/* BOTONES */}
      <button className="banner-btn izquierda" onClick={prevSlide}>
        ‹
      </button>

      <button className="banner-btn derecha" onClick={nextSlide}>
        ›
      </button>

      {/* INDICADORES */}
      <div className="indicadores">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "activo" : ""}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}