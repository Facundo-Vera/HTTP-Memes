import React from "react";

const Card = ({ codigo, id, description, image }) => {
  return (
    <article
      key={id}
      className=" 
        group
        bg-white/5 backdrop-blur-md
        border border-white/10
        rounded-xl
        p-4
      "
    >
  
      <h2 className="text-3xl font-bold text-indigo-400 text-center">
        {codigo}
      </h2>


      <div className="mt-3 overflow-hidden rounded-lg">
        <img
          src={image}
          alt="imagen meme"
          className="w-full  h-28 md:h-48 object-cover"
        />
      </div>


      <p className="mt-3 text-sm text-white text-center">{description}</p>
    </article>
  );
};

export default Card;
