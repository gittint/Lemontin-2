import {Link} from 'react-router-dom'
import banner from "./img/banner_info_3_1557571349.jpg"

function InfoMenu (){
    return(
        <>
            {/* Banner  */}
            <div className="app-container__banner">
                <img src={banner} alt="" className="app-container__banner-img"/>
            </div>

            {/* base menu  nếu active : menu-base--item menu-base--item--active*/}
            <div className="app-container__content info-app-container__content">
                <div className="menu-base">
                    <ul className="menu-base--list">
                        <Link to="/info-1" className="menu-base--item">
                            <div className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-solid fa-scroll"></i>
                                </div>
                                <div className="menu-base--label">Câu chuyện về chúng tôi</div>
                            </div>
                        </Link>
                        
                        <Link to="/info-2" className="menu-base--item">
                            <div className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-solid fa-house"></i>
                                </div>
                                <div className="menu-base--label">Hệ thống nhà hàng</div>
                            </div>
                        </Link>

                        <Link to="/info-3" className="menu-base--item ">
                            <div className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-solid fa-people-group"></i>
                                </div>
                                <div className="menu-base--label">Khách hàng của chúng tôi</div>
                            </div>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default InfoMenu;