import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-secondary font-bold h-16 flex justify-around items-center text-accent">
      <Link to="/about">
        <p>CGU</p>
      </Link>
    </div>
  );
}

export default Footer;
