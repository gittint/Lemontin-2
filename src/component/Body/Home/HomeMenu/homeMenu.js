import "./homeMenu.css"
import mobilePictureMenu from "../img/menu1.png"
import {Link} from 'react-router-dom'
import { useEffect, useRef, useState, useMemo } from "react"

function HomeMenu ({menus}){
    var itemIndex = useRef(0);
    var [menuImgs, setMenuImgs] = useState([]);
    var [redIcons, setRedIcons] = useState([]);
    var [blackIcons, setBlackIcons] = useState([]);
    var [labels, setLabels ] = useState([])
    const [deps, setDeps] = useState(0);

    useEffect(function(){
        setDeps(1);
        setMenuImgs(document.querySelectorAll(".main-menu__list-item--box"));
        console.log("menu imgs", menuImgs);

        setRedIcons(document.querySelectorAll("i.main-menu__list-item--icon-active"));
        console.log("red icons", redIcons);

        setBlackIcons(document.querySelectorAll(".main-menu__list-item--icon"));
        console.log("black icons", blackIcons);

        setLabels(document.querySelectorAll(".main-menu__list-item--link"))
        console.log("labels", labels)

        showMenu(itemIndex.current);
    },[deps])

    //show menu
    function showMenu(n){
        try{
            for (let i = 0; i < menuImgs.length; i++) {
                menuImgs[i].classList.remove("main-menu__list-item--box--active"); 
                redIcons[i].style.display = "none"; 
                blackIcons[i].style.display = "block"; 
            }
                menuImgs[n].classList.add("main-menu__list-item--box--active");
                redIcons[n].style.display = "block";
                blackIcons[n].style.display = "none";
        }
        catch{
            console.log("lỗi 5")
        }
    }

    //hover vào lable hiện menu
    useMemo(function(){
        try{
            for(let i = 0; i< labels.length ; i++){
                labels[i].addEventListener("mousemove",()=>{
                    itemIndex.current = i;
                    // console.log(itemIndex.current)
                    showMenu(itemIndex.current);
                })
            }
        }
        catch{
            console.log("lỗi 6");
        }
    },[labels])


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