import heart from "../assets/heart.svg";

function Home() {
  return (
    <div className="bg-primary h-screen ">
      <div className="flex justify-center h-28 pt-5 pb-5">
        <img src={heart} alt="Import foireux" />
        <img src={heart} alt="Import foireux" />
      </div>
      <h1 className="text-center text-accent font-bold text-2xl pt-5 pb-5">
        CONNEXION
      </h1>

      <div className="flex  justify-center items-center ">
        <p className="text-accent text-center flex-wrap w-1/2 h-20 pt-5 pb-5">
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
