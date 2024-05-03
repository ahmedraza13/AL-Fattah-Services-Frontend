import iconone from "../../Images/service-icon-one.png";
import icontwo from "../../Images/service-icon-two.png";
import iconthree from "../../Images/service-icon-three.png";
import iconfour from "../../Images/service-icon-four.png";
import iconfive from "../../Images/service-icon-five.png";
import iconsix from "../../Images/service-icon-six.png";
import iconseven from "../../Images/service-icon-seven.png";
import iconeight from "../../Images/service-icon-eight.png";
const ServiceCard = () => {
  return (
    <div className="service-card-section">
      <div className="container">
        <div className="row p-3 ">
          <div className="service-section-text">
            <h6>OUR SERVICES</h6>
            <h1> Overview of Our Expert Business Services in UAE</h1>
            <p className="text-center">
              We are a one-stop solution for everything you need to start and
              run your business in the UAE! Company formation, bank account
              opening, visa <span>processing, PRO services, and more!</span>
            </p>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <div className="card ">
              <img src={iconone} alt="" width={50} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">Business Setup Services</h5>
                <p className="card-text">
                  Unlock the gateway to seamless business establishment in
                  Dubai's mainland, free zones, and offshore with our
                  unparalleled company formation services.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 ">
            <div className="card ">
              <img src={icontwo} alt="" width={60} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">PRO Services</h5>
                <p className="card-text">
                  Our adept PRO officers are seasoned experts in handling a
                  spectrum of paperwork, document submissions, translations, and
                  beyond, ensuring a seamless and efficient process for your
                  business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <div className="card ">
              <img src={iconthree} alt="" width={60} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">Visa Services</h5>
                <p className="card-text">
                  We'll manage every step of the visa application and approval
                  process for you, your business associates, staff, and loved
                  ones, ensuring a smooth and hassle-free experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <div className="card ">
              <img src={iconfour} alt="" width={60} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">Immigration (Amer)</h5>
                <p className="card-text">
                  The Immigration Department is responsible for issuing all
                  types of visas online, while the Amer Centre facilitates the
                  application process, ensuring efficiency and convenience for
                  all applicants.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <div className="card ">
              <img src={iconfive} alt="" width={70} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">Ministry of Labour (Tasheel)</h5>
                <p className="card-text">
                  Tasheel, under the Ministry of Labour, handles the issuance of
                  work permits and oversees all employment-related matters,
                  ensuring compliance and efficiency in the process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <div className="card ">
              <img src={iconsix} alt="" width={70} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">Emirates id application</h5>
                <p className="card-text">
                  The UAE government offers identification cards for all
                  residents, and we provide convenient application typing
                  services to streamline the process for you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <div className="card ">
              <img src={iconseven} alt="" width={60} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">Department of Economic (DED)</h5>
                <p className="card-text">
                  We meticulously identify and address the unique requirements
                  of our clients regarding Department of Economic Development
                  affairs, ensuring tailored solutions and seamless execution of
                  their business
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <div className="card ">
              <img src={iconeight} alt="" width={70} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">
                  Medical and Unemployment Insurance
                </h5>
                <p className="card-text">
                  We provide health and unemployment insurance services,
                  ensuring your well-being and financial stability during health
                  challenges and unexpected periods of joblessness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
