const currentYear=new Date().getFullYear()
// console.log(currentYear)
document.getElementById("current-year").textContent=currentYear;









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