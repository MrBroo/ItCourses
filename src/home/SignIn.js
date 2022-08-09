import axios from "axios";
import { useState } from "react";
import { Container, Spinner } from "reactstrap"
import { useNavigate } from "react-router-dom";

function SignIn() {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("");

    const navigate = useNavigate();


    function login() {
        setLoading(true)
        axios
            .post("http://localhost:5852/api/itCourses/user/login", { username, password })
            .then((response) => {
               
                if (response.data.status_code === 0) {
                    localStorage.setItem("token", response.data.data);
                    navigate("/userCourses");
                }
            }).catch((error) => {
                if (error.response.status === -101 || error.response.status === 400)
                    setText(
                        <div className="d-flex justify-content-center">
                            <div className="signInAlert">Bu user topilmadi</div>
                        </div>
                    )
                setTimeout(() => {
                    setText(" ")
                }, 4000)
                setLoading(false)
            })
            .catch((error) => {
                if (error.response.status >= 500)
                    setLoading(false)
            })
    }

    return (
        <div className="signInWrapper">
            <div className="signInBackColor">
                <div className="signIn">
                    <div>
                           {text}
                        <div className="signInWork">
                            <Container>
                                <div>
                                    <h3 className="text-center text-white pt-2 pb-3">Sign In</h3>
                                    <div className="mb-1">
                                        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="py-2 px-3" />
                                    </div>
                                    <div>
                                        <input placeholder="Parol" onChange={(e) => setPassword(e.target.value)} className="py-2 px-3" />
                                    </div>
                                </div>
                                <div className="pb-4 mt-2">
                                    {!loading && <button className="signInButton" onClick={() => login()}>Sign In</button>}
                                    {loading &&
                                        <button className="signInButton" disabled>
                                            <Spinner size="sm" style={{ marginRight: "5px" }}>Loading...</Spinner>Sign In</button>}
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