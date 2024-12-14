import { useEffect, useRef, useState } from "react"

const OtpSection = ({length, otpSubmit}) => {
    const [otpInput, setOtpInput] = useState(new Array(length).fill(""));
    const otpRef = useRef([]);

    const onInputChange = (value, index) => {
        // check if number
        if (isNaN(value)) return;
        let newOtp = [...otpInput];

        // take the latest value entered
        newOtp[index] = value.substring(value.length - 1);
        setOtpInput(newOtp);

        //submit otp
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length == length) {
            otpSubmit(combinedOtp);
        }

        // move to next input
        if (value && index !== length - 1) {
            otpRef.current[index + 1].focus();
        }
    }

    const handleClick = (index) => {
        otpRef.current[index].setSelectionRange(1,1);
    }

    useEffect(() => {
        if (otpRef.current[0]) {
            otpRef.current[0].focus();
        }
    }, [])

    return (
        <div style={{display: "flex"}}>
            {
                otpInput.map((otp, index) => {
                    return (
                        <input 
                            key={index}
                            type="text" 
                            className="inputBox"
                            value={otpInput[index]} 
                            ref={(input) => otpRef.current[index] = input} 
                            onChange={(e) => onInputChange(e.target.value, index)} 
                            onClick={() => handleClick(index)}/>
                    )
                })
            }
        </div>
    )
}

export default OtpSection;