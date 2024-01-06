const createRealSidebar = () =>{
    let sidebar = document.querySelector('.left');

    sidebar.innerHTML = `
        <div class="dropdown" id="myDropDown">
            <a href="visa-services.html" class=" dropdown-menu dropdown__curve">
                <span>Tourist Visa</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="student-visa.html" class="dropdown-menu">
                <span>Student Visa</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="family-visa.html" class="dropdown-menu">
                <span>Family Visa</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="work-visa.html" class="dropdown-menu">
                <span>Work Visa</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="business-visa.html" class="dropdown-menu">
                <span>Business Visa</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="permanent-resident.html" class="dropdown-menu">
                <span>Permanent Residency</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="citizenship-application.html" class="dropdown-menu">
                <span>Citizenship Application</span>
                <img src="images/expandless24px.png" alt="">
            </a>
        </div>
    `;
}

createRealSidebar();