import "./sale.css"
import sale1 from "./img/sale-1.png"
import sale2 from "./img/sale-2.jpg"
import sale3 from "./img/sale-3.png"
import sale4 from "./img/sale-4.png"
import sale5 from "./img/sale-5.png"
import sale6 from "./img/sale-6.png"
import sale7 from "./img/sale-7.png"
import { useEffect, useRef, useState } from "react"
import {memo} from "react"

import axios from 'axios'


function Sale (){

    const [datas,setDatas]  = useState([])
    const fetchAPI = async () => {
        const getAPI = await axios.get('https://6373003c0bb6b698b6ffe030.mockapi.io/Sales')
        let res = await getAPI.data;
        setDatas(res)
    }
    useEffect(  () => {
        fetchAPI();
    },[])

    console.log(datas)

    return(
        <div className="grid">

            {/* <!-- info content body menu5 --> */}
            <div className="app-container__content sale-app-container__content">
                <div className="sale-content__body">
                    <ul className="sale-body__list">
                        {
                            datas.map((sale, index)=>(
                                <li key={index} className="sale-body__item">
                                    <div className="sale-body__item--img-box">
                                        <img src={sale.img} alt="" className="sale-body__item--img"/>
                                    </div>

                                    <div className="sale-body__item--content-box">
                                        <a href="" className="sale-body__item--heading">{sale.heading}</a>
                                        <p className="sale-body__item--desc">{sale.desc}</p>
                                        <a href="#" className="button-base sale-body__item--button">Xem tiếp</a>
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

export default memo(Sale);

