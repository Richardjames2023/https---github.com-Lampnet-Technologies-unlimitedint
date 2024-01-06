const createFooter = () => {
    let footer = document.querySelector(".footer");

    footer.innerHTML =`
        <div class="container">
            <div class="wrapper">
                <div class="footer-content">
                    <div class="flex">
                        <div class="dec">
                            <a href="#" class="logo"><img src="images/Group-75.png" alt="logo"></a>
                            <p>We provide a seamless process to getting a visa to any country in world. We are committed to enabling individuals and families to own properties on a global level.</p>
                        </div>
                        <div class="about">
                            <h4>About us</h4>
                            <div class="abt-items">
                                <a href="#">Services</a>
                                <a href="#">Terms and Condition</a>
                                <a href="#">Privacy Policy</a>
                                <a href="faq.html">Help</a>
                            </div>
                        </div>
                        <div class="contact_us">
                            <h4>Contact us</h4>
                            <a href="#"><img src="images/call_24px.png" alt="call"><span class="ct-us">+234 8033422729, +234 9083364641</span></a>
                            <a href="#"><img src="images/mail_outline_24px.png" alt=""><span class="ct-us">info@theplatformng.org</span></a>
                            <a href="#"><img src="images/location_on_24px.png" alt=""><span class="ct-us">Penthouse, Plot 3 Yesufu Abiodun Road, Oniru Estate, Victoria Island</span></a>
                        </div>
                    </div>
                    
                    <div class="socials">
                        <a href="#"> <img src="images/skill-icons_linkedin.png" alt="linkedIn"></a>
                        <a href="#"><img src="images/bi_instagram.png" alt="instagram"></a>
                    </div>
                </div>

                <div class="copyright">
                    <p>&copy  <span id="copyright-year" style="color:#444;"></span> UNLIMITED INTERNATIONAL. All rights reserved</p>
                </div>
            </div>
        </div>
    `
}

createFooter();