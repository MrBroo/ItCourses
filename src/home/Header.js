import imgTop from "../images/imageTop.png"
function Header(){
    return(
    <div className="headeraa">
          <div className="row">
            <div className="col-5 offset-1 d-flex align-items-center" style={{height: "92vh"}}>
                <div>
                <div>       
                 <p className="front-link mb-0 text-white">We are Latin America’s and</p>
                 <div style={{width: "58vh"}}>
                 <hr className="mb-3 mt-2 text-white" />
                 </div>
               </div>
               <div className="mb-2">
                <p className="text-white"> The href attribute requires a valid value to be accessible. Provide <br />
                    a as the href value. If you provide a valid href, but still need the <br />
                    button and change still need the element to resemble a link . If you </p>
               </div>
               <div className="d-flex">
               <div className="click" style={{marginRight: 20}}>
                    <a class="connect text-decoration-none" href="#">
                        Sign Up
                    </a>
                </div>
                <div class="click">
                    <a class="courseConnect text-decoration-none" href="#">
                        Courses
                    </a>
                </div>
                </div>
                </div>
            </div>
            <div className="headerImage col-4"> <img src={imgTop} /> </div>
          </div>
    </div>
    )
}
export default Header