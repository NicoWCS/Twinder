/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import profil from "../assets/borat.webp";

function Profil() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    age: 40,
    pseudo: "Bad rabbit",
    description: "Et un repo pété sur Github, un ! ",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/user`, formData)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((error) => {
        console.error("La mise à jour a échoué :", error);
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <img src={profil} alt="Oups" className="h-40 rounded-full mt-8 mb-8" />
        <p className="flex text-center text-accent">
          {" "}
          Bienvenue, <br /> {info.name || " Weird Cheap Student"}{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="bg-primary p-8 rounded-lg shadow-md w-2/3 mt-8 mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="font-bold mb-2 text-accent">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="border border-gray-400 rounded p-2 mb-4"
            />
            <label className="font-bold mb-2 text-accent">Pseudo:</label>
            <input
              type="text"
              name="pseudo"
              value={formData.pseudo}
              onChange={handleInputChange}
              className="border border-gray-400 rounded p-2 mb-4"
            />
            <label className="font-bold mb-2 text-accent">Un petit mot ?</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border border-gray-400 rounded p-2 h-20 mb-4"
            />
            <button type="submit" className="bg-accent text-white rounded p-2 ">
              Mettre à jour
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-around items-center">
        <button
          type="button"
          className="h-12 w-28 bg-accent text-primary rounded-2xl mt-10 mb-10"
          onClick={() => document.getElementById("modal_tag").showModal()}
        >
          Match récents
        </button>
        <dialog id="modal_tag" className="modal">
          <form method="dialog" className="modal-box bg-neutral-100">
            <h3 className="font-bold text-lg text-center text-accent">
              On revient dire coucou ?{" "}
            </h3>
            <p className="py-4 flex flex-wrap justify-around">{}</p>
            <div className="modal-action flex justify-center ">
              <button type="submit" className="btn text-neutral bg-primary">
                Retour
              </button>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
}

export default Profil;
