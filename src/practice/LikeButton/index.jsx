import { useEffect, useState } from "react"
import "./style.css"

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const test = localStorage.getItem("test");

        if (test) {
            console.log("Already available: ", test)
        } else {
            console.log("Not available")
            localStorage.setItem("test", "Mamae !")
        }
    }, [])

    return (
        <div className="likeDiv">
            <input type="button" value="Like" onClick={() => setLiked(!liked)} className={liked ? "liked" : "static"} />
        </div>
    )
}

export default LikeButton;