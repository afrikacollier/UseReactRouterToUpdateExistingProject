import { Link, useNavigate } from "react-router-dom";
import LoginButton from './LoginButton';

function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Notes
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className={"nav-link"} to="/">
                Home
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className={"nav-link"} to="/delete">
                Delete
              </Link>
            </li>
          </ul>
          <LoginButton/>
          <span className="navbar-text">
            
            <Link className={"nav-link"} to="/edit">
                Edit
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;