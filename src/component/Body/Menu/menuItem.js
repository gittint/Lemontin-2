
function MenuItems ({list}){
    return(
        <ul class="fad-menu-base--content-list">
            {
                list.map((item,index)=>(
                    <li class="fad-menu-base--content-item">
                        <a href={item.link} class="fad-menu-base--content-header">{item.name}</a>
                        <p class="fad-menu-base--content-desc">{item.desc}</p>
                        <p class="fad-menu-base--content-price">{item.price}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuItems;

