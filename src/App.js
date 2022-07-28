import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import SignUp from "./home/SignUp";

function App() {
  return (
   <>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/SignUp" element={<SignUp />} /> 
   </Routes>
   </>
  );
}

export default App;
