import {Link} from 'react-router-dom'
import banner1 from "./img/banner-index-1.png"
import banner2 from "./img/banner-index-2.png"
import banner3 from "./img/banner-index-3.png"
import banner4 from "./img/banner-index-4.png"
import banner5 from "./img/banner-index-5.png"
import banner6 from "./img/banner-index-6.png"

function Home (){
    const bannerUrl = [banner1, banner2, banner3, banner4, banner5, banner6]
    return( 
        <div className="grid">
                {/* banner nếu active add : app-container__banner-img--active  */}
                <div className="app-container__banner">
                    <img src={banner1} alt="" className="app-container__banner-img app-container__banner-img-js app-container__banner-img--active"/>
                    {
                        bannerUrl.map((itemUrl)=>(
                            <img src={itemUrl} alt="" className="app-container__banner-img app-container__banner-img-js"/>
                        ))
                    }
                     
                    <div className="list-dot">
                        {
                            bannerUrl.map((itemUrl)=>(
                                <i className="fa-solid fa-circle dot-icon" ></i>
                            ))
                        }
                    </div>
                </div>

        </div>
    )
}

export default Home;