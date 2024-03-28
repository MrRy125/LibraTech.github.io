document.querySelectorAll('.download-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const downloadLink = btn.getAttribute('data-download');
      // Open the download link in a new tab
      window.open(downloadLink, '_blank');
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
