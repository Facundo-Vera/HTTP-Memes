import { useState, useEffect } from "react";
import Card from "./Card";
import data from "../db/data.js";

const itemsPorPganina = 9;

const ListCard = () => {
  const [pagina, setPagina] = useState(1);
  const [search, setSearch] = useState("");
  
  // ?filtrar 
  const filtrados = data.filter((item) =>
    item.codigo.toString().includes(search) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  //? paginar sobre lo filtrado 
  const totalPaginas = Math.ceil(filtrados.length / itemsPorPganina);
  const inicio = (pagina - 1) * itemsPorPganina;
  const visibles = filtrados.slice(inicio, inicio + itemsPorPganina);

  //? subir al top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagina]);

  //? reset página al buscar
  useEffect(() => {
    setPagina(1);
  }, [search]);


  //? subir al top cuando cambia de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagina]);

  return (
    <div className="px-4">
      <input
        type="search"
        placeholder="Buscar código o descripción..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
    w-80 mb-6 px-4 py-2
    rounded-lg
    bg-gray-400
    text-black
    placeholder-black/50
    outline-none
  "
      />

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
