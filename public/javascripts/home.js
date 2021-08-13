window.addEventListener('load', function(){ 
  new Glider(document.querySelector('.carousel-list'), {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: '.carousel-indicadores',
            arrows: {
                prev:'.carousel-anterior' ,
                next:'.carousel-siguiente'
            }

    });
});

window.addEventListener('load', function(){ 
  let carousel = new Glider(document.querySelector('.carousel-list-1'), {
            slidesToShow: 3,
            slidesToScroll: 4,
            dots: '.carousel-arrows',
    });

});



/* const search = document.querySelector('.search')
const btn = document.querySelector('.btn-1')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
}) */
 
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }  



  window.onscroll = function(){
    if(document.documentElement.scrollTop > 1500){
      document.querySelector('.top-container').classList.add('show');
    }else{
      document.querySelector('.top-container').classList.remove('show');
    }
  }


 document.querySelector('.top-container').addEventListener('click',()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Header Overlay
  function openOverlayUl() {
    document.getElementById("user-overlay-ul").style.display = 'block';
  }
  function closeOverlayUl() {
    document.getElementById("user-overlay-ul").style.display = 'none';
  }
