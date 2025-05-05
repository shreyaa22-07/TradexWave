document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let index = 0;

    function showNextItem() {
        index = (index + 1) % totalItems;
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextItem, 3000); // Change image every 3 seconds
});

let slides = document.querySelectorAll('.reviews .flex .slides-container .slide');
        let index = 0;
        function next(){
            slides[index].classList.remove('active');
            index = (index+1)% slides.length;
            slides[index].classLista.add('active')
        }
        function prev(){
            slides[index].classList.remove('active');
            index = (index-1+ slides.length) % slides.length;
            slides[index].classList.add('active');
        }

        document.addEventListener('DOMContentLoaded', () => {
            const toggle = document.getElementById('subscriptionToggle');
            const monthlyPlans = document.getElementById('monthlyPlans');
            const annualPlans = document.getElementById('annualPlans');
        
            function updatePlans() {
                if (toggle.checked) {
                    // Show annual plans and hide monthly plans
                    annualPlans.classList.add('active');
                    monthlyPlans.classList.remove('active');
                } else {
                    // Show monthly plans and hide annual plans
                    monthlyPlans.classList.add('active');
                    annualPlans.classList.remove('active');
                }
            }
        
            // Initial call to set the correct plan based on default toggle state
            updatePlans();
        
            // Add event listener to toggle switch
            toggle.addEventListener('change', updatePlans);
        });