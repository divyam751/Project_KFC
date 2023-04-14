
document.getElementById('submit_OTP').addEventListener('click', verify);

let user1 = localStorage.getItem("users");
user1 = JSON.parse(user1);
user1 = user1[0].phoneNo;
let userinfo = document.getElementById("userDetaill").textContent;
document.getElementById("userDetaill").textContent =  userinfo + "   "  + `${user1}`
function verify() {
  
    let i0 = document.getElementById('box0').value;
    let i1 = document.getElementById('box1').value;
    let i2 = document.getElementById('box2').value;
    let i3 = document.getElementById('box3').value;

    if (i0 == '1' && i1 == '2' && i2 == '3' && i3 == '4') {
        window.location.href = "OTP.html";
       } else {
         alert('Incorrect OTP');
       }
     }