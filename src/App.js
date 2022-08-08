import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./home/SignIn";
import SignUp from "./home/SignUp";
import UserCourses from "./home/UserCourses";

function App() {
  return (
   <>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/SignUp" element={<SignUp />} /> 
   <Route path="/SignIn" element={<SignIn />} />
   <Route path="/UserCourses" element={<UserCourses />} />
   </Routes>
   </>
  );
}

export default App;
