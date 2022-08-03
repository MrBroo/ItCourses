import { Container } from "react-bootstrap"

function SignIn() {
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
                                        <input placeholder="Username" className="py-2" />
                                    </div>
                                    <div>
                                        <input placeholder="Parol" className="py-2" />
                                    </div>
                                </div>
                                <div className="pb-4 mt-2">
                                    <a class="signInButton text-decoration-none" href="#">
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