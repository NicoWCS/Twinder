import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import profil from "../assets/borat.webp";

function Profil() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        setInfo(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Le fetch a échoué:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (info === null) {
    return <div>Une erreur s'est produite lors du chargement des données.</div>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <img src={profil} alt="Oups" className="h-40 rounded-full mt-8 mb-8" />
        <p className="flex text-center text-accent">
          {" "}
          Bienvenue, <br /> {info.name}{" "}
        </p>
      </div>
      <div className="flex justify-around items-center text-accent flex-wrap mt-8 mb-8">
        <p>Age: {info.age}</p>
        <p>Pseudo: {info.pseudo} </p>
        <p> Détails : {info.description} </p>
      </div>

      <div className="flex justify-around items-center">
        <button
          type="button"
          className="h-12 w-28 bg-accent text-primary rounded-2xl mt-10 mb-10"
        >
          Match récents
        </button>
        <button
          type="button"
          className="h-12 w-28 bg-accent text-primary rounded-2xl mt-10 mb-10"
        >
          Recherche
        </button>
      </div>
    </div>
  );
}

export default Profil;
