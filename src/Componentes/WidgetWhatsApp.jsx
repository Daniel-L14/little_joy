import { useState } from "react";

export default function WidgetWhatsApp() {
  const [abierto, setAbierto] = useState(false);

  const telefono = "573000000000";

  const enviar = (mensaje) => {
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`);
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20 }}>
      {abierto && (
        <div className="tarjeta">
          <button onClick={() => enviar("Quiero ver el catálogo de recién nacidos.")}>
            Recién nacidos
          </button>
          <button onClick={() => enviar("Tengo una duda sobre mi envío.")}>
            Envío
          </button>
          <button onClick={() => enviar("Hablar con una asesora.")}>
            Asesora
          </button>
        </div>
      )}

      <button onClick={() => setAbierto(!abierto)} className="boton">
        WhatsApp
      </button>
    </div>
  );
}