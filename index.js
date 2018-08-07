$('.your-class').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});



window.onload = function(){
  var scrolled;
  var timer;

  var top = document.getElementById('top');
    
    window.onscroll = function(){
        if(window.pageYOffset > 300){
            top.style.display = 'block';
        } else {
            top.style.display = 'none';
        }
    }

  document.getElementById('top').onclick = function(){
    scrolled = window.pageYOffset;
    scrollToTop();
  }

  function scrollToTop(){
    if(scrolled > 0){
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(scrollToTop, 40);
    }
    else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
}

