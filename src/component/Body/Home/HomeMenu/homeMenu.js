import "./homeMenu.css"
import mobilePictureMenu from "../img/menu1.png"
import {Link} from 'react-router-dom'

function HomeMenu ({menus}){
    return(
        <div className="app-container__content">
            <div className="main-menu">
                <div className="main-menu__header header-border-bottom">
                    <h3 className="main-menu__header--text header-border-bottom__text">Thực đơn</h3>
                </div>

                <div className="main-menu__mobile-picture">
                    <img src={mobilePictureMenu} className="main-menu__mobile-picture--src"/>
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
    )
}
export default HomeMenu;