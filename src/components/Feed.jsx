import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

const Feed = () => {

    const callApi = async () => {
        try {
            const response = await axios.get(BASE_URL + "users")
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
       callApi(); 
    },[])
    return (
        <>
        Feed component
        </>
    )
}

export default Feed;