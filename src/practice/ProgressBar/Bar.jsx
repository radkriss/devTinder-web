import { useEffect, useState } from "react";

const Bar = ({value = 0}) => {

    const [progressValue, setProgressValue] = useState(value);

    useEffect(() => {
        setProgressValue(Math.min(100, Math.max(value, 0)))
    }, [value])
    return (
        <div className="progressBar">
            <span style={progressValue < 49 ? {color: "black"} : {color: "white"}} >{progressValue}%</span>
            <div style={{width: `${progressValue}%`}} className="colorStatus"></div>
        </div>
    )
}

export default Bar;