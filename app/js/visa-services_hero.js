const createVisaServicesHero = ()=>{
    let visaHero = document.querySelector('.visa-hero');

    visaHero.innerHTML = `
        <div class="slider">
            <img src="images/1.png" class="sliding-img" alt="">
            <img src="images/2.png" class="sliding-img" alt="">
            <div class="container">
                <p>We Provide Varieties Of <span>Visa</span> To Over <span>50 Countries</span> </p>
            </div>
        </div>
    `;
}

createVisaServicesHero();