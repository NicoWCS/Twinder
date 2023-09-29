/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import heart from "../assets/heart.svg";

function Home() {
  return (
    <div className="bg-primary h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="flex justify-center mb-2 md:mb-4">
        <img
          src={heart}
          alt="Import foireux"
          className="mr-2 w-6 h-6 md:w-8 md:h-8"
        />
        <img
          src={heart}
          alt="Import foireux"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </div>

      <div className="mb-2 md:mb-4 w-64">
        <label className="block text-accent mb-1 md:mb-2 text-sm md:text-base">
          Pseudo
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded text-sm md:text-base"
          placeholder="coucou"
        />
      </div>

      <div className="mb-2 md:mb-4 w-64">
        <label className="block text-accent mb-1 md:mb-2 text-sm md:text-base">
          Password
        </label>
        <input
          type="password"
          className="w-full p-2 border rounded text-sm md:text-base"
          placeholder="1234"
        />
      </div>

      <button className="bg-accent text-primary rounded-full py-2 px-6 hover:bg-secondary transition duration-300 ease-in-out text-sm md:text-base">
        Se Connecter
      </button>

      <h1 className="text-center text-accent font-bold text-lg md:text-2xl my-4 md:my-8">
        Soyez les bienvenus sur une app ... en préparation
      </h1>

      <div className="bg-secondary rounded-lg p-4 shadow-md w-11/12 md:w-1/2 text-sm md:text-base">
        <p className="text-accent text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae
          placeat reprehenderit quam temporibus laboriosam, ea nam inventore
          tempora saepe, cupiditate accusantium quae cum? Voluptates delectus
          autem, adipisci et sit voluptatibus ea ad assumenda at, iste repellat
          optio officia earum. Debitis, nostrum unde natus eligendi asperiores
          perferendis voluptatem expedita odio.
        </p>
      </div>
    </div>
  );
}

export default Home;
