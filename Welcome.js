const signupForm = document.getElementById('Uerdetails');
let user1 = localStorage.getItem("users");
user1 = JSON.parse(user1);
const phoneNo =  user1[0].phoneNo;

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('Firstname').value;
    const mail = document.getElementById('Email').value;
    const user = {phoneNo, name, mail};
    let users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
      } else {
        localStorage.setItem('users', JSON.stringify([user]));
      }
       alert('Signup Succesfull');
      document.getElementById("Uerdetails").reset();
      window.location.href = 'Index.html'
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
      window.location.href = 'Index.html'

}