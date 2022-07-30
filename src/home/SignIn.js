function SignIn(){
    return(
<div className="signInWrapper">
<div className="signInBackColor">
<div className="signIn d-flex justify-content-center align-items-center">
<div>
    <div className="signInWork">
        <div className="px-4">
    <h3 className="text-center text-white pt-2 pb-3">Sign In</h3>
    <div className="mb-1">
    <input placeholder="Username" className="py-2 px-2"  />
    </div>
    <div>
    <input placeholder="Parol" className="py-2 px-2"  />
    </div>
        </div>
        <div className="pb-4 px-4 mt-2">
        <a class="signInButton text-decoration-none" href="#">
                     Obuna bo`lish
        </a>
        </div>
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