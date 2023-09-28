import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-secondary font-bold h-16 flex justify-around items-center text-accent">
      <Link to="/about">
        <p>Conditions Générales pour polisson</p>
      </Link>
      <p>Remote 2023</p>
    </div>
  );
}

export default Footer;
