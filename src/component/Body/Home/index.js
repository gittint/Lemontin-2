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
import HomeBanner from './homeBanner'
import HomeWelcome from './homeWelcome'
import HomeMenu from './homeMenu'
import HomeLocal from './homeLocal'

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

                <HomeBanner bannerUrls={bannerUrls}/>

                <HomeWelcome blogs={blogs}/>

                <HomeMenu menus={menus}/>

                <HomeLocal locals={locals}/>

        </div>
    )
}

export default Home;