import { memo } from "react";

const Card = memo(({ image, codigo, description }) => {
  return (
    <article
      className="
    bg-blue-700/15
    border border-white/15
    rounded-xl
    p-4
    transition-transform
    hover:scale-[1.02]
  "
    >
      <h2 className="text-3xl font-bold text-indigo-400 text-center">
        {codigo}
      </h2>

      <div className="mt-3 overflow-hidden rounded-lg object-center">
        <img
          src={image}
          alt={description}
          loading="lazy"
          decoding="async"
          className="w-full h-52 object-center"
        />
      </div>

      <p className="mt-3 text-sm text-white text-center">
        {description}
      </p>
    </article>
  );
});

export default Card;