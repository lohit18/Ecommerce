import React, { useState } from 'react';

const Slider = ()=> {
    const images = ["/assets/Slides/img-5.jpg", "/assets/Slides/img-2.jpg", "/assets/Slides/img-3.jpg", "/assets/Slides/img-4.jpg", "/assets/Slides/img-1.jpg", "/assets/Slides/img-6.jpg", "/assets/Slides/img-7.jpg", "/assets/Slides/img-8.jpg", "/assets/Slides/img-9.jpg"];

    const [currentIndex, setCurrentIndex] = useState(0);

    const updateImage = (index) => {
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % images.length;
        updateImage(newIndex);
    };

    return (
        <div className="slider-container">
            
            <div className="image-container">
                <button className="prev-button" onClick={handlePrev}>Previous</button>
                <img src={images[currentIndex]} alt="Slider" className="slider-image" />
                <button className="next-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Slider;
