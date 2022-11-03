import InfoMenu from "./infoMenu";
import local1 from "./img/local1.png"
import local2 from "./img/local2.png"
import local3 from "./img/local3.jpg"

function Info2 (){
    return(
        <div className="grid">
            <InfoMenu/>

            <div className="app-container__content info-app-container__content">
                <div className="info2-content__body">
                    <ul className="info2-content__body--list">

                        <li className="info2-content__body--item">
                            <div className="info2-content__body--item-img-box">
                                <img src={local1} alt="" className="info2-content__body--item-img"/>
                            </div>
                            <div className="info2-content__body--item-label">
                                <h3 className="info2-content__body--item-header">Le Monde Steak Hà Nội 1</h3>
                                <a href="" className="info2-content__body--item-link">Trần Đại Nghĩa, Hai Bà Trưng, Hà Nội</a>
                                <a href="" className="info2-content__body--item-link">0123456789</a>
                                <a href="https://goo.gl/maps/qFevSHXkdFYBa6o28" target="_blank" className="button-base info2-content__body--item-button">Đường đi</a>
                            </div>
                        </li>

                        <li className="info2-content__body--item">
                            <div className="info2-content__body--item-img-box">
                                <img src={local2} alt="" className="info2-content__body--item-img"/>
                            </div>
                            <div className="info2-content__body--item-label">
                                <h3 className="info2-content__body--item-header">Le Monde Steak Hà Nội 2</h3>
                                <a href="" className="info2-content__body--item-link">Phố Vọng, Hai Bà Trưng, Hà Nội</a>
                                <a href="" className="info2-content__body--item-link">0123456789</a>
                                <a href="https://goo.gl/maps/qFevSHXkdFYBa6o28" target="_blank" className="button-base info2-content__body--item-button">Đường đi</a>
                            </div>
                        </li>

                        <li className="info2-content__body--item">
                            <div className="info2-content__body--item-img-box">
                                <img src={local3} alt="" className="info2-content__body--item-img"/>
                            </div>
                            <div className="info2-content__body--item-label">
                                <h3 className="info2-content__body--item-header">Le Monde Steak Hà Nội 3</h3>
                                <a href="" className="info2-content__body--item-link">Định Công Hạ, Phương Mai, Hà Nội</a>
                                <a href="" className="info2-content__body--item-link">0123456789</a>
                                <a href="https://goo.gl/maps/qFevSHXkdFYBa6o28" target="_blank" className="button-base info2-content__body--item-button">Đường đi</a>
                            </div>
                        </li>

                    </ul>
                </div>
                    
            </div>
        </div>
    )
}

export default Info2;