import React from "react";
import Fotos from "./Fotos";
import Databases from "../db.json";
const Galeria = () => {

  return (
    <div className="row">
      {
        Databases.map((database) => {
         return (
          <Fotos id={database.id} img={database.url} title={database.title} />
         )
        })
      }

    </div>
  );
};

export default Galeria;
