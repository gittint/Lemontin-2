import banerMenu from "./img/banner_menu_1_1557766876.jpg"
import {Link} from 'react-router-dom'

function MenuHead (){
    return(
        <>
            {/* <!-- banner  --> */}
            <div className="app-container__banner">
                <img src={banerMenu} alt="" className="app-container__banner-img"/>
            </div>

            {/* <!-- base menu nếu active : menu-base--item--active --> */}
            <div className="app-container__content info-app-container__content">
                {/* <!-- menu dùng chung nhiều trang khác  --> */}
                <div className="menu-base">
                    <ul className="menu-base--list">
                        <Link to="/menu-1" className="menu-base--item">
                            <div className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-solid fa-heart-circle-check"></i>
                                </div>
                                <div className="menu-base--label">Bếp trưởng gợi ý</div>
                            </div>
                        </Link>
                        
                        <Link to="/menu-2" className="menu-base--item">
                            <div className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-solid fa-utensils"></i>
                                </div>
                                <div className="menu-base--label">Đồ ăn</div>
                            </div>
                        </Link>

                        <Link to="/menu-3" className="menu-base--item">
                            <div className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-solid fa-champagne-glasses"></i>
                                </div>
                                <div className="menu-base--label">Đồ uống</div>
                            </div>
                        </Link>

                        <Link to="/menu-4" className="menu-base--item">
                            <div className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-solid fa-kitchen-set"></i>
                                </div>
                                <div className="menu-base--label">Set combo</div>
                            </div>
                        </Link>

                        <Link to="/menu-5" className="menu-base--item">
                            <div className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-solid fa-file-circle-check"></i>
                                </div>
                                <div className="menu-base--label">Thực đơn mới</div>
                            </div>
                        </Link>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default MenuHead;