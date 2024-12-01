import { useEffect, useState } from "react";


const Carousel = () => {

    const arr = [1,2,3,4,5,6];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex === arr.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex((prevIndex) => {
                    if (prevIndex === arr.length -1) {
                        return 0
                    }
                    return prevIndex + 1
                })
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div>
            <div>Carousel {currentIndex}</div>
            <div className="carousel-container">
                {arr.map(item => {
                    return <div className="carousel-item" style={{transform: `translate(-${currentIndex * 100}%)`}} key={item}>{item}</div>
                })}
            </div>
        </div>
    )
}

export default Carousel;