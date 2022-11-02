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
import local1 from "./img/local1.png"
import local2 from "./img/local2.png"
import local3 from "./img/local3.jpg"

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
    const menus = [
        {
            src : menu1,
            lable : "Bếp trưởng gợi ý",
            link : "/menu-1"
        },{
            src : menu2,
            lable : "Đồ ăn",
            link : "/menu-2"
        },
        {
            src : menu3,
            lable : "Đồ uống",
            link : "/menu-3"
        },
        {
            src : menu4,
            lable : "Set combo",
            link : "/menu-4"
        },
        {
            src : menu3,
            lable : "Thực đơn mới",
            link : "/menu-5"
        }
    ]

    const locals = [
        {
          src : local1,
          header : "Le Monde Steak Hà Nội 1",
          text : "Trần Đại Nghĩa, Hai Bà Trưng, Hà Nội",
          iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.820923446237!2d105.84317294948336!3d20.999814294075357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac762d07f055%3A0x927f2d7abb74f088!2zUC4gVHLhuqduIMSQ4bqhaSBOZ2jEqWEsIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1649580516472!5m2!1svi!2s"
        },
        {
            src : local2,
            header : "Le Monde Steak Hà Nội 2",
            text : "Phố Vọng, Hai Bà Trưng, Hà Nội",
            iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8800334481934!2d105.84044284948332!3d20.997445494156192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac6fe1ad54fd%3A0xb27ac24459c954ea!2zUC4gVuG7jW5nLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1649583201184!5m2!1svi!2s"
        },
        {
            src : local3,
            header : "Le Monde Steak Hà Nội 3",
            text : "Định Công Hạ, Phương Mai, Hà Nội",
            iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.246840640713!2d105.82520154948303!3d20.98274019465736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acf5bcc09397%3A0x98ddb7b767b4c8db!2zxJDhu4tuaCBDw7RuZyBI4bqhLCDEkOG7i25oIEPDtG5nLCBIb8OgbmcgTWFpLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1649583551762!5m2!1svi!2s"
        },
        {
            src : local1,
            header : "Le Monde Steak Hà Nội 4",
            text : "Quan Nhân, Thanh Xuân, Hà Nội",
            iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5344.168498897582!2d105.808487653371!3d21.00383692972372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac996d7831ff%3A0xfd2eed2d5abbd7ab!2zUC4gUXVhbiBOaMOibiwgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1649583620668!5m2!1svi!2s"
        },
        {
            src : local2,
            header : "Le Monde Steak Hà Nội 5",
            text : "Triều Khúc, Thanh Trì, Hà Nội",
            iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.308274610648!2d105.79833969948297!3d20.980276344741267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc377cc470d%3A0xee56d1b2fe24d667!2zSOG7kyBUcmnhu4F1IEtow7pj!5e0!3m2!1svi!2s!4v1667358348963!5m2!1svi!2s"
        }


    ]
     
    return( 
        <div className="grid">

                {/* banner nếu active add : app-container__banner-img--active  */}
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
                                    <div key={index} className="content__welcome-blog-item grid__column-3">
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

                            {
                                menus.map((menu,index)=>(
                                    <li key={index} className="main-menu__list-item">
                                        <Link to={menu.lable} className="main-menu__list-item--link">
                                            <div className="main-menu__list-item--link-label">
                                                <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                                <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                            <p className="main-menu__list-item--link-text">{menu.lable}</p> 
                                            </div>
                                            
                                            <div className="main-menu__list-item--box main-menu__list-item--box--active" >
                                                <img src={menu.src} alt="" className="main-menu__list-item--img"/>
                                            </div>
                                        </Link>
                                    </li>
                                    ))
                            }

                        </ul>
                    </div>
                </div>

                {/* local  */}
                <div className="app-container__content">
                    <div className="content-local">
                        <div className="content-local__header header-border-bottom">
                            <h3 className="content-local__header--text header-border-bottom__text">Nhà hàng</h3>
                        </div>

                        <ul className="content-local__list">
                            {
                                locals.map((local,index)=>(
                                    <li className="content-local__item" key={index}>
                                        <div className="content-local__item-link">
                                            <div className="content-local__item-box-img">
                                                <img src={local.src} alt="" className="content-local__item-img"/>
                                            </div>
                                            <div className="content-local__item-content">
                                                <div className="content-local__item-content-header" >
                                                    {local.header}
                                                </div>
                                                <div className="content-local__item-content-text">
                                                    <p>{local.text}</p>
                                                    <p>Hotline: 0123456789</p>
                                                </div>
                                            </div>

                                            <div className="content-local__item-map content-local__item-map--active" >
                                                <iframe src={local.iframe}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>

        </div>
    )
}

export default Home;