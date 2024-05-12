import cardiconone from "../../Images/translation-card-icon-one.png";
import cardicontwo from "../../Images/translation-card-icon-two.png";
import cardiconthree from "../../Images/translation-card-icon-three.png";
import cardiconfour from "../../Images/translation-card-icon-four.png";
import cardiconfive from "../../Images/translation-card-icon-five.png";
import cardiconsix from "../../Images/translation-card-icon-six.png";
import cardiconseven from "../../Images/translation-card-icon-seven.png";
import cardiconeight from "../../Images/translation-card-icon-eight.png";

const TranslationCards = () => {
  return (
    <div className="container translation-cards-section">
      <div className="row ms-auto me-auto">
        <h1>Best Certificate Attestation and Translation Services in UAE</h1>
        <div className="col-lg-3 col-md-3 col-6">
          <div className="card">
            <img src={cardiconone} alt="UAE Embassy Attestation" />
            <span>UAE Embassy Attestation</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="card">
            <img src={cardicontwo} alt="UAE Embassy Attestation" />
            <span>MOFA Attestation</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="card">
            <img src={cardiconthree} alt="UAE Embassy Attestation" />
            <span>Apostille Services</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="card">
            <img src={cardiconfour} alt="UAE Embassy Attestation" />
            <span>Police Clearance Certificate</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="card">
            <img src={cardiconfive} alt="UAE Embassy Attestation" />
            <span>Certificate Attestation</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="card">
            <img src={cardiconsix} alt="UAE Embassy Attestation" />
            <span>Degree Certificate Attestation</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="card">
            <img src={cardiconseven} alt="UAE Embassy Attestation" />
            <span>Birth Certificate Attestation</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6 ">
          <div className="card">
            <img src={cardiconeight} alt="UAE Embassy Attestation" />
            <span>Marriage Certificate Attestation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslationCards;
