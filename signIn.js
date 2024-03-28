// Function to show Log In form and hide Register form
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('swlogin').style.backgroundColor = '#007bff';
    document.getElementById('swregister').style.backgroundColor = '#fff';
    document.getElementById('swlogin').style.color = '#fff';
    document.getElementById('swregister').style.color = '#007bff';

}

// Function to show Register form and hide Log In form
function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('swlogin').style.backgroundColor = '#fff';
    document.getElementById('swregister').style.backgroundColor = '#007bff';
    document.getElementById('swlogin').style.color = '#007bff';
    document.getElementById('swregister').style.color = '#fff';
}

// Function to handle Log In form submission
function handleLoginForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate form fields (add your validation logic here)
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate Log In process (replace this with actual authentication logic)
    // Display success message in modal
    document.getElementById("modalMessage").innerText = "Log In Successfully!";
    document.getElementById("statusModal").style.display = "block";
    
    // Close the modal when the close button or outside the modal is clicked
    document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("statusModal").style.display = "none";
    });
    window.addEventListener("click", function(event) {
        if (event.target == document.getElementById("statusModal")) {
            document.getElementById("statusModal").style.display = "none";
        }
    });
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('loginForm').reset(); // Reset form fields
}

// Function to handle Register form submission
function handleRegisterForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate form fields (add your validation logic here)
    let username = document.getElementById('username2').value.trim();
    let email = document.getElementById('email2').value.trim();
    let password = document.getElementById('password2').value.trim();

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    setTimeout(() => {
    // Simulate Registration process (replace this with actual registration logic)
    // Display success message in modal
    document.getElementById("modalMessage").innerText = "Registered Successfully!";
    document.getElementById("statusModal").style.display = "block";
    
    // Close the modal when the close button or outside the modal is clicked
    document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("statusModal").style.display = "none";
    });
    window.addEventListener("click", function(event) {
        if (event.target == document.getElementById("statusModal")) {
            document.getElementById("statusModal").style.display = "none";
        }
    });
    document.getElementById('username2').value = "";
    document.getElementById('username2').value = "";
    document.getElementById('username2').value = "";
    document.getElementById('registerForm').reset(); // Reset form fields
    }, 2000);
}

// Add event listeners for form submission
document.getElementById('loginForm').addEventListener('submit', handleLoginForm);
document.getElementById('registerForm').addEventListener('submit', handleRegisterForm);


const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
let num = 0;

menuToggle.addEventListener('click', function () {
    if(num==0){
        navLinks.className = 'show';
        num+=1;
    }
    else {
        navLinks.className = 'hide';
        num-=1;
    }
});
