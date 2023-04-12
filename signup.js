function sendotp(){
    console.log(document.querySelector(".phoneNo").value)
    if ( document.querySelector(".phoneNo").value == undefined){
        alert("please fill all the details")
    }
    else{
    alert('Your OTP is 1234')
}
}