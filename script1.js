let details = document.getElementById("content1");
let div1 = document.getElementById("main1");
let butt = document.getElementById("btn3");
details.innerHTML=`<h3 style="margin-left:5vw; font-family: Mulish;
font-size: 1.2em;
font-weight: 600;
line-height: 23px;
letter-spacing: 0em; width:40vw">Full Name: ${localStorage.getItem("userName")}</h3>
<br>
<h3 style="margin-left:5vw; font-family: Mulish;
font-size: 1.2em;
font-weight: 600;
line-height: 23px;
letter-spacing: 0em; width:40vw">Email: ${localStorage.getItem("email")}</h3>
<br>
<h3 style="margin-left:5vw; font-family: Mulish;
font-size: 1.2em;
font-weight: 600;
letter-spacing: 0em; width:40vw">Token: ${localStorage.getItem("accessToken")}</h3>
<br>
<h3 style="margin-left:5vw; font-family: Mulish;
font-size: 1.2em;
font-weight: 600;
line-height: 23px;
letter-spacing: 0em; width:40vw">Password: ${localStorage.getItem("pw")}</h3>`;
div1.append(details);
div1.append(butt);


function logout(){
    window.location.href="index.html";
}



    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
        // Redirect the user to the profile page
        window.location.href = "index.html";
    }

