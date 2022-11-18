import MenuHead from '../menuHead'
import '../baseMenuComponent.css'
import axios from 'axios'
import {useEffect, useState} from "react"
import MenuItems from '../menuItem'

function Menu3 (){
    const [datas,setDatas]  = useState([])
    const fetchAPI = async () => {
        const getAPI = await axios.get('https://6373003c0bb6b698b6ffe030.mockapi.io/menu')
        let res = await getAPI.data;
        setDatas(res[0].menu3)
    }
    useEffect(  () => {
        fetchAPI();
    },[])

    return(
        <div className="grid">
            <MenuHead/>
            
            {/* <!-- base sub menu --> */}
            <div class="app-container__content menu-app-container__content">
                <div class="sub-menu-base">
                    <div class="sub-menu-base--list">
                        {
                            datas.map((menu3,index)=>(
                                <a href={"#"+ menu3.id} key={index} class="sub-menu-base--item">{menu3.type}</a>
                            ))
                        }
                    </div>
                    
                </div>
                
            </div>

            {/* <!-- base menu FAD  --> */}
            <div class="app-container__content menu-app-container__content">
                <div class="fad-menu-base">
                    <ul class="fad-menu-base--list">
                        {
                            datas.map((menu3,index)=>(
                                <li class="fad-menu-base--item" id={menu3.id}>
                                    <div class="fad-menu-base--img-box">
                                        <div class="fad-menu-base--img-label">{menu3.type}</div>
                                        <img src={menu3.img} alt="" class="fad-menu-base--img"/>
                                    </div>

                                    <div class="fad-menu-base--content-box">
                                        <MenuItems list={menu3.menu}/>
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

export default Menu3;