import "./homeBanner.css"
import banner1 from "../img/banner-index-1.png"
import {Link} from 'react-router-dom'
import {useState ,useCallback, useEffect} from "react"

function HomeBanner ({bannerUrls}){
    var slideIndex = 0;
    var [slides, setSlides] = useState([]);
    var [dotIcons, setDotIcons] = useState([]);
    var [btnLeft, setBtnLeft] = useState(0);
    var [btnRight , setBtnRight] = useState(0);
    const [deps, setDeps] = useState(0);

    useEffect(function(){
        setDeps(1);
        setSlides(document.querySelectorAll(".app-container__banner-img.app-container__banner-img-js"));
        console.log("slides",slides);

        setDotIcons(document.querySelectorAll(".dot-icon"))
        console.log("dot icons",dotIcons);

        setBtnLeft(document.querySelector(".app-container__banner-btn-left"));
        setBtnRight(document.querySelector(".app-container__banner-btn-right"));
        console.log(btnLeft,btnRight)

        showSlides(slideIndex);
        changerSlides();

    },[deps] )

    //show slide
    function showSlides(n) {

        if (n > slides.length-1){
            slideIndex = 0;
        }    

        if (n < 0) {
            slideIndex = slides.length-1;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('app-container__banner-img--active');  
        }

        for (let i = 0; i < dotIcons.length; i++) {
            dotIcons[i].classList.remove("dot-icon--active");
        }

        try {
            // Khối lệnh có thể xảy ra lỗi
            slides[slideIndex].classList.add("app-container__banner-img--active");  
            dotIcons[slideIndex].classList.add("dot-icon--active");
        }
        catch (ex) {
            // Khối lệnh thực thi nếu có lỗi
            console.log("lỗi #1 : không tìm thấy classList (do asyn await)")
        }
        finally {
            // Khối lệnh này sẽ được thực thi cho dù có lỗi hay không lỗi
        }

    }

    //Tự động chuyển slide 5 giây 
    function autoChangerSlide(){
        var auto = setInterval(function(){
            slideIndex +=1;
            showSlides(slideIndex);
            return slideIndex;
        },1000);
    }

    // var [auto, setAuto] = useState(0);
    // useEffect(()=>{
    //     setTimeout(function(){
    //         slideIndex +=1;
    //         showSlides(slideIndex);

    //         setAuto(auto+1);
    //         console.log(auto);
    //         return slideIndex
    //     },1000);
    // },[auto])

    //Click nút chấm chuyển slide
    function changerSlides(){
        for(let i = 0; i< dotIcons.length ; i++){
            dotIcons[i].addEventListener("click",()=>{
                slideIndex = i;
                console.log(slideIndex)
                showSlides(slideIndex);
            })
        }
    }

    try{
        if(btnLeft !== 0 & btnRight !== 0){
            //click nút sang phải
            btnRight.addEventListener("click",()=>{
                slideIndex+=1 ;
                showSlides(slideIndex);
            })

            //click nút sang trái
            btnLeft.addEventListener("click",()=>{
                slideIndex-=1 ;
                showSlides(slideIndex);
            })
        }
    }
    catch{
        console.log("Lỗi 2 : nút btn chưa render ra màn hình đã dùng dom element")
    }


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