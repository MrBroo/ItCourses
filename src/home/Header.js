import { Container, Row, Col } from "react-bootstrap"

function Header(){
    return(
    <div className="headeraa d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-5 offset-1">
                <div>       
                 <p className="front-link">We are Latin America’s leading business and login for you</p>
               </div>
               <div class="click">
                    <a class="connect text-decoration-none" href="#">
                        Obuna bo`lish
                    </a>
                </div>
            </div>
            <div className="headerImage col-6"></div>
          </div>
    </div>
    )
}
export default Header