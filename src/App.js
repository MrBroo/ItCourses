import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./home/SignIn";
import SignUp from "./home/SignUp";

function App() {
  return (
   <>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/SignUp" element={<SignUp />} /> 
   <Route path="/SignIn" element={<SignIn />} />
   </Routes>
   </>
  );
}

export default App;
