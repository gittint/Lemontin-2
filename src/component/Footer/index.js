import "./footer.css"

function Footer(){
    return(
        <div className="footer">
            <div className="grid">
                <div className="footer-content">
                    <div className="footer-tel"><i className="fa-solid fa-phone"></i> 0123456789</div>
                    <div className="footer-contact">
                        <div className="footer-contact__text">Connect with us</div>
                        <div className="footer-contact__socials">
                            <a href="https://www.facebook.com/jimindngtint/" target="_blank" className="footer-contact__socials-icon-link">
                                <i className="footer-contact__socials-icon fa-brands fa-facebook"></i>
                            </a>
                            <a href="" className="footer-contact__socials-icon-link">
                                <i className="footer-contact__socials-icon fa-brands fa-youtube"></i>
                            </a>
                            <a href="" className="footer-contact__socials-icon-link">
                                <i className="footer-contact__socials-icon fa-brands fa-instagram"></i>
                            </a>
                            <a href="" className="footer-contact__socials-icon-link">
                                <i className="footer-contact__socials-icon fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;