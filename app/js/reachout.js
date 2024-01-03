const createReachout = ()=> {
    let Reachout = document.querySelector('.reachout-container');

    Reachout.innerHTML = `

        <div class="reachout-content flow_1">
            <a href="#"><img src="Images/call_end_24px.png" alt="phone"></a>
        </div>
        <div class="reachout-content flow_2">
            <a href="#"><img src="Images/email_24px.png" alt="email"></a>
        </div>
        <div class="reachout-content flow_3">
            <a href="#"><img src="Images/location_white_on_24px.png" alt="Addr"></a>
        </div>
        
    `;
}

createReachout();