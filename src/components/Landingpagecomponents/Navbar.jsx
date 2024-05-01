import navlogo from "../../Images/logotys.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid d-flex justify-content-around align-items-center" >
        <a className="navbar-brand mt-2" href="#">
          <img src={navlogo} alt="nav-logo" width={100} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <i
              className="bi bi-list"
              style={{ fontSize: "30px", color: "#004175" }}
            />
          ) : (
            <i
              className="bi bi-x"
              style={{ fontSize: "30px", color: "#004175" }}
            ></i>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav gap-3 ms-auto  ">
            <li className="nav-item mt-2">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown mt-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Business Setup
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Visa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Typing and PRO Service
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Translation Service
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Social Media
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="btn btn-primary">Contact Us</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
