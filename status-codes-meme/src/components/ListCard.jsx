import { useState, useEffect } from "react";
import Card from "./Card";
import data from "../db/data.js";

const itemsPorPganina = 9;

const ListCard = () => {
  const [pagina, setPagina] = useState(1);

  const totalPaginas = Math.ceil(data.length / itemsPorPganina);

  const inicio = (pagina - 1) * itemsPorPganina;
  const visibles = data.slice(inicio, inicio + itemsPorPganina);

  // subir al top cuando cambia de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pagina]);

  return (
    <div className="px-4">

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {visibles.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>


      <div className="flex justify-center items-center gap-4 my-8">
        <button
          onClick={() => setPagina((p) => p - 1)}
          disabled={pagina === 1}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-40"
        >
          ← Anterior
        </button>

        <span className="text-white">
          Página {pagina} de {totalPaginas}
        </span>

        <button
          onClick={() => setPagina((p) => p + 1)}
          disabled={pagina === totalPaginas}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-40"
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default ListCard;