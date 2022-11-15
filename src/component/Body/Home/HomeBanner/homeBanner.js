import "./homeBanner.css"
import banner1 from "../img/banner-index-1.png"
import {Link} from 'react-router-dom'
import {useState ,useCallback, useEffect, useRef, useMemo} from "react"

function HomeBanner ({bannerUrls}){
    var slideIndex = useRef(0);
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

        showSlides(slideIndex.current);
        // changerSlides();

    },[deps])

    //show slide
    function showSlides(n) {

        if (n > slides.length-1){
            slideIndex.current = 0;
        }    

        if (n < 0) {
            slideIndex.current = slides.length-1;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('app-container__banner-img--active');  
        }

        for (let i = 0; i < dotIcons.length; i++) {
            dotIcons[i].classList.remove("dot-icon--active");
        }

        try {
            // Khối lệnh có thể xảy ra lỗi
            slides[slideIndex.current].classList.add("app-container__banner-img--active");  
            dotIcons[slideIndex.current].classList.add("dot-icon--active");
        }
        catch (ex) {
            // Khối lệnh thực thi nếu có lỗi
            console.log("lỗi #1 : không tìm thấy classList (do asyn await)")
        }
        finally {
            // Khối lệnh này sẽ được thực thi cho dù có lỗi hay không lỗi
        }

    }

    // Tự động chuyển slide 5 giây - autoChangerSlide
    // useMemo(function(){
    //     if(slides.length >=1 ){
    //         var auto = setInterval(function(){
    //             showSlides(slideIndex.current+=1);
    //             // return slideIndex.current;
    //         },1000);
    //     }
    // },[slides])


    //Click nút chấm chuyển slide - changerSlide
    useMemo(function(){
        for(let i = 0; i< dotIcons.length ; i++){
            dotIcons[i].addEventListener("click",()=>{
                slideIndex.current = i;
                showSlides(slideIndex.current);
            })
        }
    },[dotIcons])

    //Click nút sang trái, phải
    useMemo(function(){
        try{
            if(btnLeft !== 0 & btnRight !== 0){
                //click nút sang phải
                btnRight.addEventListener("click",()=>{
                    showSlides(slideIndex.current+=1);
                })
    
                //click nút sang trái
                btnLeft.addEventListener("click",()=>{
                    showSlides(slideIndex.current-=1);
                })
            }
        }
        catch{
            console.log("Lỗi 2 : nút btn chưa render ra màn hình đã dùng dom element")
        }
    },[btnLeft])


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
                <i className="fa-solid fa-angle-left"></i>
            </div>

            <div className="app-container__banner-btn-right">
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}

export default HomeBanner;