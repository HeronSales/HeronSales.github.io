'use strict'

const switcher = document.querySelector('.click'); 
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Off";
    }
    else {
        this.textContent = "On";
    }
    console.log('current class name: ' + className);
    
});

const switcherTwo = document.getElementById('svg137'); 
switcherTwo.addEventListener('click',function() {          

    var classNames = document.getElementById('svg137');
    if(
        window.getComputedStyle( this ,null).getPropertyValue('background-color') == "rgba(255, 193, 7, 0.56)"
        ||
        window.getComputedStyle( this, null).getPropertyValue('background-color') == "rgba(22, 241, 2, 0.557)"
        )
    {
        this.style.background = `transparent`;
        this.style.boxShadow = `none`;        
    } else {
        this.style.background = `#ffc1078f`;
        this.style.boxShadow = `3px 30px 4em 10em #ffc1078f`;
    }
    console.log('current class name: ' + classNames);
    console.log(window.getComputedStyle( this ,null).getPropertyValue('background-color'));
});

const testandoPosi = document.getElementById('corpomoiv');
var x=0;
var y=0;
var coor = '';
var xMouse=0;
var yMouse=0;
var testeEscala=0;
const angulo = 90;


testandoPosi.addEventListener('mousemove', function(e) {
    xMouse = e.screenX;
    yMouse = e.screenY;
    const raioLampada = this.clientHeight;        
    x= xMouse - this.clientWidth/2;    
    y= this.clientHeight - Math.abs(Math.sqrt(Math.pow(raioLampada,2) + Math.pow((xMouse - (this.clientWidth/2)), 2)));
    
    if (xMouse <= (this.clientWidth/2)){
    testeEscala = angulo - Math.round(xMouse * (angulo / ((this.clientWidth/2))));
    } else {
    testeEscala = angulo + Math.round(xMouse * (angulo / (-this.clientWidth + (this.clientWidth/2))));
    }         
    document.getElementById('svg137').style.transition = `transform 1s`;
    document.getElementById('svg137').style.transform =`translate(${(x)}px, ${(y)}px) rotate(${(testeEscala)}deg)`;
});


// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------
// using import syntax
textAnimationItens("DATA SCIENTIST ;DESENVOLVEDOR WEB ; DESENVOLVEDOR PYTHON ; ENGENHEIRO ELETRICISTA");
var container = document.querySelector('#tetxanimation');
function textAnimationItens(text) {
    var textItens = text.split(";");
    var tl = gsap.timeline({delay:0.5, repeat: Infinity, repeatDelay:2});
    
    var itensCount = textItens.length; 
    var time=0;
    var itenElement = "";    
    var duration=0; 
    var i;
    console.log(textItens + " " + itensCount);

    for(i=0; i < itensCount; i++){
        itenElement = textItens[i];       
        duration = Math.max(3, itenElement.length * 0.2);

        tl.to(".tetxanimation", duration, {text:itenElement, ease:"slow(0.25, 0.9)"}, time)
        .to(".tetxanimation", duration, {text:itenElement, ease:"slow(0.25, 0.9, true)"}, time);
        time += duration - 0.05;
        console.log(duration + " " + i);        
    }
    
}

var logoRotation = document.querySelector('.logo-rotate');
var circleRot = gsap.timeline({repeatDelay:1});
circleRot.to(".logo-rotate",{duration:2,rotation:180, transformOrigin:"50% 50%"});
circleRot.to(".logo-rotate",{duration:4,rotation:420, transformOrigin:"50% 50%"});
circleRot.to(".logo-rotate",{duration:5,rotation:1000, transformOrigin:"50% 50%"});
circleRot.to(".logo-rotate",{duration:7,rotation:5600, transformOrigin:"50% 50%"});  

logoRotation.addEventListener("mouseover",() => {
    circleRot.restart();
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbycCAL5ot9bglc7_wl3H8FYV1rIN813Lkydf6sOETGIKZF4WpyPCMNqkUk0-S0LMAPxCw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => $("#form_alerts").html("<div class='alert alert-success'>Mensagem eviada.</div>"))
    .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Algo deu errado.</div>"))
})