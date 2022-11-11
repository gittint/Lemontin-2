import {Link} from 'react-router-dom'
import "./heading.css"

function NavItems ({list}){
    if (list.length >= 1){
        return(
            <ul className="nav__list-option">
                {
                    list.map((item,index)=>(
                        <li key={index} className="nav__list-option-item">
                            <Link to={item.linkto} className="nav__list-option-item--link">{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default NavItems;