import banneroneimg from '../../Images/slider-img-one.png'
import bannertwoimg from '../../Images/slider-img-two.jpg'
import bannerthreeimg from '../../Images/slider-img-three.jpg'

const Slider = () => {
    return (
      <div
      id="carouselExampleInterval"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={2000}>
          <img src={banneroneimg} className="d-block w-100" alt="..."  height={500}/>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src={bannertwoimg} className="d-block w-100" alt="..." height={500} />
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src={bannerthreeimg} className="d-block w-100" alt="..." height={500}/>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
    

    )
}

export default Slider