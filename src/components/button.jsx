import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link to="/" className="text-2xl">
      <button className="btn-black text-sm hover:bg-gray-700">
        Hent e-bog
      </button>
    </Link>
  );
}
