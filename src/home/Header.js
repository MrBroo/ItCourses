import { Container } from "react-bootstrap"
function Header(){
    return(
    <div className="headeraa">
        <div className="headerColor">   
        <Container>
          <div className="row">
            <div className="headWrap col-lg-6 col-md-12 col-sm-12">
                <div>
                <div>       
                 <p className="headerText mb-0 text-white">We are Latin America’s and</p>
                 <div className="headerHr">
                 <hr className="mb-3 mt-2 text-white" />
                 </div>
               </div>
               <div className="mb-2">
                <p className="headerP text-white"> The href attribute requires a valid value to be accessible. <br />
                    a as the href value. If you provide a valid href, but still need<br />
                    button and change still need the element to resemble a link </p>
               </div>
               <div className="headButtonGroup">
               <div className="headClick">
                    <a class="connect text-decoration-none" href="#">
                        Sign Up
                    </a>
                </div>
                <div class="headClick mx-1.5">
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