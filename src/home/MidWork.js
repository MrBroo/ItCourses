import telegram from "../images/tg.png"
import youTube from "../images/you tube.png"
import instagram from "../images/instaorginal.png"
import facebook from "../images/face.png"
import { Container } from "reactstrap"
function MidWork(){
    return(
      <div className="midWork d-flex justify-content-center">
        <div className="midWorkSocial">
        <Container>
          <div className="row d-flex justify-content-between align-items-center">
                   
            <div className="col-5 offset-1">
                <p className="midText m-0">
                    Bizni ijtimoiy <br /> tarmoqlarda kuzating
                </p>
            </div>
            <div className="col-4">
            <img src={telegram} />
                <img src={instagram} height="23" width="24" className="mx-4"/>
                <img src={facebook} height="23" width="24"/>
                <img src={youTube} height="21" width="28" class="mx-4" />
            </div>
         </div>
         </Container>
         </div>
    </div>
    
    )
}
export default MidWork