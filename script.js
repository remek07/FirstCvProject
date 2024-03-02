// slider with my projects
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let slideWidth = document.querySelector('.sliderContentBox').clientWidth;
let boxShow = document.querySelector('.boxShowContent');
let slide  = document.querySelectorAll('.slide');
console.log(slide.length);
let counter = 0;

nextBtn.addEventListener('click', () =>{
    counter++;
    boxShow.style.transform = "translate("+counter*-slideWidth+"px)";
    checkCounter(counter);
});

prevBtn.addEventListener('click', () =>{
    counter--;
    boxShow.style.transform = "translate("+counter*-slideWidth+"px)";
    checkCounter(counter);
});
let checkCounter = () =>{
    if(counter>=(slide.length)-1){
        nextBtn.disabled = true;
    }
    else{
        nextBtn.disabled = false;
    }
    if(counter<=(slide.length)-(slide.length)){
        prevBtn.disabled = true;
    }
    else{
        prevBtn.disabled = false;
    }
}

// animation top menu on start page 

$(document).ready( function(){
    $('.contentMenu').animate({top: '0px', opacity: '1'}, 1000)
    $('.homeBox').animate({ opacity: '1'}, 1500)

});


// left menu animation on scroll to bottom

let checkAnimate = 0;

    $(document).scroll(function(){
        let heightToTop = $(window).scrollTop();  
            if(checkAnimate == 0 && heightToTop>120){
                startAnimateIconsLeft();
                checkAnimate = 1;
                console.log(checkAnimate);
            }
            else if(checkAnimate == 1 && heightToTop<90){
                endAnimateIconsLeft();
                checkAnimate = 0;
                console.log(checkAnimate);
            }
    });
    let startAnimateIconsLeft = () =>{
        $('.leftMenu ul.left').animate({left: '0px'},1000);
            for(let i=0;i<=4;i++){
                let timeAnimate = (i+1)*150;
                $('.leftMenu ul.left li:nth-child('+i+')').delay(1000).animate({left: '0px'},timeAnimate);
            } 
    }
    let endAnimateIconsLeft = () =>{
        for(let i=0;i<=4;i++){
            let timeAnimate = (i+1)*150;
            $('.leftMenu ul.left li:nth-child('+i+')').animate({left: '-120px'},timeAnimate);
            $('.leftMenu ul.left').animate({left: '0px'},1000);
        } 
    }

// phone menu close

document.querySelector('.rightCrossMenu').addEventListener('click', ()=>{
    document.querySelector('.phoneMenu').style.right = "-100%";
});

// phone menu open

document.querySelector('.phoneBurgerIcon').addEventListener('click', ()=>{
    document.querySelector('.phoneMenu').style.right = "0%";
});

//menu phone onclick on elements and close menu

const elements = document.querySelectorAll(".menu li a");
elements.forEach(function (element) {
    element.addEventListener('click',()=>{
        document.querySelector('.phoneMenu').style.right = "-100%";
    });
});