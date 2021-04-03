
// Image Slider Section

let sliderImages = document.querySelectorAll('.slide-content'),
    arrowLeft = document.querySelector('.fa-chevron-left'),
    arrowRight = document.querySelector('.fa-chevron-right'),
    current = 0;

    //Clear all images
    function reset() {
      for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
        sliderImages[i].classList.add('active');
      }
    }
    // Scroll Images
    function scrollSide() {
      sliderImages[i].classList.add('active');
    }

    // Init slider
    function startSlide(){
      reset();
      sliderImages[0].style.display = 'block';
    }

    // Show prev
    function slideLeft() {
      reset();
      sliderImages[current - 1].style.display = 'block';
      current--;
    }

    // Show next
    function slideRight() {
      reset();
      sliderImages[current + 1].style.display = 'block',
      current++;
    }

    // Left arrow click
    arrowLeft.addEventListener('click',() => {
      if(current === 0) {
        current = sliderImages.length;
      }
      slideLeft();
    });

    // Right arrow click
    arrowRight.addEventListener('click', ()  => {
      if(current === sliderImages.length - 1) {
        current = -1;
      }
      slideRight();
    });
    
    startSlide();


    // Scroll Portion

    const scrollClicker = document.querySelector('.scroll');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollClicker.style.display = "block";
        } else {
          scrollClicker.style.display = "none";
        }
      }
        // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
      }
    
// Toggle / Show Side Navigation Section

const toggle = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-window-close');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});
    

closeBtn.addEventListener('click', () => {
  document.body.classList.remove('show-nav');
});
    
    