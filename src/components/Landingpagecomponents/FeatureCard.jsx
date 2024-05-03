import iconone from "../../Images/feature-icon-one.png";
import icontwo from "../../Images/feature-icon-two.png";
import iconthree from "../../Images/feature-icon-three.png";
const FeatureCard = () => {
  return (
    <div className="feature-card">
      <div className="container">
        <div className="row p-3">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card p-3">
              <img src={iconone} alt="" width={100} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">Start a Business</h5>
                <p className="card-text">
                  Select from our array of company formation packages tailored
                  to your needs, whether its our hassle-free offshore,
                  convenient mainland, or advantageous free zone options!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card p-3">
              <img src={icontwo} alt="" width={100} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">Run Your Bussines</h5>
                <p className="card-text">
                  From facilitating bank account setup to managing PRO services
                  and handling annual trade license renewals, we simplify the
                  tasks involved in running your business smoothly!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card p-3">
              <img src={iconthree} alt="" width={100} className="m-auto" />
              <div className="card-body ">
                <h5 className="card-title">Grow your Business</h5>
                <p className="card-text">
                  Unlock your business's full potential and achieve new heights
                  with our tailored solutions designed to help you grow your
                  business efficiently and sustainably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
