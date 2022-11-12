import "./homeBanner.css"
import banner1 from "../img/banner-index-1.png"
import {Link} from 'react-router-dom'
import {useState ,useCallback, useEffect} from "react"

function HomeBanner ({bannerUrls}){
    var slideIndex = 0;
    var slides = [];
    var doticons =[];
    const [i, setI] = useState(0);

    useEffect(function(){
        var getslide = document.querySelectorAll(".app-container__banner-img.app-container__banner-img-js");
        slides = getslide;
        console.log(slides[0])

        var getdoticon = document.querySelectorAll(".dot-icon");
        doticons = getdoticon;
        console.log(doticons);

        showSlides(slideIndex);
        changerSlides();

    }, [])

    //show slide
    function showSlides(n) {
        let i;

        if (n > slides.length-1){
            slideIndex = 0;
        }    

        if (n < 0) {
            slideIndex = slides.length-1;
        }

        for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('app-container__banner-img--active');  
        }

        for (i = 0; i < doticons.length; i++) {
            doticons[i].classList.remove("dot-icon--active");
        }

        try {
            // Khối lệnh có thể xảy ra lỗi
            slides[slideIndex].classList.add("app-container__banner-img--active");  
            doticons[slideIndex].classList.add("dot-icon--active");
        }
        catch (ex) {
            // Khối lệnh thực thi nếu có lỗi
            console.log("lỗi thứ nhất : không tìm thấy classList chắc do asyn await")
        }
        finally {
            // Khối lệnh này sẽ được thực thi
            // cho dù có lỗi hay không lỗi
        }

    }

    //Tự động chuyển slide 5 giây 
    function autoChangerSlide(){
        clearInterval(auto);
        var auto = setInterval(function(){
            slideIndex+=1;
            showSlides(slideIndex);
            return slideIndex;
        },5000);
    }

    //Click nút chấm chuyển slide
    function changerSlides(){
        for(let i = 0; i< doticons.length ; i++){
            doticons[i].addEventListener("click",()=>{
                slideIndex = i;
                showSlides(slideIndex);
            })
        }
    }

    //click nút sang phải
    document.querySelector(".app-container__banner-btn-right").addEventListener("click",()=>{
        slideIndex +=1 ;
        showSlides(slideIndex);
    })

    //click nút sang trái
    document.querySelector(".app-container__banner-btn-left").addEventListener("click",()=>{
        slideIndex -=1 ;
        showSlides(slideIndex);
    })

    return(
        // banner nếu active add : app-container__banner-img--active 
        <div className="app-container__banner">

            {
                bannerUrls.map((itemUrl,index)=>(
                    <img src={itemUrl} key={index} alt="" className="app-container__banner-img app-container__banner-img-js"/>
                ))
            }
            
            <div className="list-dot">
                {
                    bannerUrls.map((itemUrl,index)=>(
                        <i key={index} className="fa-solid fa-circle dot-icon" />
                    ))
                }
            </div>

            <div className="app-container__banner-btn-left">
                <i class="fa-solid fa-angle-left"></i>
            </div>

            <div className="app-container__banner-btn-right">
                <i class="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}

export default HomeBanner;