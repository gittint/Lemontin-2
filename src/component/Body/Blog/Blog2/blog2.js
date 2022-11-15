import BlogMenu from "../blogMenu";
import BlogContent from "../blogContent";
import blog2_1 from "../img/blog-2-1.jpg"
import blog2_2 from "../img/blog-2-2.jpg"
import blog2_3 from "../img/blog-2-3.jpg"
import "../baseBlog.css"


function Blog2 (){
    const blogList2 = [
        {
            img : blog2_1,
            heading : "Bít Tết kiểu Pháp - Hương vị độc đáo, đánh gục vị giác người thưởng thức",
            desc : "Đến Le Monde lựa chọn phần bít tết ngọt mềm, thơm lừng và mang hương vị Pháp chắc chắn sẽ mang đến cho bạn những trải nghiệm hoàn toàn thú vị."
        },
        {
            img : blog2_2,
            heading : "Đùi vịt nấu chậm - Nét tinh tế trong ẩm thực Pháp",
            desc : "Đùi vịt nấu chậm là món ăn truyền thống của người Pháp, không những thế còn được ưa chuộng ở nhiều nhà hàng trên khắp thế giới, kể cả Việt Nam. Không chỉ nổi tiếng về sự phức tạp trong..."
        },
        {
            img : blog2_3,
            heading : "Khám phá nét độc đáo trong ẩm thực Pháp",
            desc : "Ẩm thực Pháp nổi tiếng khắp nơi với các món ăn được chế biến lạ mắt, lạ miệng, kết hợp độc đáo rượu vào chế biến và thưởng thức các món ăn, góp phần làm đậm đà thêm hương..."
        }
    ]    
    
    return(
        <div className="grid">
            <BlogMenu/>

            <BlogContent list={blogList2}/>
            
        </div>
    )
}

export default Blog2;