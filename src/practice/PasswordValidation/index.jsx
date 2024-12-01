import { useState } from "react";

const PasswordValidation = () => {

    const [pwd, setPwd] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [pwdValidationList, setPwdValidationList] = useState([]);

    const onHandlePwdChange = (e) => {
        const newPassword = e.target.value;
        setPwd(newPassword);
        let validationErrorList = [];
        if (newPassword.length < 8) {
            validationErrorList.push("Password should contain atleast 8 characters")
        }
        if (!newPassword.match(/[a-z]/)) {
            validationErrorList.push("Password should contain atleast one lowercase letter")
        }
        if (!newPassword.match(/[A-Z]/)) {
            validationErrorList.push("Password should contain atleast one uppercase letter")
        }
        if (!newPassword.match(/[0-9]/)) {
            validationErrorList.push("Password should contain atleast one numeric value")
        }
        setPwdValidationList(validationErrorList);
    }

    const onHandleEmailChange = (e) => {
        setEmail(e.target.value);
        let emailpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const emailTest = emailpattern.test(e.target.value);
        setValidEmail(emailTest)
    }

    return (
        <div>
            <div style={{margin: "5px", background: "white"}}>
                <label style={{padding: "5px"}}>Email</label>
                <input style={{padding: "5px"}} type="email" value={email} onChange={(e) => onHandleEmailChange(e)} />
                <span>{validEmail ? "true": "false"}</span>
            </div>
            <div style={{margin: "5px", background: "white"}}>
                <label style={{padding: "5px"}}>Password</label>
                <input style={{padding: "5px"}} type={showPassword ? "textbox" : "password"} value={pwd} onChange={(e) => onHandlePwdChange(e)} />
                <button style={{padding: "5px"}} onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide " : "Show "} Password</button>
            </div>
            {pwd.length > 0 && <div>
                {pwdValidationList.length > 0 && pwdValidationList.map(item => {
                    return (
                        <div key={item}>{item}</div>
                    )
                })}
            </div>}
        </div>
    )
}

export default PasswordValidation;