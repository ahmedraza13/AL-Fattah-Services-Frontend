
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EntitiesCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

      
    ]
  };

  return (
    <div className="container entities-card-container mt-5">
      <div className="row"> {/* Center the card on small screens */}
          <h1  >We process the following Government entities for you:</h1>
          <Slider {...settings}>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">DUBAI CHAMBER</h5>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">DUBAI LAND DEPARTMENT</h5>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">TAWTEEN</h5>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">EMIRATES IDENTITY AUTHORITY</h5>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">TASHEEL</h5>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">AMER</h5>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">DUBAI MUNICIPILITY</h5>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">DUBAI DEVELOPMENT AUTHORITY</h5>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">MINISTRY OF EDUCATION</h5>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">MINISTRY OF ECONOMY</h5>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">TRAKHEES</h5>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
   
  );
};

export default EntitiesCard;
