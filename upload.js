document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const uploadStatus = document.getElementById('uploadStatus');

    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(uploadForm);

        // Display loading message
        uploadStatus.textContent = 'Uploading...';

        // Simulate file upload (replace this with actual upload logic)
        setTimeout(() => {
            uploadForm.reset(); // Reset form after successful upload
            uploadStatus.textContent = ""; // Add a success class to the status message
            // Display success message in modal
            document.getElementById("modalMessage").innerText = "Book Uploaded successfully!";
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
        }, 2000); // Adjust timeout as needed (simulating 2 seconds delay)
    });

});

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