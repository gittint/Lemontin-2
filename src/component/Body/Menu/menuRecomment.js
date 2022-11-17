
function MenuRecommend({menu}){
    return(
        <ul className="base-menu-buy__list">
            {
                menu.map((item, index)=>(
                    <li key={index} className="base-menu-buy__item">
                        <div className="base-menu-buy__item--img-box">
                            <img src={item.img} alt="" className="base-menu-buy__item--img"/>
                        </div>

                        <div className="base-menu-buy__item--content-box">
                            <a href={item.link} className="base-menu-buy__item--link">{item.heading}</a>
                            <p className="base-menu-buy__item--desc">{item.desc}</p>
                            <div className="base-menu-buy__item--price">{item.price}</div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuRecommend;