import "./homeBanner.css"
import banner1 from "../img/banner-index-1.png"
import {Link} from 'react-router-dom'

function HomeBanner ({bannerUrls}){
    return(
        // banner nếu active add : app-container__banner-img--active 
        <div className="app-container__banner">
            <img src={banner1} alt="" className="app-container__banner-img app-container__banner-img-js app-container__banner-img--active"/>

            {
                bannerUrls.map((itemUrl,index)=>(
                    <img src={itemUrl} key={index} alt="" className="app-container__banner-img app-container__banner-img-js"/>
                ))
            }
            
            <div className="list-dot">
                {
                    bannerUrls.map((itemUrl,index)=>(
                        <i key={index} className="fa-solid fa-circle dot-icon" />
                    ))
                }
            </div>
        </div>
    )
}

export default HomeBanner;