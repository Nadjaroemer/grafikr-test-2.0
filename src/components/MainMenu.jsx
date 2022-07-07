import { Link } from "react-router-dom";
import grafikrLogo from "../assets/grafikr_logo.png";

export default function MainMenu() {
  return (
    <>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
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
    </>
  );
}
