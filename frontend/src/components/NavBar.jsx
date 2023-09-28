import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="flex justify-around items-center bg-secondary text-accent font-bold h-16">
        <NavLink to="/research">
          <p>Recherche</p>
        </NavLink>
        <NavLink to="/" className="">
          TWINDER
        </NavLink>
        <NavLink to="/profil">
          <p>Profil</p>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
