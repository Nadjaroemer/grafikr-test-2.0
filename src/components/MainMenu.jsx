import { Link } from "react-router-dom";
import grafikrLogo from "../assets/grafikr_logo.png";

export default function MainMenu() {
  return (
    <nav className="mx-auto pl-20">
      <ul className="flex justify-center align-middle">
        <Link to="/" className="pl-8 pr-8">
          Forside
        </Link>
        <Link to="/" className="pr-8">
          Kompetencer
        </Link>
        <Link to="/" className="pr-8">
          Service
        </Link>
        <Link to="/" className="pr-8">
          <img src={grafikrLogo} alt="grafikrLogo" />
        </Link>
        <Link to="/" className="pr-8">
          Blog
        </Link>
        <Link to="/" className="pr-8">
          Om os
        </Link>
        <Link to="/" className="pr-8">
          Kontakt
        </Link>
      </ul>
    </nav>
  );
}
