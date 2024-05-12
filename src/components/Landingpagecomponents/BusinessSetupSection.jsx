import cardoneimg from "../../Images/business-setup-card-one.jpg"
import cardtwoimg from "../../Images/business-setup-card-two.jpg"
import cardthreeimg from "../../Images/business-setup-card-three.jpg"
const BusinessSetupSection = () => {
  return (
    <div className="business-setup-section">
      <div className="container">
        <div className="row">
          <h1>Business Setup & Company Formation in Dubai & UAE</h1>
          <p className="mt-3">
            At Al Fattah Documents Clearing Services, we are committed to the
            prosperity of your UAE-based enterprise. As the foremost authorities
            in company formation in Dubai, we deliver unparalleled end-to-end
            business setup solutions, marked by a personalized commitment to
            your triumph.
          </p>
          <p>
            With our adept and empathetic team of company setup consultants, we
            meticulously guide you through every facet of the company formation
            journey, ensuring a seamless and hassle-free experience.
            Specializing in UAE Free Zones, Dubai Mainland, offshore ventures,
            visa facilitation, PRO services, trade license renewal, bank account
            initiation, and beyond, we cater to all your business setup needs
            with expertise and care.
          </p>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <img
                src={cardoneimg}
                alt="duabi mainland company formation"
              />
              <div className="card-body ">
                <h5 className="card-title p-1 text-center">Dubai Mainland Company Formation</h5>
                <p className="card-text text-center">
                  Renowned for its exceptional infrastructure, favorable
                  taxation policies, and the oversight of the Department of
                  Economic Development (DED), the mainland stands as an optimal
                  location for establishing a business. Here, you will find
                  unparalleled opportunities for trading with enterprises both
                  locally and globally, making it an ideal choice for
                  entrepreneurial endeavors.
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                >
                  Go somewhere
                </a>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card ">
              <img
                src={cardtwoimg}
                alt="dubai freezone company formation"
              />
              <div className="card-body ">
                <h5 className="card-title p-1 text-center">Business Setup in Freezones</h5>
                <p className="card-text  text-center">
                  Looking to retain full ownership of your Dubai-based
                  enterprise while enjoying a tax-free environment? Explore the
                  diverse array of free zones across the UAE! Our expertise lies
                  in identifying the optimal free zone tailored to your business
                  needs, industry, and operational scope. With extensive
                  experience collaborating with key free zone authorities, we
                  guarantee a seamless company formation process in the UAE.
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                >
                  Go somewhere
                </a>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="card">
              <img
                src={cardthreeimg}
                alt="dubai Offshore company formation"
              />
              <div className="card-body ">
                <h5 className="card-title p-1 text-center">Dubai Offshore Company Formation</h5>
                <p className="card-text text-center">
                  Opting for offshore business setup in Dubai allows you to
                  leverage the advantages of a UAE-based company while managing
                  operations from your home country, making it exceptionally
                  convenient for remote business owners. Entrust us with the
                  meticulous handling of all company formation procedures,
                  ensuring swift incorporation of your offshore business with
                  ease.
                </p>
                <a
                  href="#"
                  className="btn btn-primary  "
                  
                >
                  Go somewhere
                </a>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSetupSection;
