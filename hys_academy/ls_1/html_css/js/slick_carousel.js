export default function slick (){
    $('.course_swiper_wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    (function(){
        const prevBtn = document.querySelector(".slick-prev");
        const nextBtn = document.querySelector(".slick-next");

        const prevArrow = `<div class="button_arrow left"></div>`;
        const nextArrow = `<div class="button_arrow right"></div>`;
            
        prevBtn.innerHTML = prevArrow;
        nextBtn.innerHTML = nextArrow;
    }());
}
