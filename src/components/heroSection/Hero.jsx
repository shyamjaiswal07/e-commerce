import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-100" style={{marginTop:"-105px",zIndex:'220'}} > 
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg"
                className="d-block w-100 img-fluid"
                alt="img1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg"
                className="d-block w-100 img-fluid"
                alt="img2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-600w-577160911.jpg"
                className="d-block w-100 img-fluid"
                alt="img3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
