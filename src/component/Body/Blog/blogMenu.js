import banner from "./img/banner_hinh_anh_am_thuc_nha_lam_1557486443.png"
import {Link} from 'react-router-dom'
import "./blog.css"

function BlogMenu (){

    return(
        <>
            {/* <!-- banner  --> */}
            <div className="app-container__banner">
                <img src={banner} alt="" className="app-container__banner-img"/>
            </div>

            {/* <!-- base menu  thêm active : menu-base--item--active --> */}
            <div className="app-container__content info-app-container__content">
                {/* <!-- menu dùng chung nhiều trang khác  --> */}
                <div className="menu-base">
                    <ul className="menu-base--list">

                        <li className="menu-base--item">
                            <Link to="/blog-1" className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-solid fa-carrot"></i>
                                </div>
                                <div className="menu-base--label">Nguyên liệu nhà làm</div>
                            </Link>
                        </li>
                        
                        <li className="menu-base--item">
                            <Link to="/blog-2" className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-solid fa-kitchen-set"></i>
                                </div>
                                <div className="menu-base--label">Phong cách ẩm thực</div>
                            </Link>
                        </li>

                        <li className="menu-base--item">
                            <Link to="/blog-3" className="menu-base--link">
                                <div className="menu-base--icon-box">
                                    <i className="menu-base--icon fa-brands fa-docker"></i>
                                </div>
                                <div className="menu-base--label">Trải nghiệm nhà hàng</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BlogMenu;