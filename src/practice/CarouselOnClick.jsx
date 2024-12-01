import { useEffect, useState } from "react";


const CarouselOnClick = () => {

    const arr = [1,2,3,4,5,6];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(arr.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const nextClick = () => {
        if (currentIndex === arr.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }
    
    return (
        <div>
            <div>Carousel {currentIndex}</div>
            <div className="carousel-container">
                {arr.map(item => {
                    return <div className="carousel-item" style={{transform: `translate(-${currentIndex * 100}%)`}} key={item}>{item}</div>
                })}
            </div>
            <input className="btn-prim" type="button" value="Prev" onClick={prevClick} />
            <input className="btn-prim" type="button" value="Next" onClick={nextClick} />
        </div>
    )
}

export default CarouselOnClick;