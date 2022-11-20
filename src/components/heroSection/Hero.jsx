import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="container">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg"
                class="d-block w-100"
                alt="img1"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg"
                class="d-block w-100"
                alt="img2"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-600w-577160911.jpg"
                class="d-block w-100"
                alt="img3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero