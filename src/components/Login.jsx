import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("radkriss@gmail.com");
    const [password, setPassword] = useState("kohli@24");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginClick = async () => {
        // Validate if needed
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email, password
            }, {withCredentials: true})
            console.log(response.data);
            dispatch(addUser(response.data));
            navigate("/");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <div className="w-[50%] bg-slate-500 m-auto rounded flex flex-col gap-2">
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className="w-[40%] bg-slate-300 border-black" />
                <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} className="w-[40%] bg-slate-300 border-black" />
                <input type="button" onClick={loginClick} value={"Login"} className="cursor-pointer bg-blue-600 w-[30%]" />
            </div>
        </div>
    )
}

export default Login;