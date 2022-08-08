import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

function SignIn() {

    
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  
  function login() {
    axios
      .post("http://localhost:5852/api/itCourses/user/login", { username, password })
      .then((response) => {
        setText(response.data.message);
        if (response.data.status_code === 0) {
          localStorage.setItem("token", response.data.data);
          navigate("/userCourses");
        }     
      });
  }

    return (
        <div className="signInWrapper">
            <div className="signInBackColor">
                <div className="signIn">
                    <div>
                        <div className="signInWork">
                            <Container>
                                <div>
                                    <h3 className="text-center text-white pt-2 pb-3">Sign In</h3>
                                    <div className="mb-1">
                                        {text}
                                        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="py-2 px-3" />
                                    </div>
                                    <div>
                                        <input placeholder="Parol" onChange={(e) => setPassword(e.target.value)} className="py-2 px-3" />
                                    </div>
                                </div>
                                <div className="pb-4 mt-2">
                                    <a class="signInButton text-decoration-none" href="#" onClick={() => login()}>
                                        Obuna bo`lish
                                    </a>
                                </div>
                            </Container>
                        </div>
                        <div className="mx-2 text-white text-center mt-3">Akauntingiz yoqmi?
                            <a href="/SignUp" className="text-decoration-none text-white mx-2">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn