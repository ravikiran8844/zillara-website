const currentYear=new Date().getFullYear()
// console.log(currentYear)
document.getElementById("current-year").textContent=currentYear;



const preloader = document.getElementById('preloader');

window.addEventListener('load', function () {
  if (preloader) {
    // // Show the preloader
    // preloader.style.display = 'flex';

    // Set a minimum display time (1 seconds in this example)
    const minimumDisplayTime = 1000;

    // Get the start time
    const startTime = new Date().getTime();

    // Use setTimeout to hide the preloader after the minimum display time
    setTimeout(function () {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;

      // Calculate the remaining time to meet the minimum display time
      const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);

      // Use setTimeout again to hide the preloader after the remaining time
      setTimeout(function () {
        preloader.style.display = 'none';
      }, remainingTime);
    }, 0); // Use 0 for timeout to allow the browser to render the preloader before starting the timeout
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