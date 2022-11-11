import InfoMenu from "../infoMenu";
import "./info1.css"
import info1 from "../img/story_web_1570017889.jpg"

function Info1 (){
    return(
        <div className="grid">
            <InfoMenu/>

            <div className="app-container__content info-app-container__content">
                <div className="info1-content__body">
                    <img src={info1} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Info1;