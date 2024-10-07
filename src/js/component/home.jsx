import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Jumbotron = () => {
  return (
    <div className="container bg-light.bg-gradient">
      <div className="jumbotron">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fringilla tortor eget elit elementum, tempus sollicitudin purus
          semper. Vivamus vitae massa nec enim finibus rutrum. Sed lobortis odio
          diam, quis mollis ipsum convallis eget.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Call to action!
          </a>
        </p>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-light" href="#">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link text-light active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Card = () => {
  return (
    <div className="card h-100">
      <img
        src="https://placehold.co/500x325"
        alt="Placeholder"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fringilla tortor eget elit elementum, tempus sollicitudin purus
          semper.
        </p>
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <Card />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <Card />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <Card />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-light justify-content-center">
      <p className="lead mb-0 text-center">Copyright © Your Website 2024</p>
    </nav>
  );
};
//export default Home;
export { NavBar, Jumbotron, Home, Footer };
