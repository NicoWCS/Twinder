import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";
import heart from "../assets/heart.svg";

function Research() {
  const [twin, setTwin] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/profil")
      .then((res) => setTwin(res.data))
      .catch((error) => console.error("Le fetch a échoué:", error));
  }, []);

  const handleDelete = (deletedCardId) => {
    setTwin((prevCards) =>
      prevCards.filter((card) => card.id !== deletedCardId)
    );
  };

  const filteredTwin = twin.filter((tronche) => {
    if (filter === "" || filter === "RAF") {
      return true;
    }
    return tronche.tag === filter;
  });

  return (
    <div className="p-4">
      <div className="flex justify-center h-28 pt-5 pb-5">
        <img src={heart} alt="Import foireux" className="w-10 h-10" />
        <img src={heart} alt="Import foireux" className="w-10 h-10" />
      </div>
      <div className="flex justify-center my-3">
        <select
          className="select w-1/2 max-w-xs bg-accent p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Une pref ?</option>
          <option value="sourire">Sourire</option>
          <option value="sobre">Sobre</option>
          <option value="atypique">Atypique</option>
          <option value="RAF">RAF</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-around items-center">
        {filteredTwin.map((tronche) => (
          <div key={tronche.id} className="mb-4">
            <Card
              id={tronche.id}
              photo={tronche.photo}
              name={tronche.name}
              age={tronche.age}
              description={tronche.description}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Research;
