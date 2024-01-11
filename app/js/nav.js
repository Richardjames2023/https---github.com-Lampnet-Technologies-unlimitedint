const createHeaderNav = () => {
    let header = document.querySelector('.header');

    header.innerHTML = `
        <nav>
            <div class="menu-overlay has-fade"></div>
            <div class=" nav-container flex flex-jc-sb flex-ai-c container">
                <a href="/" class="header__logo">
                    <img src="images/Group-75.png" alt="Unlimited-solutions">
                </a>

                <a href="#" id ="hamburgerMenu" class="header__toggle hide-for-desktop">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <div id ="activate"class="header__links hide-for-mobile">
                    <a href="index.html" class="links">Home</a><a href="visa-services.html" class="links">Immigration</a><a href="real-estate-service.html" class="links">Unlimited Homes</a><a href="transborder.html" class="links">Events</a>
                </div>

            <a href="#" id="appointment" class="button header__cta hide-for-mobile">Book Appointment</a>
           </div>
           
           <div class="header__menu has-fade">
            <a href="index.html"> Home</a>
            <a href="visa-services.html">Immigration</a>
            <a href="real-estate-service.html">Unlimited Homes</a>
            <a href="transborder.html"> Event</a>

            <a href="#"  class="button header__cta hide-for-mobile">Book Appointment</a>
           </div>

           <div id="popup" class="popup flex">
                <div class="form">
                    <div class="close-btn">&times;</div>
                    <div class="form-text">
                        <h2>Book Now</h2>
                        <p>Get a seat today and be part of greatter change</P>
                    </div>
                    <div class="main-form">
                        <form action="#" method="post">
                            <div class="form-element">
                                <span>What is your name ?</span>
                                <input type="text" name="name" placeholder="write you name here.."/>
                            </div>
                            <div class="form-element">
                                <span>your email address ?</span>
                                <input type="email" name="email" placeholder="write email address here..."/>
                            </div>
                            <div class="form-element">
                                <span>How many people ?</span>
                                <select name="people" id="people">
                                    <option value=""> select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div class="form-element">
                                <span>time ?</span>
                                <input type="time" name="time" placeholder="time"/>
                            </div>
                            <div class="form-element">
                                <span>What date ?</span>
                                <input type="date" name="date" placeholder="date"/>
                            </div>
                            <div class="form-element">
                                <span>Your Number ?</span>
                                <input type="number" name="number" placeholder="write your number here..."/>
                            </div>
                            <div id="submit">
                                <input type="submit" name="submit" value="SUBMIT" class="submit">
                            </div>
                        </form>
                    </div>
                </div>
           </div>
        </nav>
    `;
}

createHeaderNav();