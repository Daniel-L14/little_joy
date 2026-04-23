import { useState } from "react";

export default function WidgetWhatsApp() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="whatsapp">
      {abierto && (
        <div className="chat">
          <button onClick={() => window.open("https://wa.me/573142352488?text=Quiero ver el catálogo")}>
            Ver catálogo
          </button>
          <button onClick={() => window.open("https://wa.me/573142352488?text=Tengo una duda")}>
            Duda
          </button>
        </div>
      )}

      <button onClick={() => setAbierto(!abierto)} className="boton">
        WhatsApp
      </button>
    </div>
  );
}