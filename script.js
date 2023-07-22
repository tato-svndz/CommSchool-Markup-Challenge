window.addEventListener('scroll', function() {
    var scrollNav = document.getElementById('scrollNav');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 0) {
      scrollNav.classList.add('scrolled');
    } else {
      scrollNav.classList.remove('scrolled');
    }
  });
  