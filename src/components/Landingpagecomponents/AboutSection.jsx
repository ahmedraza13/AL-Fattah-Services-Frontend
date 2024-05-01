import aboutimg from '../../Images/aboutpicture.jpg';

const AboutSection = () => {
  return (
    <div className='about-section-container'>
    <div className="container " >
      <div className="row">
        {/* Image Column */}
        <div className="col-md-6">
          <img
            src={aboutimg}
            className="img-fluid"
            alt="About Image"
        
          />
        </div>
        {/* Text and Button Column */}
        <div className="col-md-6">
          <div className="text-center text-md-left">
            <h2 className='about-title'>About Us</h2>
            <p className='about-paragraph'>
              Documents are a part of any business / individual around the
              world. In UAE, you can either hire an in house PRO services or
              Outsourcing PRO services. If you are looking for assistance in PRO
              services in Dubai or any part of UAE, a professional expert with
              good experience is necessary. Here, in Al Fattah Documents Clearing,
              we provide effective PRO services including all document clearing
              services across UAE.
            </p>
            <button className="btn btn-primary  ">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
