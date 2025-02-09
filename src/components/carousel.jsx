import React from 'react';

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" >
            <div className="carousel-item active">
                <img src="/img/Bitmap (1).png" className="d-block " alt="Man Smiling" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>No Hassels</h5>
                    <p>Streamline your access effortlessly.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/img/Bitmap (2).jpg" className="d-block " alt="Woman Working On Laptop" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Ease of Use</h5>
                    <p>Streamline your access effortlessly.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/img/Bitmap (3).jpg" className="d-block " alt="Woman Walking and Smiling" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Accessibility</h5>
                    <p>Seamless experiences await.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
);
};

export default Carousel;