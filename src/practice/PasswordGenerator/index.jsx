import { useState } from "react"


const PasswordGenerator = () => {

    const [lengthOfPwd, setLengthOfPwd] = useState("");
    const [isUpperCase, setIsUpperCase] = useState(true);
    const [isLowerCase, setIsLowerCase] = useState(true);
    const [useSymbol, setUseSymbol] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState("");

    const generatePassword = () => {
        const arr = [];
        if (isUpperCase) {
            arr.push("ABCDEFGHIJKLMNOPQRSTUWXYZ")
        }
        if (isLowerCase) {
            arr.push("abcdefghijklmnopqrstuvwxyz")
        }
        if (useSymbol) {
            arr.push("~!@#$%^&*()<>?:")
        }
        if (useNumbers) {
            arr.push("0123456789")
        }
        let pwd = "";
        for (let i=0;i<lengthOfPwd;i++) {
            let aValue = Math.floor(Math.random() * arr.length);
            let sl = arr[aValue];
            let sValue = Math.floor(Math.random() * sl.length);
            pwd = pwd + sl[sValue];
        }
        setGeneratedPassword(pwd);
    }

    return (
        <div>
            <div style={{display: "flex"}}>
                <label>Length</label>
                <input style={{padding: "5px"}} type="text" value={lengthOfPwd} onChange={(e) => setLengthOfPwd(e.target.value)}/>
            </div>
            <div style={{display: "flex"}}>
                <label>Uppercase ? </label>
                <input type="checkbox" checked={isUpperCase} onClick={() => setIsUpperCase(!isUpperCase)}/>
            </div>
            <button onClick={generatePassword}>Generate Password</button>
            {generatedPassword && <div>
                Generated Password : {generatedPassword}
            </div>}
        </div>
    )
}

export default PasswordGenerator;