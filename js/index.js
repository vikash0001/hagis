var container_wrapper = document.getElementById('landing_page')
var container = document.getElementById('landing_page-animation_img');
var images = document.querySelectorAll('#landing_page-animation_img img');
i = 0;
x1 = 0;
y1 = 0;

// on mousemove chaining callBackFunction

container_wrapper.addEventListener('mousemove',function(e){
    var x = e.pageX;
    var y = e.pageY;
    if(x-x1 >= 150 || x1-x >=150 || y-y1 >=150 || y1-y >= 150)
    {

        if( i < 5){i = i + 1;}
        else{i = 0;}

        images.forEach(item => {item.classList.remove('active')});
        images[i].classList.add('active'); 
        x1 = x; y1 = y;
    }
});

// on mouseenter event function

container_wrapper.addEventListener('mouseenter',() => 
{
    container.style.display = 'block'
});

// on mouseleave event function

container_wrapper.addEventListener('mouseleave',() =>
{
    container.style.display = 'none'
});

// on mousemove event function

 var func = function(event)
 {
    var x = event.pageX;
    var y = event.pageY;
    container.style.top = y + 'px'
    container.style.left = x + 'px'
 };
 container_wrapper.addEventListener('mousemove',func);


//on scroll animation function

var gallary_section = document.querySelector('.gallary_section');
var titleOne = document.querySelector('.title_one');
var titleTwo = document.querySelector('.title_two');
var imgTwo = document.querySelector('.two');
var imgThree = document.querySelector('.three');
var value = window.pageYOffset;

function gallaryanim (){
    var value = window.pageYOffset;
    titleOne.style.translate = - value * 1 / 2.5 + 'px'
    titleTwo.style.translate = - value * 1 / 2 + 'px'
    imgTwo.style.transform = 'translateY('+value *  - 1/5 +'px'+')'
    imgThree.style.transform = 'translateY('+value *  - 1/5 +'px'+')'
}
window.addEventListener('scroll',gallaryanim); 

//intersection observer function

var about = document.querySelector('.footer_about');

options = {
    root:null,
    rootMargin:"60px 0px -1px 0px",
    threshold:0.5
}

var observer = new IntersectionObserver(call , options);

observer.observe(about);

function call (entries , observer){
entries.forEach( entry => {
    if(entry.isIntersecting)
    {
        about.classList.add('about_active')
    }
    else{
        about.classList.remove('about_active') 
    }
}
)};

var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');
var line4 = document.querySelector('.line4');
var line5 = document.querySelector('.line5');

window.addEventListener('load',function(){
   line1.classList.add('line1_active')
   line2.classList.add('line2_active')
   line3.classList.add('line3_active')
   line4.classList.add('line4_active')
   line5.classList.add('line5_active')
});

