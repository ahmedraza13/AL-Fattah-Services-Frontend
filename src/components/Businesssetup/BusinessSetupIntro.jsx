import businessimg  from '../../Images/business-setup-section.jpg'

const Intro = () => {
  return (
    <div className="container business-setup-intro-section">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <h1>Business Setup</h1>
          <p>
            Dubai stands out as a prime destination for budding entrepreneurs
            due to its bustling ecosystem teeming with investors, innovators,
            and visitors alike. Al Fattah Documents Clearing offers invaluable
            assistance in navigating the intricacies of establishing a company
            in this dynamic city. With expert guidance on market trends,
            governmental regulations, procedural intricacies, and budgetary
            considerations, our dedicated team ensures a seamless process from
            inception to fruition. Whether it's crafting a solid business plan,
            securing necessary permits, or facilitating networking
            opportunities, we're committed to empowering entrepreneurs to thrive
            in Dubai's vibrant entrepreneurial landscape. Trust Al Fattah Documents
            Clearing to be your trusted partner in turning your business
            aspirations into reality in the thriving metropolis of Dubai.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
            <img src={businessimg} alt="business-setup-img" className='img-fluid' />
            </div>
      </div>
    </div>
  );
};

export default Intro;
