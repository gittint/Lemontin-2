import BlogMenu from "../blogMenu";
import "../baseBlog.css"
import "../../baseNavBody.css";
import blog3_1 from "../img/blog-3-1.png"
import blog3_2 from "../img/blog-3-2.png"
import blog3_3 from "../img/blog-3-3.png"
import blogBanner from "../img/blog-banner.gif"

function Blog3(){
    const blog3 = [
        {
            img : blog3_1,
            name : "Không gian mở"
        },
        {
            img : blog3_2,
            name : "Thanh lịch"
        },
        {
            img : blog3_3,
            name : "Lãng mạn"
        }
    ]
    
    return(
        <div className="grid">
            <BlogMenu/>

            <div class="app-container__content blog-app-container__content">
                <div class="blog3__content-body">
                    <ul class="blog3__body--list">
                        {
                            blog3.map((item,index)=>(
                                <li key={index} class="blog3__body--item">
                                    <div class="blog3__body--item--img-box">
                                        <img src={item.img} class="blog3__body--item--img" alt=""/>
                                    </div>
                                    <p class="blog3__body--item-label">{item.name}</p>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>                    
            </div>

            {/* <!-- blog3 banner --> */}
            <div class="app-container__content blog-app-container__content">
                <div class="blog3__content-body">
                    <div class="blog3__banner">
                        <img src={blogBanner} alt="" class="blog3__banner--img"/>
                    </div>
                </div>                    
            </div>
            
        </div>
    )
}

export default Blog3;