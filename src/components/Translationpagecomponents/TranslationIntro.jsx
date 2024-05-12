import translationintroimg from "../../Images/translation-intro.jpg";
const TranslationIntro = () => {
  return (
    <div className="container translation-intro-section">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <h1>Translation Service in UAE</h1>
          <p>
            Al Fattah Documents Clearing Services offers professional
            translation services in the UAE, ensuring accuracy and reliability
            in converting documents across various languages. Whether its legal
            documents, certificates, business contracts, or personal papers, our
            team of experienced linguists ensures precise translations that meet
            industry standards and client requirements. With a commitment to
            quality and confidentiality, we facilitate seamless communication
            across linguistic barriers, enabling our clients to navigate the
            diverse landscape of the UAE with ease.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <img
            src={translationintroimg}
            alt="translation-image"
            className="img-fluid w-100 h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default TranslationIntro;
