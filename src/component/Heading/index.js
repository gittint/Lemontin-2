import "./heading.css"
import {Link} from 'react-router-dom'
import logo from "./img/logo-le-monde-steak-v3.png"
import icon from "./img/vi.png"

function Heading (){
    function clickIconMobile(){
        var navMenu = document.querySelector(".nav__list");
        console.log(navMenu);
        navMenu.classList.toggle("active");
    }

    return(
        <div className="header">
            <div className="grid">
                {/* nav  */}
                <div className="nav">

                    {/* logo  */}
                    <Link to="/" className="nav__logo-link">
                        <div className="nav__logo">
                            <img src = {logo} alt="" className="nav__logo-img"/>
                        </div>
                    </Link>

                    {/* icon mobile  */}
                    <div className="nav__mobile" onClick={clickIconMobile}>
                        <i class="fa-solid fa-bars nav__mobile-icon"></i>
                    </div>

                    {/* list  */}
                    <ul className="nav__list">

                        {/* item  */}
                        <li className="nav__list-item">
                            <Link to="/" className="nav__list-item--link nav__list-item--link--active" onClick={clickIconMobile}>Trang chủ</Link>
                        </li>
                        
                        <li className="nav__list-item">
                            <Link to="/info-1" className="nav__list-item--link" onClick={clickIconMobile}>Thông tin</Link>
                            <ul className="nav__list-option">
                                <li className="nav__list-option-item">
                                    <Link to="/info-1" className="nav__list-option-item--link">Câu chuyện về chúng tôi</Link>
                                </li>
                                <li className="nav__list-option-item">
                                    <Link to="/info-2" className="nav__list-option-item--link">Hệ thống nhà hàng</Link>
                                </li>
                                <li className="nav__list-option-item">
                                    <Link to="/info-3" className="nav__list-option-item--link">Khách hàng của chúng tôi</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav__list-item">
                            <Link to="/menu-1" className="nav__list-item--link" onClick={clickIconMobile}>Thực đơn</Link>
                            <ul className="nav__list-option">
                                <li className="nav__list-option-item">
                                    <Link to="/menu-1" className="nav__list-option-item--link">Bếp trưởng gợi ý</Link>
                                </li>
                                <li className="nav__list-option-item">
                                    <Link to="/menu-2" className="nav__list-option-item--link">Đồ ăn</Link>
                                </li>
                                <li className="nav__list-option-item">
                                    <Link to="/menu-3" className="nav__list-option-item--link">Đồ uống</Link>
                                </li>
                                <li className="nav__list-option-item">
                                    <Link to="/menu-4" className="nav__list-option-item--link">Set combo</Link>
                                </li>
                                <li className="nav__list-option-item">
                                    <Link to="/menu-5" className="nav__list-option-item--link">Thực đơn mới</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav__list-item">
                            <Link to="/sale" className="nav__list-item--link" onClick={clickIconMobile}>Khuyến mãi</Link>
                        </li>

                        <li className="nav__list-item">
                            <Link to="/blog-1" className="nav__list-item--link" onClick={clickIconMobile}>Blog</Link>
                            <ul className="nav__list-option">
                                <li className="nav__list-option-item">
                                    <Link to="/blog-1" className="nav__list-option-item--link">Nguyên liệu nhà làm</Link>
                                </li>
                                <li className="nav__list-option-item">
                                    <Link to="/blog-2" className="nav__list-option-item--link">Phong cách ẩm thực</Link>
                                </li>
                                <li className="nav__list-option-item">
                                    <Link to="/blog-3" className="nav__list-option-item--link">Trải nghiệm nhà hàng</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav__list-item">
                            <Link to="/e" className="nav__list-item--link" onClick={clickIconMobile}>
                                <img src={icon} alt="" className="nav__list-item--link-img"/>
                            </Link>
                            <ul className="nav__list-option">
                                <li className="nav__list-option-item">
                                    <Link to="/e" className="nav__list-option-item--link">Tiếng Anh</Link>
                                </li>
                                <li className="nav__list-option-item">
                                    <Link to="/e" className="nav__list-option-item--link">Tiếng Việt</Link>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Heading;