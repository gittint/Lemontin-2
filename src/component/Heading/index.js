import "./heading.css"
import {Link} from 'react-router-dom'
import logo from "./img/logo-le-monde-steak-v3.png"
import icon from "./img/vi.png"
import NavItems from "./navItems"

function Heading (){

    const navLists = [
        {
            linkto: "/",
            name: "Trang chủ",
            navItems : []
        },
        {
            linkto: "/info-1",
            name: "Thông tin",
            navItems : [
                {
                    linkto: "/info-1",
                    name: "Câu chuyện về chúng tôi"
                },
                {
                    linkto: "/info-2",
                    name: "Hệ thống nhà hàng"
                },
                {
                    linkto: "/info-3",
                    name: "Khách hàng của chúng tôi"
                }
            ]
        },
        {
            linkto: "/menu-1",
            name: "Thực đơn",
            navItems : [
                {
                    linkto: "/menu-1",
                    name: "Bếp trưởng gợi ý"
                },
                {
                    linkto: "/menu-2",
                    name: "Đồ ăn"
                },
                {
                    linkto: "/menu-3",
                    name: "Dồ uống"
                },
                {
                    linkto: "/menu-4",
                    name: "Set combo"
                },
                {
                    linkto: "/menu-5",
                    name: "Thực đơn mới"
                }
            ]
        },
        {
            linkto: "/sale",
            name: "Khuyến mãi",
            navItems : []
        },
        {
            linkto: "/blog-1",
            name: "Blog",
            navItems : [
                {
                    linkto: "/blog-1",
                    name: "Nguyên liệu nhà làm"
                },
                {
                    linkto: "/blog-2",
                    name: "Phong cách ẩm thực"
                },
                {
                    linkto: "/blog-3",
                    name: "Trải nghiệm nhà hàng"
                }
            ]
        }

    ]


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
                        <i className="fa-solid fa-bars nav__mobile-icon"></i>
                    </div>

                    {/* list  */}
                    <ul className="nav__list">

                        {
                            navLists.map((navlist,index)=>(
                                <li key={index} className="nav__list-item">
                                    <Link to={navlist.linkto} className="nav__list-item--link" onClick={clickIconMobile}>{navlist.name}</Link>
                                    <NavItems list={navlist.navItems}/>
                                </li>
                            ))
                        }

                        {/* item  nếu gạch chân : nav__list-item--link nav__list-item--link--active*/}

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