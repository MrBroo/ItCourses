import { Container, Button, Input } from "reactstrap"
function SignUp(){
    return(
            <div style={{height: "100vh"}} className="d-flex justify-content-center align-items-center">
                     <div className="SignUp">
                             <div>
                                 <h2 className="textsign text-center mt-3 mb-4">SignUp</h2>
                            </div>
                            <Container>
                            <div className="pb-3">
                                <Input placeholder='Ism'/>
                                </div>  
                                <div className="pb-3">
                                <Input placeholder='Telefon' />
                                </div>
                                <div className="pb-3">
                                <Input placeholder='Username' />
                                </div>
                                <div className="pb-3">
                                <Input placeholder='Parol' />
                            </div>
                            <div class="d-flex justify-content-end my-4">
                                <Button>Ro`yxatdan o`tish</Button>
                            </div>
                            </Container>
                     </div>
            </div>
    )

}
export default SignUp