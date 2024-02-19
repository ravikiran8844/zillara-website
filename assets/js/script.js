const currentYear=new Date().getFullYear()
// console.log(currentYear)
document.getElementById("current-year").textContent=currentYear;



const preloader = document.getElementById('preloader');

window.addEventListener('load', function () {
  if (preloader) {
    // Show the preloader
    preloader.style.display = 'flex';

    // Set a minimum display time (1 second in this example)
    const minimumDisplayTime = 500;

    // Get the start time
    const startTime = new Date().getTime();

    // Calculate the time to wait before hiding the preloader
    const delayTime = Math.max(0, minimumDisplayTime - (new Date().getTime() - startTime));

    // Hide the preloader after the minimum display time
    setTimeout(function () {
      preloader.style.display = 'none';
    }, delayTime);
  }
});






$(document).ready(function() {
    $('.loader-btn').on('click', function() {
            let $this = $(this);
            let spinner = $this.find('.spinner-border');
            let cartText = $this.find('.cart-text');

            // Toggle spinner and cart text visibility
            spinner.toggle();
            cartText.toggle();

            // Simulate loading for 3 seconds
            setTimeout(function() {
                // Toggle spinner and cart text visibility again after 3 seconds (simulating loading completion)
                spinner.toggle();
                cartText.toggle();
            }, 1500);
        });
    });