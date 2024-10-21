var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop:true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });



  async function fetchRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0]; 
  
  }
  
  async function populateTestimonials() {
    const testimonials = document.querySelectorAll('.cardt');
    testimonials.forEach(async (testimonial) => {
      const randomUser = await fetchRandomUser();
      testimonial.querySelector('.card-image img').src = randomUser.picture.large;
      testimonial.querySelector('.name').textContent = `${randomUser.name.first} ${randomUser.name.last}`;
    });
  }
  

  
  document.addEventListener('DOMContentLoaded', () => {
    populateTestimonials();
  });