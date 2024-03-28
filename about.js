document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    setTimeout(() => {
    // Assuming function to handle the message
    var messageSent = sendMessage(name, email, message);
    if (messageSent) {
        // Display success message in modal
        document.getElementById("modalMessage").innerText = "Message sent successfully!";
        document.getElementById("statusModal").style.display = "block";
    } else {
        // Display error message in modal
        document.getElementById("modalMessage").innerText = "Error sending message. Please try again.";
        document.getElementById("statusModal").style.display = "block";
    }
    }, 2000);
});

// Close the modal when the close button or outside the modal is clicked
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("statusModal").style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("statusModal")) {
        document.getElementById("statusModal").style.display = "none";
    }
});

// Assuming function to send the message (replace with actual implementation)
function sendMessage(name, email, message) {
    // Simulate sending message (replace with actual sending code)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    return true; // For the sake of this example, assume message is sent successfully
}


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