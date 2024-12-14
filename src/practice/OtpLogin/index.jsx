import { useState } from "react";
import OtpSection from "./OtpSection";
import "./style.css";

const OtpLogin = () => {

    const [number, setNumber] = useState("");
    const [showOtp, setSHowOtp] = useState(false);

    const submitNumber = () => {
        if (number.length !== 10 || !/^[0-9]/.test(number)) {
            alert("Invalid number !");
            return
        }
        setSHowOtp(true)
    }

    const otpSubmit = (value) => {
        console.log("Login successful !")
    }

    return (
        <div>
            <div>Otp Login</div>
            {!showOtp && 
            <form action="submit" onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
                <input type="button" value="Submit" onClick={submitNumber} />
            </form>}
            {showOtp && 
            <OtpSection length={4} otpSubmit={otpSubmit}/>}
        </div>
    )
}

export default OtpLogin;