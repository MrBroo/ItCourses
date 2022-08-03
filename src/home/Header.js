import { Container } from "react-bootstrap"
function Header(){
    return(
    <div className="headeraa">
        <div className="headerColor">   
        <Container>
          <div className="row">
            <div className="headText col-lg-6 col-md-12 col-sm-12">
                <div>
                <div>       
                 <p className="front-link mb-0 text-white">We are Latin America’s and</p>
                 <div style={{width: "58vh"}}>
                 <hr className="mb-3 mt-2 text-white text-center" />
                 </div>
               </div>
               <div className="mb-2">
                <p className="text-white"> The href attribute requires a valid value to be accessible. Provide <br />
                    a as the href value. If you provide a valid href, but still need the <br />
                    button and change still need the element to resemble a link . If you </p>
               </div>
               <div className="headButtonGroup">
               <div className="headClick">
                    <a class="connect text-decoration-none" href="#">
                        Sign Up
                    </a>
                </div>
                <div class="headClick">
                    <a class="courseConnect text-decoration-none" href="#">
                        Courses
                    </a>
                </div>
                </div>
                </div>
            </div>
          </div>
        </Container>
    </div>
</div>
    )
}
export default Header