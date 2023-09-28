import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

import Card from "../components/Card";

function Research() {
  const [twin, setTwin] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/profil")
      .then((res) => setTwin(res.data))
      .catch((error) => console.error("Le fetch a echoué:", error));
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-3 mb-3">
        {" "}
        <select className="select w-1/2 max-w-xs bg-accent">
          <option disabled selected>
            Une pref ?
          </option>
          <option>sourire</option>
          <option>sobre</option>
          <option>atypique</option>
          <option>RAF</option>
        </select>{" "}
      </div>
      <div className="flex flex-wrap justify-around items-center">
        {twin.map((tronche) => (
          <div key={tronche.id}>
            <Card
              id={tronche.id}
              photo={tronche.photo}
              name={tronche.name}
              age={tronche.age}
              description={tronche.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Research;
