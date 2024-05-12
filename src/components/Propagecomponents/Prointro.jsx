import prointroimg from "../../Images/pro-intro.jpg";

const Prointro = () => {
  return (
    <div className="container pro-intro mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1>Complete Corporate PRO Services in Dubai</h1>
          <p>
            Here at Al Fattah Document Clearing Services, we offer end-to-end
            solutions for all PRO Services in Dubai. Dubai offers the perfect
            environment to start and run a successful business. However, there
            are certain processes and procedures in place that cannot be
            avoided. Many of these protocols involve lengthy paperwork and
            documentation, which can become cumbersome for business owners. This
            is why we at Al Fattah Document Clearing Services offer the best
            in-house document clearance and processing services in the UAE.
            These PRO services encompass all types of procedural assistance you
            will need to keep your business running smoothly while fulfilling
            all government-ordered requirements
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            src={prointroimg}
            alt="proimg"
            className="img-fluid w-100 h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Prointro;
