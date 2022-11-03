import InfoMenu from "./infoMenu";
import khachhang from "./img/khach-hang.gif";
import recommend from "./img/customer_recommend_vie_1557050487.png"

function Info3 (){
    return(
        <div className="grid">
            <InfoMenu/>

            <div className="app-container__content info-app-container__content">
                <div className="info3-content__body">
                    <div className="info3-content__body-banner">
                        <div className="info3-content__body-banner-img-box">
                            <img src={khachhang} alt="" className="info3-content__body-banner-img"/>
                        </div>                           
                    </div>

                    <div className="info3-content__body-feedback">
                        <img src={recommend} alt="" className="info3-content__body-feedback-img"/>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default Info3;