import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Sök resa</Link>
        </li>
        <li>
          <Link to="/departures">Sök avgångar</Link>
        </li>
        <li>
          <img src="" alt="" />
          <Link to="/home">sl ikon</Link>
        </li>
      </ul>
    </nav>
  );
};
