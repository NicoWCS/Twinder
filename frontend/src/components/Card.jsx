import PropTypes from "prop-types";
import axios from "axios";

function Card({ id, photo, name, age, description, onDelete }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleDelete = async () => {
    try {
      await axios.delete(`${backendUrl}/profil/${id}`);

      onDelete(id);
    } catch (error) {
      console.error("Erreur lors de la suppression de la carte :", error);
    }
  };

  const handleMatch = async () => {
    try {
      await axios.post(`${backendUrl}/match`);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la carte au match :", error);
    }
  };

  return (
    <div>
      <div className="h-[20rem] w-[16rem] flex flex-col justify-around items-center bg-primary text-accent mt-2 mb-2 rounded-2xl">
        <img
          src={photo}
          alt="Tiens ! Un soucis d'import "
          className="h-40 w-40 rounded-2xl"
        />
        <div className="flex flex-col justify-center items-center">
          <div> {name} </div>
          <div className="mb-2 mt-2"> {age} ans</div>
          <div className="text-center"> {description} </div>
        </div>
        <div className="">
          <button type="button" className="mr-5" onClick={handleMatch}>
            ✅
          </button>
          <button type="button" className="ml-5" onClick={handleDelete}>
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
