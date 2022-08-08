import { useNavigate } from "react-router-dom";
import { Container, Spinner, Alert } from "reactstrap"
import axios from "axios";
import { useReducer, useState } from "react";
import Loader from "./Loader";

const ACTIONS = {
    USER_ADD: "user-add",
  };
  
  function reducer(state, action) {
    if (action.type === ACTIONS.USER_ADD) {
      state = {
        user: {
          ...state.user,
          [action.payload.key]: action.payload.value,
        },
      };
    }
    return state;
  }



function SignUp(){

    const navigate = useNavigate();
    const [loading , setLoading]= useState(false);
    const [text , setText]= useState("");
    const initialUser = {
        fullName: "",
        phone_number: "",
        username: "",
        password: "",
        user_role: "ADMIN"
    }

    const [state, dispatch] = useReducer(reducer, {user: initialUser})

    function getInputValues(e) {
        dispatch({
          type: ACTIONS.USER_ADD,
          payload: {
            key: e.target.name,
            value: e.target.value,
          },
        });
      }

    function addUser(){
        setLoading(true)
        axios.post("http://localhost:5852/api/itCourses/user/add", state.user).then((response)=>{
          
            if (response.data.status_code === 0)
                navigate("/userCourses")
        })
        .catch((error)=>{
          if(error.response.status === -101  || error.response.status === 400)
          setText(
           <div className="signUpAlert">Iltimos ma`lumotlarni to`g`ri to`ldiring</div> )
          setTimeout(()=> {
            setText(" ")
          }, 2000) 
          setLoading(false)
      })
      .catch((error)=>{
        if(error.response.status >= 500)
        setLoading(false)
    })
    }



    return(
        <div className="signWrapper">
        <div className="signBackColor">
        <Container>
            <div className="signContent">
                <div>
                        <h2 className="signLeft text-white">SignUp</h2>
                        <hr className="text-white" />
                        <p className="signUpText text-white">  The href attribute requires a valid value to be accessible. Provide <br />
                             a as the href value. If you provide a valid href, but still need the <br />
                             The href attribute requires a valid value to be accessible. Provide <br />
                             a as the href value. If you provide a valid href, but still need the <br />
                             button and change still need the element to resemble a link . If you </p>
                     </div>
                     
                     <div className="signUp">
                             <div>
                                 <h2 className="textsign text-center mt-3 mb-4">SignUp</h2>
                              </div>
                              {text}
                            <Container>
                            <div className="pb-2">
                            <div>
                           <input id="fullName" name="fullName" onChange={(e) => getInputValues(e)} placeholder="Ism" className="py-1 px-3" />
                           <input id="phone_number" name="phone_number" onChange={(e) => getInputValues(e)} placeholder="Telefon" className="py-1 px-3"  />
                           <input id="username" name="username" onChange={(e) => getInputValues(e)} placeholder="Username" className="py-1 px-3"  />
                           <input id="password" name="password" onChange={(e) => getInputValues(e)} placeholder="Parol" className="py-1 px-3"  />
                            </div>
                            </div>
                            <div>
                            <hr className="text-white" />
                            <div className="text-center text-white">Ro`yxatdan o`tganmisiz? 
                                <a href="/SignIn" className="text-decoration-none text-white mx-2">Sign In</a>
                            </div>
                            </div>
                            <div class="d-flex justify-content-end my-4">
                            {!loading && <button className="signButton" onClick={() => addUser()}>Sign Up</button>}
                            {loading && 
                              <button className="signButton" disabled>  
                              <Spinner size="sm" style={{marginRight: "5px"}}>Loading...</Spinner>Sign Up</button>}
                            </div>
                            </Container>
                     </div>
            </div>
            </Container>
            </div>
            </div>
    )

}
export default SignUp