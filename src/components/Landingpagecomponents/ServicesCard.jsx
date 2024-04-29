import iconone from "../../Images/service-icon-one.png";
import icontwo from "../../Images/service-icon-two.png";
import iconthree from "../../Images/service-icon-three.png";
import iconfour from "../../Images/service-icon-four.png";
import iconfive from "../../Images/service-icon-five.png";
import iconsix from "../../Images/service-icon-six.png";

const ServicesCard = () => {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center mt-5 text-center">
          <h2>Our services</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="box  ">
              <div className="img-box ">
                <img src={iconone} alt="" />
              </div>
              <div className="detail-box">
                <h6>Business setup (Main land and Free Zone)</h6>
                <p>
                  Limited regulations and easy access to the international
                  market attracts the entrepreneur to UAE.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="box ">
              <div className="img-box ">
                <img src={icontwo} alt="" />
              </div>
              <div className="detail-box ">
                <h6>PRO Services</h6>
                <p>
                  Our team offer professional PRO services to the clients. We
                  have strong experience in different field
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="box ">
              <div className="img-box">
                <img src={iconthree} alt="" />
              </div>
              <div className="detail-box ">
                <h6>Department of Economic (DED)</h6>
                <p>
                  We identify the needs of our client related to the Department
                  of economic development works
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="box ">
              <div className="img-box ">
                <img src={iconfour} alt="" />
              </div>
              <div className="detail-box ">
                <h6>Immigration (Amer)</h6>
                <p>
                  All the type of visas are issued by Immigration department
                  through online and Amer centre
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="box ">
              <div className="img-box ">
                <img src={iconfive} alt="" />
              </div>
              <div className="detail-box ">
                <h6>Ministry of Labour (Tasheel)</h6>
                <p>
                  The ministry of labour is responsible for issuing work permits
                  and other works related to employees.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="box ">
              <div className="img-box ">
                <img src={iconsix} alt="" />
              </div>
              <div className="detail-box ">
                <h6>Emirates id application</h6>
                <p>
                  UAE government providing identification card for all the
                  residents. Here we do the Application typing for you .
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="box ">
              <div className="img-box ">
                <img src={iconsix} alt="" />
              </div>
              <div className="detail-box ">
                <h6>Emirates id application</h6>
                <p>
                  UAE government providing identification card for all the
                  residents. Here we do the Application typing for you .
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="box ">
              <div className="img-box ">
                <img src={iconsix} alt="" />
              </div>
              <div className="detail-box ">
                <h6>Emirates id application</h6>
                <p>
                  UAE government providing identification card for all the
                  residents. Here we do the Application typing for you .
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
           <div className="col-lg-4 col-md-6 col-12">
            <div className="box ">
              <div className="img-box">
                <img src={iconsix} alt="" />
              </div>
              <div className="detail-box">
                <h6>Emirates id application</h6>
                <p>
                  UAE government providing identification card for all the
                  residents. Here we do the Application typing for you .
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
