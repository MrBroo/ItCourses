import tel from "../images/tel.png"
import mail from "../images/pochta.png"
import telegram from "../images/tg.png"
import youTube from "../images/you tube.png"
import instagram from "../images/instaorginal.png"
import facebook from "../images/face.png"
function Footer(){
    return(
        <div class="footer">
    <div class="container">
        <div class="row pt-4">
            <div class="col-lg-5 col-md-6 offset-md-1 offset-lg-0 mx-2">
                <h5 class="text-white ">Адрес</h5>
                <p class="text-white">Головной офис Solidity Group: г. Ташкент, <br />
                    Яккасарайский р-н, ул. Ш.Руставели, 25 <br />
                    Адрес ЖК O’zbegim: г. Ташкент, Яккасарайский р-н, <br />
                    пересечение улиц Бабура и Нукусской</p>
            </div>
            <div class="col-lg-3 col-md-5 mx-2">
                <h5 class="text-white ">Телефон</h5>
                <div class="text-white"><span><img src={tel} alt="alt" height="18" width="17" class="mx-1"/></span>+998 90 009-00-09</div>
                <div class="text-white"><span><img src={tel} alt="alt" height="18" width="17" class="mx-1"/></span>+998 95 511-00-09 <br />
                </div>
                <p class="text-white"><span class="mx-1"><img src={mail} height="17" width="23"/></span>
                    itcoursesuz@gmail.com
                </p>
            </div>
            <div class="col-lg-3 col-md-11 offset-md-1 offset-lg-0 mx-2">
                <h5 class="text-white">Мы в социальных сетях</h5>
                <p class="text-white">Подписывайтесь на наши каналы:</p>
                <div class="d-flex">
                <img src={telegram} />
                <img src={instagram} height="21" width="22" className="mx-4"/>
                <img src={facebook} height="21" width="22"/>
                <img src={youTube} height="18" width="25" class="mx-4" />
                
                </div>
            </div>
        </div>
        <hr class="bg-white" />
        <p class="text-white mx-2">Информация на сайте предоставлена в ознакомительных целях <br />
            Для я более точной информации  обратитесь к менеджерам компании</p>
    </div>
</div>
    )
}
export default Footer