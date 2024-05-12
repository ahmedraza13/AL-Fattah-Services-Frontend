

const Footer = () => {
  return (
    <footer className="footer  py-3 pt-4">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <h5 className="mt-5">
              Al Fattah Documents <br /> Clearing Services
            </h5>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <h5 className="text-light">Services</h5>
            <ul className="list-unstyled text-small">
              <li>Business Setup Service</li>
              <li>PRO Service</li>
              <li>Translation Service</li>
              <li>Visa Service</li>
              <li>Certificate Attestation Service</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <h5 className="text-light">Follow Us</h5>
            <div className="links d-flex gap-2">
              <a
                href="https://www.facebook.com/people/Al-Fattah/61558987553137/?mibextid=JRoKGi"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://wa.me/971522990514" target="_blank">
                <i className="bi bi-whatsapp "></i>
              </a>
              <a
                href="https://www.instagram.com/alfattah.ae?igsh=M3k5aG10dGFyNHJn"
                target="_blank"
              >
                <i className="bi bi-instagram "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
