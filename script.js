document.addeventlistener("DOMContentLoaded", (event) => {
    const form = document.getElementById('registration-form');

    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission})

        document.getElementById("username").value = " ";
        document.getElementById("email").value = " ";
        document.getElementById("password").value = "";

        const input = trim()

        var isValid = 'true';

        let messages = [ 
            alert(hello)
        ]
    
            // Validate username
            if (username.length < 3) {isValid = 'false'}

            // Validate email
            if (emailInput.value !== '@', '.') {isValid ='false'}

            // Validate password
            if (password.length < 8) {isValid = 'false'}

});