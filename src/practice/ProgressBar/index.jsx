import { useEffect, useState } from "react";
import Bar from "./bar";
const ProgressBar = () => {

    const [progressCount, setProgressCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setProgressCount((progressCount) => {
                return (progressCount + 1)
            })
        }, 100)
    }, [])

    return (
        <div>
            <div>Progress Bar</div>
            <Bar value={progressCount}/>
        </div>
    )
}

export default ProgressBar;