const wrapper = document.querySelector(".wrapper")

const signupForm = document.querySelector('#formSig');
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNo = document.querySelector('#Phone').value;
    if(phoneNo <= 1000000000) {
        alert("Kindly enter a valid phone number!");
        document.getElementById("signform").reset();
    }
    else{
    const user = {phoneNo};
    let users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
        users[0] = user;
        localStorage.setItem('users', JSON.stringify(users));
      } else {
        localStorage.setItem('users', JSON.stringify([user]));
      }
       alert('Your OTP is 1234');
      document.getElementById("signform").reset();
      window.location.href = 'OTP.html'
    }
    });


function guest(){
    const user = "Guest";
    let users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
      } else {
        localStorage.setItem('users', JSON.stringify([user]));
      }
      window.location.href = './LandingPage/index.html'

}