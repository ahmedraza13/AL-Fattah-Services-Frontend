import aboutimg from "../../Images/about-one.png";

const AboutSection = () => {
  return (
    <div className="container about-section mt-5">
      <div className="row">
        <h6>About Our Company</h6>
        <div className="about-text col-lg-6 col-12 ">
          <h1>PRO Services & Business Setup Consultants</h1>
          <p>
            Documents are a part of any business / individual around the world.
            In UAE, you can either hire an in house PRO services or Outsourcing
            PRO services. If you are looking for assistance in PRO services in
            Dubai or any part of UAE, a professional expert with good experience
            is necessary. Here, in Al Fattah Documents Clearing, we provide
            effective PRO services including all document clearing services
            across UAE.
          </p>
         
          {/* <div className="progress mb-3" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: "25%" }}>25%</div>
          </div>
          <div className="progress mb-3" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: "25%" }}>25%</div>
          </div>
          <div className="progress mb-3" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: "25%" }}>25%</div>
          </div>
          <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: "25%" }}>25%</div>
          </div> */}
        </div>
        <div className="about-img col-lg-6 col-12">
          <img src={aboutimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
