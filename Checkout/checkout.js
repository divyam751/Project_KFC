document.getElementById('checkout-form').addEventListener('submit', function (event) {
        event.preventDefault();

       
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var address = document.getElementById('address').value;
        var city = document.getElementById('city').value;
        var zip = document.getElementById('zip').value;

        
        if (name && email && address && city && zip) {
                alert('Form submitted successfully!');
                
        } else {
                alert('Please fill in all required fields.');
        }
});
