
import Main from "./main";
import themeContext from "./themeContext";
import {useState} from "react"

const ThemeMode = () => {

    const [theme, setTheme] = useState(false);
    return (
        <div>
            <themeContext.Provider value={{theme, setTheme}}>
                <Main />
            </themeContext.Provider>

        </div>
    )
}

export default ThemeMode;