import iconone from "../../Images/pro-card-icon-one.png";
import icontwo from "../../Images/pro-card-icon-two.png";
import iconthree from "../../Images/pro-card-icon-three.png";
import iconfour from "../../Images/pro-card-icon-four.png";
import iconfive from "../../Images/pro-card-icon-five.png";
import iconsix from "../../Images/pro-card-icon-six.png";
const ProOverview = () => {
  return (
    <div className="container pro-overview-section">
      <div className="row">
        <h1 className="text-center">Overview of PRO Services in Dubai UAE</h1>
        <p className="text-center">
          Here at Indus Business Services, we offer end to end solutions for all
          PRO Services in Dubai. Take a look:
        </p>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
          <div className="card p-2">
            <img src={iconone} alt="" width={60} className="m-auto" />
            <div className="card-body text-center ">
              <h5 className="card-title">Residence & Employment Visa</h5>

              <p className="card-text">
                We oversee all steps to obtain employment visas for you, and
                your employees.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
          <div className="card p-2">
            <img src={icontwo} alt="" width={60} className="m-auto" />
            <div className="card-body text-center ">
              <h5 className="card-title">Emirates Id Card</h5>

              <p className="card-text">
                We help you fulfill all the applications, documentation, and
                steps to obtain your Emirates ID card
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
          <div className="card p-2">
            <img src={iconthree} alt="" width={60} className="m-auto" />
            <div className="card-body text-center ">
              <h5 className="card-title">NOC Letter & Approval</h5>

              <p className="card-text">
                Typing, translation, and gaining approval for NOC letters and
                official documents
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
          <div className="card p-2">
            <img src={iconfour} alt="" width={60} className="m-auto" />
            <div className="card-body text-center ">
              <h5 className="card-title">Labour & Immigration Card</h5>

              <p className="card-text">
                Application and processing to obtain the labour and immigration
                card in UAE
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
          <div className="card p-2">
            <img src={iconfive} alt="" width={60} className="m-auto" />
            <div className="card-body text-center ">
              <h5 className="card-title">Family Visas</h5>

              <p className="card-text">
                Complete visa processing to bring your whole family to the UAE.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
          <div className="card p-2">
            <img src={iconsix} alt="" width={60} className="m-auto" />
            <div className="card-body text-center ">
              <h5 className="card-title">Investor Visas</h5>

              <p className="card-text">
                Step by step application processing to obtain investor visas for
                your partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProOverview;
