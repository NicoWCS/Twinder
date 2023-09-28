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
    <div>
      <div className="flex justify-center h-28 pt-5 pb-5">
        <img src={heart} alt="Import foireux" />
        <img src={heart} alt="Import foireux" />
      </div>
      <div className="flex justify-center mt-3 mb-3">
        <select
          className="select w-1/2 max-w-xs bg-accent"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Une pref ?</option>
          <option value="sourire">sourire</option>
          <option value="sobre">sobre</option>
          <option value="atypique">atypique</option>
          <option value="RAF">RAF</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-around items-center">
        {filteredTwin.map((tronche) => (
          <div key={tronche.id}>
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
