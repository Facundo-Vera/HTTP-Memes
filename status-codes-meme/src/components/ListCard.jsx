import Card from "./Card";
import data from "../db/data.js";

const ListCard = () => {

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((datos) => (
          <Card key={datos.id} {...datos} />
        ))}
      </div>
    </div>
  );
};

export default ListCard;
