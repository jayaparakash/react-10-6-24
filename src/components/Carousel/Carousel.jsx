export const Carousel = ()=>{
    return(
        <>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img height={'350px'} width={'100%'} src="https://images.pexels.com/photos/1259827/pexels-photo-1259827.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img height={'350px'} width={'100%'} src="https://images.pexels.com/photos/39366572/pexels-photo-39366572.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img height={'350px'} width={'100%'} src="https://images.pexels.com/photos/33662598/pexels-photo-33662598.jpeg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}