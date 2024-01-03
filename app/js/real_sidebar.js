const createRealSidebar = () =>{
    let sidebar = document.querySelector('.left');

    sidebar.innerHTML = `
        <div class="dropdown" id="myDropDown">
            <a href="visa-services.html" class=" mydropdown dropdown__curve">
                <span>Tourist Visa</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="student-visa.html" class="mydropdown">
                <span>Student Visa</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="family-visa.html" class="mydropdown">
                <span>Family Visa</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="work-visa.html" class="mydropdown">
                <span>Work Visa</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="business-visa.html" class="mydropdown">
                <span>Business Visa</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="permanent-resident.html" class="mydropdown">
                <span>Permanent Residency</span>
                <img src="images/expandless24px.png" alt="">
            </a>
            <a href="citizenship-application.html" class="mydropdown">
                <span>Citizenship Application</span>
                <img src="images/expandless24px.png" alt="">
            </a>
        </div>
    `;
}

createRealSidebar();