import { Link } from "react-router-dom";
import grafikrLogo from "../assets/grafikr_logo.png";

export default function MainMenu() {
  return (
    <>
      <nav className="mx-auto pl-20 md:pt-2">
        <ul className="flex justify-center align-middle">
          <li>
            <Link to="/" className="pl-8 pr-8">
              Forside
            </Link>
          </li>
          <li>
            <Link to="/" className="pr-8">
              Kompetencer
            </Link>
          </li>
          <li>
            <Link to="/" className="pr-8">
              Service
            </Link>
          </li>
          <li>
            <Link to="/" className="pr-8">
              <img src={grafikrLogo} alt="grafikrLogo" className="shrink-0" />
            </Link>
          </li>
          <li>
            <Link to="/" className="pr-8 pl-8">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className="pr-8">
              Om os
            </Link>
          </li>
          <li>
            <Link to="/" className="pr-8">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
