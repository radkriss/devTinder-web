import {useState} from "react"

const StarRating = () => {

    const [rating, setRating] = useState(0);

    let config = {
        count: 5
    }

    let starCount = new Array(config.count);
    starCount.fill("");

    return (
        <div className="starContainer">
            {starCount && starCount.map((item, index) => {
                return <div className={rating >= index + 1 ? `star${index + 1} tick` : `star${index + 1}`} onClick={() => setRating(index + 1)}></div>
            })}
        </div>
    )
}

export default StarRating;