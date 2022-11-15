import "./homeLocal.css"
import {Link} from 'react-router-dom'
import { useEffect, useRef, useState, useMemo } from "react"

function HomeLocal ({locals}) {
    var mapIndex = useRef(0);
    var [maps, setMaps] = useState([]);
    var [mapNames, setMapNames] = useState([]);
    const [deps, setDeps] = useState(0);

    useEffect(function(){
        setDeps(1);

        setMapNames(document.querySelectorAll(".content-local__item-content-header"));
        console.log("mapNames", mapNames);

        setMaps(document.querySelectorAll(".content-local__item-map"));
        console.log("maps", maps);

        showMap(mapIndex.current)
        
    },[deps])

    //show map
    function showMap(n){
        try{
            for (let i = 0; i < maps.length; i++) {
                maps[i].classList.remove("content-local__item-map--active"); 
            }
                maps[n].classList.add("content-local__item-map--active");
        }
        catch{
            console.log("lỗi 5")
        }
    }

    //khi click vao
    useMemo(function(){
        try{
            for(let i = 0; i< mapNames.length ; i++){
                mapNames[i].addEventListener("click",()=>{
                    mapIndex.current = i;
                    showMap(mapIndex.current);
                })
            }
        }
        catch{
            console.log("lỗi 6");
        }
    },[mapNames])

    return(
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

                                    <div className="content-local__item-map" >
                                        <iframe src={local.iframe}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default HomeLocal;