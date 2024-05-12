import aboutimg from "../../Images/about-img.avif";

const AboutSection = () => {
  return (
    <div className="container about-section ">
      <div className="row">
        <h6>About Our Company</h6>
        <div className="about-text col-lg-6 col-12 ">
          <h1>PRO Services & Business Setup Consultants</h1>
          <p>
            We offer a comprehensive range of document clearing services,
            including PRO services, trade license renewal, visa applications,
            labor department procedures, and more. Whether you are a small
            business owner or a large corporation, we have the expertise and
            experience to handle all your document processing needs. Our team of
            experts is dedicated to providing our clients with the highest
            quality service at a reasonable price. We understand that dealing
            with government procedures and transactions can be a daunting task,
            which is why we are here to help. With our local sponsorship
            services, we can provide you with a trustworthy and reliable company
            that will help you navigate the complexities of the local business
            landscape. In addition to our document clearing services, we also
            offer legal translation services. Our team of translators is highly
            skilled and experienced in transcribing documents in a wide range of
            languages, ensuring that your documents are accurately translated
            and legally recognized. At Al Fattah Document Services, we are
            passionate about empowering entrepreneurs and building up
            businesses. Let us handle all your document processing needs so you
            can focus on what you do best – running your business. Contact us
            today to learn
          </p>
        </div>
        <div className="about-img col-lg-6 col-12">
          <img src={aboutimg} alt="" className="img-fluid w-100 h-100" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
