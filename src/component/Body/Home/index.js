import {Link} from 'react-router-dom'
import banner1 from "./img/banner-index-1.png"
import banner2 from "./img/banner-index-2.png"
import banner3 from "./img/banner-index-3.png"
import banner4 from "./img/banner-index-4.png"
import banner5 from "./img/banner-index-5.png"
import banner6 from "./img/banner-index-6.png"
import blog1 from "./img/blog1-1.png"
import blog2 from "./img/blog2.jpg"
import blog3 from "./img/blog3.png"
import menu1 from "./img/menu1.png"
import menu2 from "./img/menu2.png"
import menu3 from "./img/menu3.png"
import menu4 from "./img/menu4.png"

function Home (){
    const bannerUrls = [banner1, banner2, banner3, banner4, banner5, banner6]
    const blogs = [
        {
            src: blog1, 
            lable : "Nguyên liệu nhà làm",
            link : "/blog-1"
        },
        {
            src: blog2, 
            lable : "Phong cách ẩm thực",
            link : "/blog-2"
        },
        {
            src: blog3, 
            lable : "Trải nghiệm nhà hàng",
            link : "/blog-3"
        }
    ]
    const menus = []
     
    return( 
        <div className="grid">

                {/* banner nếu active add : app-container__banner-img--active  */}
                <div className="app-container__banner">
                    <img src={banner1} alt="" className="app-container__banner-img app-container__banner-img-js app-container__banner-img--active"/>
                    {
                        bannerUrls.map((itemUrl)=>(
                            <img src={itemUrl} alt="" className="app-container__banner-img app-container__banner-img-js"/>
                        ))
                    }
                     
                    <div className="list-dot">
                        {
                            bannerUrls.map((itemUrl)=>(
                                <i className="fa-solid fa-circle dot-icon" />
                            ))
                        }
                    </div>
                </div>

                {/* welcome  */}
                <div className="app-container__content">
                    <div className="content__welcome">
                        <h2 className="content__welcome-header">
                            <Link to="/" className="content__welcome-header--link">Chào mừng đến Le Monde Steak</Link>                            
                        </h2>
                        <p className="content__welcome-header--text">Le Monde Steak là hệ thống Bít Tết theo phong cách thành thị Pháp đầu tiên tại Việt Nam, nơi thực khách tự do trải nghiệm những món ăn mang hương vị Pháp đầy lôi cuốn và tận hưởng khoảnh khắc thư giãn trong không gian mở gần gũi với thiên nhiên, lãng mạn đặc trưng của Pháp. Tất cả tạo nên một sự cộng hưởng mạnh mẽ, để lại trong lòng bạn ấn tượng khó quên.</p>
                        
                        {/* blog  */}
                        <div className="content__welcome-blog grid__row">

                            {
                                blogs.map((blog,index)=>(
                                    <div className="content__welcome-blog-item grid__column-3">
                                        <Link to={blog.link} className="content__welcome-blog-item--link">
                                            <div className="content__welcome-blog-item--background">
                                                <img src={blog.src} alt="" className="content__welcome-blog-item--img"/>
                                            </div>
                                            <div className="content__welcome-blog-item--lable">
                                                {blog.lable}
                                            </div>
                                        </Link>                              
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

                {/* menu  */}
                <div className="app-container__content">
                    <div className="main-menu">
                        <div className="main-menu__header header-border-bottom">
                            <h3 className="main-menu__header--text header-border-bottom__text">Thực đơn</h3>
                        </div>

                        <ul className="main-menu__list">
                            <li className="main-menu__list-item">
                                <Link to="/menu-1" className="main-menu__list-item--link">
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">Bếp trưởng gợi ý</p> 
                                    </div>
                                    
                                    <div className="main-menu__list-item--box main-menu__list-item--box--active" >
                                        <img src={menu1} alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link>
                            </li>

                            <li className="main-menu__list-item">
                                <Link to="/menu-2" className="main-menu__list-item--link" >
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">Đồ ăn</p> 
                                    </div>
                                    
                                    <div className="main-menu__list-item--box">
                                        <img src={menu2} alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link>
                            </li>

                            <li className="main-menu__list-item">
                                <Link to="/menu-3" className="main-menu__list-item--link" >
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">Đồ uống</p> 
                                    </div>
                                    
                                    <div className="main-menu__list-item--box">
                                        <img src={menu3} alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link>
                            </li>

                            <li className="main-menu__list-item">
                                <Link to="/menu-4" className="main-menu__list-item--link" >
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">Set combo</p>
                                    </div>
                                     
                                    <div className="main-menu__list-item--box">
                                        <img src={menu4} alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link>
                            </li>

                            <li className="main-menu__list-item">
                                <Link to="/menu-5" className="main-menu__list-item--link" >
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">Thực đơn mới</p> 
                                    </div>
                                   
                                    <div className="main-menu__list-item--box">
                                        <img src={menu3} alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

        </div>
    )
}

export default Home;