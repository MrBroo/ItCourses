import { Container, Button, Input } from "reactstrap"
import { TextField } from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle';
function SignUp(){
    return(
        <div className="signWrapper">
        <div className="signBackColor">
        <Container>
            <div style={{height: "100vh"}} className="d-flex justify-content-between align-items-center">
                <div>
                        <h3 className="text-white">SignUp</h3>
                        <hr className="text-white" />
                        <p className="text-white">  The href attribute requires a valid value to be accessible. Provide <br />
                             a as the href value. If you provide a valid href, but still need the <br />
                             The href attribute requires a valid value to be accessible. Provide <br />
                             a as the href value. If you provide a valid href, but still need the <br />
                             button and change still need the element to resemble a link . If you </p>
                     </div>
                     <div className="signUp">
                             <div>
                                 <h2 className="textsign text-center mt-3 mb-4">SignUp</h2>
                            </div>
                            <Container>
                            <div className="pb-2">
                            <div>
                           <input placeholder="Ism" className="py-1 px-3" />
                           <input placeholder="Telefon" className="py-1 px-3"  />
                           <input placeholder="Username" className="py-1 px-3"  />
                           <input placeholder="Parol" className="py-1 px-3"  />
                            </div>
                            </div>
                            <div>
                            <hr className="text-white" />
                            <div className="text-center text-white">Ro`yxatdan o`tganmisiz? 
                                <a href="/SignIn" className="text-decoration-none text-white mx-2">Sign In</a>
                            </div>
                            </div>
                            <div class="d-flex justify-content-end my-4">
                                <button className="signButton">Ro`yxatdan o`tish</button>
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