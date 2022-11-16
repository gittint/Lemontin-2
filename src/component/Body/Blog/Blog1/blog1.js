import BlogMenu from "../blogMenu";
import BlogContent from "../blogContent";
import blog1_1 from "../img/blog-1-1.jpg"
import blog1_2 from "../img/blog-1-2.jpg"
import "../../baseNavBody.css";

import "../baseBlog.css"


function Blog1 (){
    const blogList1 = [
        {
            img : blog1_1,
            heading : "Pate gan vịt - Biến tấu tài tình của người đầu bếp tài ba",
            desc : "Lấy cảm hứng từ món pate gan ngỗng nổi tiếng của Pháp, pate gan vịt tại Le Monde là một biến tấu đầy tài tình của người đầu bếp mà chắc hẳn bạn sẽ bị đánh gục vị giác ngay từ lần thưởng thức đầu..."
        },
        {
            img : blog1_2,
            heading : "Mỳ Ý Homemade - Món ngon khó có thể chối từ",
            desc : "Tại Le Monde Steak, chúng tôi hiểu rằng, món ăn ngon nhất định phải tạo nên bởi nguồn nguyên liệu thượng hạng, tươi ngon và an toàn. Bởi vậy, không chỉ cầu kỳ trong cách chế biến, Le Monde..."
        }
    ]    
    
    return(
        <div className="grid">
            <BlogMenu/>

            <BlogContent list={blogList1}/>
            
        </div>
    )
}

export default Blog1;