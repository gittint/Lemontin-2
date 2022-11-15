import "./sale.css"
import sale1 from "./img/sale-1.png"
import sale2 from "./img/sale-2.jpg"
import sale3 from "./img/sale-3.png"
import sale4 from "./img/sale-4.png"
import sale5 from "./img/sale-5.png"
import sale6 from "./img/sale-6.png"
import sale7 from "./img/sale-7.png"
import { useEffect, useRef, useState } from "react"

import axios from 'axios'

function Sale (){

    // var sales = useRef( [
        // {
        //     "heading" : "Happy Hour - Mua 01 Tặng 1 - Tận Hưởng Thời Gian Hạnh Phúc",
        //     "desc" : "Tận hưởng khoảng thời gian hạnh phúc với những bữa ăn thật ngon tại Le Monde Steak. Chúng mình dành tặng bạn ưu đãi Mua 01 Tặng 01 trong khung giờ Happy Hour - cho tiệc Âu thêm tròn vị.",
        //     "img" : "https://lemontin.vercel.app/assets/img/sale-1.png",
        //     "href" : ""

        // },
        // {
        //     "heading" : "TÍCH LŨY CHI TIÊU CÙNG VÔ VÀN ƯU ĐÃI HOÀN TIỀN LÊN ĐẾN 200K TẠI LE MONDE STEAK",
        //     "desc" : "Tiệc Pháp thật lãng mạn cùng bạn bè, người thân với voucher giảm giá lên tới 200k chỉ có tại Le Monde Steak!",
        //     "img" : "https://lemontin.vercel.app/assets/img/sale-2.jpg",
        //     "href" : ""
        // },
        // {
        //     "heading" : "Giảm 50% Phần Steak Thứ 2 Tại Le Monde Steak",
        //     "desc" : "Tháng ba tràn ngập yêu thương tại ngôi nhà Le Monde Steak, chúng mình mời bạn một phần Steak mềm mọng trị giá #129k, áp dụng cho nhóm 4 người khi dùng bữa tại nhà...",
        //     "img" : "https://lemontin.vercel.app/assets/img/sale-3.png",
        //     "href" : ""
        // },
        // {
        //     "heading" : "Tặng 01 Steak 129k Cho Nhóm 4 Người",
        //     "desc" : "Tháng ba tràn ngập yêu thương tại ngôi nhà Le Monde Steak, chúng mình mời bạn một phần Steak mềm mọng trị giá #129k, áp dụng cho nhóm 4 người khi dùng bữa tại nhà....",
        //     "img" : "https://lemontin.vercel.app/assets/img/sale-4.png",
        //     "href" : ""
        // },
        // {
        //     "heading" : "Hoàn Tiền Lên Tới 100k Đối Với Thành Viên Le Monde Steak",
        //     "desc" : "Bởi vì sẽ vui và tuyệt vời hơn khi chúng ta được ngồi cùng nhau tại ngôi nhà Le Monde Steak! Chúng mình hoàn tiền lên tới 100k trên cho mọi chi tiêu từ 400K trở lên.",
        //     "img" : "https://lemontin.vercel.app/assets/img/sale-5.png",
        //     "href" : ""
        // },
        // {
        //     "heading" : "[Delivery] Tiệc Pháp Tại Gia Chỉ Từ 129K",
        //     "desc" : "Không ngại nắng gắt, chẳng sợ mưa giông, Le Monde Steak “ship” ngay hương vị ẩm thực Pháp từ nhà hàng đến tay bạn.",
        //     "img" : "https://lemontin.vercel.app/assets/img/sale-6.png",
        //     "href" : ""
        // },
        // {
        //     "heading" : "Combo 1 người chỉ từ 149K - Thưởng thức thả ga",
        //     "desc" : "Với mong muốn mang đến những trải nghiệm tốt nhất, Le Monde cho ra đời các set Combo 1 người để đáp ứng nhu cầu đa dạng của nhiều thực khách. Đây cũng là điểm đặc biệt, mà bạn khó có thể tìm...",
        //     "img" : "https://lemontin.vercel.app/assets/img/sale-7.png",
        //     "href" : ""
        // }
    // ]);

    // const API = "https://6373003c0bb6b698b6ffe030.mockapi.io/Sales";

    // useEffect

    // const getData = function(){
    //     return fetch(API)
    //         .then(function(response){
    //             return response.json();
    //         })
    //         .then(function(data){
    //             sales.current = data;
    //             console.log(sales.current)
    //             return sales.current
    //         })
    // }
    // getData();


    const [datas,setDatas]  = useState([])

    useEffect(  () => {
        const fetchAPI = async () => {
            const getAPI = await axios.get('https://6373003c0bb6b698b6ffe030.mockapi.io/Sales')
            let res = await getAPI.data;
            setDatas(res)
        }
        fetchAPI();
        // console.log(res);
        // anh yeeu Nhaat 
    },[datas])

    
    return(
        <div className="grid">

            {/* <!-- info content body menu5 --> */}
            <div className="app-container__content sale-app-container__content">
                <div className="sale-content__body">
                    <ul className="sale-body__list">
                        {
                            datas.map((sale, index)=>(
                                <li className="sale-body__item">
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

export default Sale;

