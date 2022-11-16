import React, { useState, useEffect } from "react";
import Fotos from "./Fotos";
const Galeria = () => {
  const URL = "  http://localhost:5000/imagenes";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    showInfo();
  }, []);

  const showInfo = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className="row">
      {users.map((item) => (
        <Fotos id={item.id} img={item.url} />
      ))}
    </div>
  );
};

export default Galeria;
