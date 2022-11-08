import "./homeWelcome.css"
import "../body.css"
import {Link} from 'react-router-dom'

function HomeWelcome ({blogs}){
    return(
        <div className="app-container__content">
            <div className="content__welcome">
                <h2 className="content__welcome-header">
                    <Link to="/" className="content__welcome-header--link">Chào mừng đến Le Monde Steak</Link>                            
                </h2>
                <p className="content__welcome-header--text">Le Monde Steak là hệ thống Bít Tết theo phong cách thành thị Pháp đầu tiên tại Việt Nam, nơi thực khách tự do trải nghiệm những món ăn mang hương vị Pháp đầy lôi cuốn và tận hưởng khoảnh khắc thư giãn trong không gian mở gần gũi với thiên nhiên, lãng mạn đặc trưng của Pháp. Tất cả tạo nên một sự cộng hưởng mạnh mẽ, để lại trong lòng bạn ấn tượng khó quên.</p>
                
                
                <div className="content__welcome-blog grid__row">

                    {
                        blogs.map((blog,index)=>(
                            <div key={index} className="content__welcome-blog-item grid__column-3">
                                <Link to={blog.link} className="content__welcome-blog-item--link">
                                    <div className="content__welcome-blog-item--background">
                                        <img src={blog.src} alt="" className="content__welcome-blog-item--img"/>
                                    </div>
                                    <div className="content__welcome-blog-item--lable">
                                        {blog.lable}
                                    </div>
                                </Link>                              
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default HomeWelcome;