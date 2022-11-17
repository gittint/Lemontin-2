import MenuHead from '../menuHead'
import '../baseMenuComponent.css'
import axios from 'axios'
import {useEffect, useState} from "react"

function Menu5 (){
    return(
        <div className="grid">
            <MenuHead/>
            <div class="app-container__content menu-app-container__content">
                <div class="menu5-content__body">
                    <div class="menu5-content__body-header">Hiện tại chưa có thực đơn mới</div>
                </div>
            </div>
        </div>
    )
}

export default Menu5;