import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { useNavigate, Outlet } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "user", { withCredentials: true});
      console.log(res.data);
      dispatch(addUser(res.data));
    } catch(error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.log(error);
    }
    
  }

  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, [])

  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body