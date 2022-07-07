import { Link } from "react-router-dom";
import grafikrLogo from "../assets/grafikr_logo.png";

export default function MobileMenu({ setIsMobileMenuOpen }) {
  return (
    <>
      <nav>
        <div>
          <button
            className="pt-4 pl-2"
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col text-center text-4xl gap-3 h-full pt-12">
          <li>
            <Link to="/">Forside</Link>
          </li>
          <li>
            <Link to="/">Kompetencer</Link>
          </li>
          <li>
            <Link to="/">Service</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Om os</Link>
          </li>
          <li>
            <Link to="/">Kontakt</Link>
          </li>
          <li className="pt-10 font-light text-2xl tracking-widest">
            kontakt@grafikr.dk
          </li>
          <li className="font-light text-2xl tracking-widest">
            +45 69 69 29 15
          </li>
        </ul>
      </nav>
      <div className="absolute w-5 top-4 right-7">
        <img src={grafikrLogo} alt="grafikrLogo" />
      </div>
    </>
  );
}
