import { Container, Button, Input } from "reactstrap"
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
                            <div className="pb-3">
                                <Input placeholder='Ism' style={{
                                     backgroundColor: "#ced9ee2d", boxShadow: "0 0 15px lightsteelblue",
                                      color: "white"}} className="signInput"/>
                                </div>  
                                <div className="pb-3">
                                <Input placeholder='Telefon'  style={{
                                     backgroundColor: "#ced9ee2d", boxShadow: "0 0 15px lightsteelblue",
                                      color: "white"}} className="signInput" />
                                </div>
                                <div className="pb-3">
                                <Input placeholder='Username'  style={{
                                     backgroundColor: "#ced9ee2d", boxShadow: "0 0 15px lightsteelblue",
                                      color: "white"}} className="signInput" />
                                </div>
                                <div className="pb-3">
                                <Input placeholder='Parol'  style={{
                                     backgroundColor: "#ced9ee2d", boxShadow: "0 0 15px lightsteelblue",
                                      color: "white", border: "2px solid #ced9ee2d"}}/>
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