import "./homeMenu.css"
import mobilePictureMenu from "../img/menu1.png"
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import MenuItem from "./menuItem"

function HomeMenu ({menus}){
    // var [menuImgs, setMenuImgs] = useState([]);
    // var [redIcons, setRedIcons] = useState([]);
    // var [blackIcons, setBlackIcons] = useState([]);
    // const [deps, setDeps] = useState(0);

    // useEffect(function(){
    //     setDeps(1);
    //     setMenuImgs(document.querySelectorAll(".main-menu__list-item--box"));
    //     console.log("menu imgs", menuImgs);

    //     setRedIcons(document.querySelectorAll("i.main-menu__list-item--icon-active"));
    //     console.log("red icons", redIcons);

    //     setBlackIcons(document.querySelectorAll(".main-menu__list-item--icon"));
    //     console.log("black icons", blackIcons);
    // },[deps])



    // const handleHover = (n)=>{
    //     try{
    //         if(menuImgs.length >= 1){
    //             for (let i = 0; i < menuImgs.length; i++) {
    //                 menuImgs[i].classList.remove("main-menu__list-item--box--active"); 
    //                 redIcons[i].style.display = "none"; 
    //                 blackIcons[i].style.display = "block"; 
    //             }
    //             menuImgs[n].classList.add("main-menu__list-item--box--active");
    //             redIcons[n].style.display = "block";
    //             blackIcons[n].style.display = "none";
    //         }
    //         else{
    //             console.log("chưa có list")
    //         }
    //     }
    //     catch{
    //         console.log("Lỗi 4 : Cannot read properties of undefined (reading 'classList')")
    //     }
    // }

    // const nhatyeudat = (n)=>{
    //     console.log(n)
    // }

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
                                <MenuItem menu={menu}/>
                                {/* <Link to={menu.lable} className="main-menu__list-item--link">
                                    <div className="main-menu__list-item--link-label">
                                        <i className="main-menu__list-item--icon fa-regular fa-star"></i>
                                        <i className="main-menu__list-item--icon-active fa-solid fa-star"></i>
                                    <p className="main-menu__list-item--link-text">{menu.lable}</p> 
                                    </div>
                                    
                                    <div className="main-menu__list-item--box main-menu__list-item--box--active" >
                                        <img src={menu.src} alt="" className="main-menu__list-item--img"/>
                                    </div>
                                </Link> */}
                            </li>
                            ))
                    }

                </ul>
            </div>
        </div>
    )
}
export default HomeMenu;