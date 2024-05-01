import banneroneimg from "../../Images/slider-img-one.png";
import bannertwoimg from "../../Images/slider-img-two.jpg";
import bannerthreeimg from "../../Images/slider-img-three.jpg";

const Slider = () => {
  return (
    <div className="slider-container">
    <div className="container p-5">
      <div className="row justify-content-between">
        <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center">
          <div className="left-side text-center">
            <h1>Al Fattah <br /> Documents Clearing Services</h1>
            <p>
              We’re a creative company that focuses on establishing long-term
              relationships with customers.
            </p>
            <button className="btn btn-primary align-items-center">Explore Now</button>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div
            id="carouselExampleInterval"
            className="carousel slide right-side"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={2000}>
                <img
                  src={banneroneimg}
                  className="d-block w-100"
                  alt="..."
                  height={500}
                />
              </div>
              <div className="carousel-item" data-bs-interval={2000}>
                <img
                  src={bannertwoimg}
                  className="d-block w-100"
                  alt="..."
                  height={500}
                />
              </div>
              <div className="carousel-item" data-bs-interval={2000}>
                <img
                  src={bannerthreeimg}
                  className="d-block w-100"
                  alt="..."
                  height={500}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;
