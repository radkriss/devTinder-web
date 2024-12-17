import { useState } from "react";
import "./style.css"

const Calculator = () => {

    const [value, setValue] = useState("");

    return (
        <div className="calContainer">
            <div>
                <input type="text" value={value} />
            </div>
            <div>
                <input type="button" value="AC" onClick={() => setValue("")}/>
                <input type="button" value="DE" onClick={() => setValue(value.toString().slice(0, -1))}/>
                <input type="button" value="(" onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value=")" onClick={(e) => setValue(value + "" + e.target.value)}/>
            </div>
            <div>
                <input type="button" value="7" onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value="8" onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value="9" onClick={(e) => setValue(value + "" + e.target.value)} />
                <input type="button" value="/" onClick={(e) => setValue(value + "" + e.target.value)} />
            </div>
            <div>
                <input type="button" value="4" onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value="5" onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value="6" onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value="*" onClick={(e) => setValue(value + "" + e.target.value)}/>
            </div>
            <div>
                <input type="button" value="1" onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value="2" onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value="3" onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value="-" onClick={(e) => setValue(value + "" + e.target.value)}/>
            </div>
            <div>
                <input type="button" value="0" onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value="." onClick={(e) => setValue(value + "" + e.target.value)}/>
                <input type="button" value="=" onClick={() => setValue(eval(value))}/>
                <input type="button" value="+" onClick={(e) => setValue(value + "" + e.target.value)}/>
            </div>
        </div>
    )
}

export default Calculator;