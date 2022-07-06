import { Link } from "react-router-dom";

export default function Button({ text }) {
  return (
    <Link to="/" className="text-2xl">
      <button className="btn-black text-sm hover:bg-gray-700 cursor-pointer">
        {text}
      </button>
    </Link>
  );
}
