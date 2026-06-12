
// document.addEventListener("DOMContentLoaded", function () {

//     new Swiper(".destinationSwiper", {
//         slidesPerView: 4,
//         spaceBetween: 30,
//         loop: true,

//         autoplay: {
//             delay: 2500,
//             disableOnInteraction: false,
//         },

//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },

//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//                 spaceBetween: 15
//             },
//             576: {
//                 slidesPerView: 2,
//                 spaceBetween: 20
//             },
//             768: {
//                 slidesPerView: 3,
//                 spaceBetween: 25
//             },
//             992: {
//                 slidesPerView: 4,
//                 spaceBetween: 30
//             }
//         }
//     })

// });
new Swiper(".destinationSwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
   
    //centeredSlides: true,
    autoplay: false,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 15 },
        576: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 25 },
        992: { slidesPerView: 4, spaceBetween: 10},
    }
});

// new Swiper("#testimonalsSwiper", {
//     slidesPerView: 5,
//     spaceBetween: 10,
//     loop: true,
   
//     //centeredSlides: true,
//     autoplay: false,

//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },

//     breakpoints: {
//         320: { slidesPerView: 1, spaceBetween: 15 },
//         576: { slidesPerView: 2, spaceBetween: 20 },
//         768: { slidesPerView: 3, spaceBetween: 25 },
//         992: { slidesPerView: 4, spaceBetween: 10},
//     }
// });

document.addEventListener("DOMContentLoaded", function () {

    new Swiper("#testimonalsSwiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        speed: 1000,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false, 
        }, 
        // autoplay:false,

        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }
        }
    });

});
