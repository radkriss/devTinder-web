import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar.jsx"
import Body from "./Body.jsx"
import Practice from "./practice/Practice.jsx"
import Carousel from "./practice/Carousel.jsx"
import CarouselOnClick from "./practice/CarouselOnClick.jsx"
import ThemeMode from "./practice/themeMode/index.jsx"
import StarRating from "./practice/starRating/index.jsx"
import QuizApp from "./practice/QuizApp/index.jsx"
import ProgressBar from "./practice/ProgressBar/index.jsx"
import Modal from "./practice/Modal/index.jsx"
import PasswordGenerator from "./practice/PasswordGenerator/index.jsx"
import PasswordValidation from "./practice/PasswordValidation/index.jsx"
import Pagination from "./practice/Pagination/index.jsx"
import InfiniteScroll from "./practice/InfiniteScroll/index.jsx"
import OtpLogin from "./practice/OtpLogin/index.jsx"
import NestedComments from "./practice/NestedComments/index.jsx"
import LikeButton from "./practice/LikeButton/index.jsx"
import Accordion from "./practice/Accordion/index.jsx"

function App() {

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />} >
          <Route path="/login" element={<div>Login page</div>} />
          <Route path="/test" element={<div>Test page</div>} />
          <Route path="/practice" element={<Accordion />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
