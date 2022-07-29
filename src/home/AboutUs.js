import { Container } from "react-bootstrap"
import aboutImg from "../images/architecture.jpg"

function AboutUs(){
    return(
<div className="about">
    <Container>
        <h3 className="text-center pt-4">About Us</h3>
<div className="row">
    <div className="col-5">
<img src={aboutImg} className="aboutImg" />
    </div>
    <div className="col-6">
        <p>The href attribute requires a valid value to be accessible. Provide <br />
            a as the href value. If you provide a valid href, but still need the <br />
            The href attribute requires a valid value to be accessible. Provide <br />
            a as the href value. If you provide a valid href, but still need the <br />
            The href attribute requires a valid value to be accessible. Provide <br />
            a as the href value. If you provide a valid href, but still need the <br />
            </p>
    </div>
</div>
</Container>

</div>
    )
}
export default AboutUs