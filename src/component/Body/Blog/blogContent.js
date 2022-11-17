

function BlogContent ({list}){
    return(
        <div className="app-container__content blog-app-container__content">
            <div className="base-blog">
                <ul className="base-blog__list">
                    {
                        list.map((item,index)=>(
                            <li key={index} className="base-blog__item">
                                <div className="base-blog__item--img-box">
                                    <img src={item.img} alt="" className="base-blog__item--img"/>
                                </div>

                                <div className="base-blog__item--content-box">
                                    <a href="" className="base-blog__item--content-heading">{item.heading}</a>
                                    <div className="base-blog__item--content-desc">{item.desc}</div>
                                    <a href="" className="button-base base-blog__item--button">Xem tiếp</a>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
                    
        </div>
    )
}

export default BlogContent;