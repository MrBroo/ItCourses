import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards(){
    return(
        <>
        <div>
            <h3 className="courses mt-5">
                Courses
            </h3>
        </div>
    <Row xs={1} md={2} lg={4} className="g-4 mt-3 d-flex justify-content-center">
        <Col>
            <div class="card">
                <div class="name">Simple</div>
                <div className="d-flex justify-content-center">
                <img alt="Card image" src="https://picsum.photos/300/200" />
                </div>
                <div class="soqqa">99.000 UZS</div>
                <div class="oy">Har 1 oyda to`lov</div>
                <div class="zeus">
                    <div class="cardtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa
                        cumque
                        dignissimos, distinctio, eligendi et facilis id laboriosam libero mollitia praesentium quos
                        tempora
                        veniam.
                        Eaque provident quibusdam repellendus similique vitae!
                    </div>
                </div>
                <div class="click">
                    <a class="obuna text-decoration-none" href="#">
                        Obuna bo`lish
                    </a>
                </div>
            </div>
            <div class="text1"></div>
        </Col>
        <Col>
            <div class="card">
                <div class="name">Middle</div>
                <div className="d-flex justify-content-center">
                <img alt="Card image" src="https://picsum.photos/300/200" />
                </div>
                <div class="soqqa">269.000 UZS</div>
                <div class="oy">Har 3 oyda to`lov</div>
                <div class="zeus">
                    <div class="cardtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa
                        cumque
                        dignissimos, distinctio, eligendi et facilis id laboriosam libero mollitia praesentium quos
                        tempora
                        veniam.
                        Eaque provident quibusdam repellendus similique vitae!
                    </div>
                    <div class="tafsiya">Tafsiya etiladi</div>
                </div>
                <div class="click">
                    <a class="obuna text-decoration-none" href="#">
                        Obuna bo`lish
                    </a>
                </div>
            </div>
            <div class="text1"></div>
        </Col>
        <Col>
            <div class="card">
                <div class="name">Edvanced</div>
                <div className="d-flex justify-content-center">
                <img alt="Card image" src="https://picsum.photos/300/200" />
                </div>
                <div class="soqqa">499.000 UZS</div>
                <div class="oy">Har 6 oyda to`lov</div>
                <div class="zeus">
                    <div class="cardtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa
                        cumque
                        dignissimos, distinctio, eligendi et facilis id laboriosam libero mollitia praesentium quos
                        tempora
                        veniam.
                        Eaque provident quibusdam repellendus similique vitae!
                    </div>
                </div>
                <div class="click">
                    <a class="obuna text-decoration-none" href="#">
                        Obuna bo`lish
                    </a>
                </div>
            </div>
            <div class="text1"></div>
        </Col>
    </Row>
    </>
    )
}
export default Cards