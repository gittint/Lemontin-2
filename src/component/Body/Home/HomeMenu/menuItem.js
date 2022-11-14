import {Link} from 'react-router-dom'

function MenuItem({menu}){
    return(
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
    )
}

export default MenuItem