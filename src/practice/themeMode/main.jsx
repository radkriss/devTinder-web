import themeContext from "./themeContext"
import { useContext } from "react"

const Main = () => {

    const {theme, setTheme} = useContext(themeContext);
    return (
        <div>
            <div className={theme ? "light" : "black"}>Main content</div>
            <input type="checkbox" value={theme} onChange={() => setTheme(!theme)}/>
        </div>
    )
}

export default Main;