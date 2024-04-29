const AboutSection = () => {
    return (
        <div className="container mt-5" >
    <div className="row">
      {/* Image Column */}
      <div className="col-md-6">
        <img src="https://via.placeholder.com/900x600" className="img-fluid" alt="About Image" />
      </div>
      {/* Text and Button Column */}
      <div className="col-md-6">
        <div className="text-center text-md-left">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            sollicitudin enim sit amet turpis cursus, vel consequat magna
            volutpat.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  </div>
    )
}

export default AboutSection