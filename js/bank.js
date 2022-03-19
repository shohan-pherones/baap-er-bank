document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value; 

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //admin panel
    if(userEmail == 'admin@gmail.com' && userPassword == 'admin'){
        window.location.href = './banking.html';
    }
    else{
        alert('Invalid email or password');
    }
    
})