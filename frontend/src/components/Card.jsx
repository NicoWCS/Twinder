import PropTypes from "prop-types";

function Card({ photo, name, age, description }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <div>
      <div className="h-[16rem] w-[10rem] flex flex-col justify-around items-center bg-primary text-accent mt-2 mb-2 rounded-2xl">
        <img
          src={`${backendUrl}/uploads/recipes/${photo}`}
          alt="Tiens ! Un soucis d'import "
          className="h-20 w-20 rounded-full"
        />
        <div className="flex flex-col justify-center items-center">
          <div> {name} </div>
          <div className="mb-2 mt-2"> {age} ans</div>
          <div className="text-center"> {description} </div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
