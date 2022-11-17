import MenuHead from '../menuHead'
import '../baseMenuComponent.css'
import axios from 'axios'
import {useEffect, useState} from "react"
import MenuRecommend from '../menuRecomment'

function Menu4 (){
    const [datas,setDatas]  = useState([])
    const fetchAPI = async () => {
        const getAPI = await axios.get('https://6373003c0bb6b698b6ffe030.mockapi.io/menu')
        let res = await getAPI.data;
        setDatas(res[0].menu4)
    }
    useEffect(  () => {
        fetchAPI();
    },[])

    console.log(datas);
    
    return(
        <div className="grid">
            <MenuHead/>

            <div className="app-container__content menu-app-container__content">
                <div className="menu1-content__body">
                    <MenuRecommend menu={datas}/>
                </div>
                
            </div>
        </div>
    )
}

export default Menu4;