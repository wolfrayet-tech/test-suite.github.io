/*
AMM Packaging Company JS library
Author: Dhruv Parikh
Date: 13-02-2022
Dependencies: JQuery, GSAP

This is a sole property of Wolf Rayet Technologies. If anyone found using the file without permission of the author or company will be subjected to legal inquiries.
*/  


/* Variables */
var nav_redirect_url="index.html";

function scaleUp(elem){
    navmap(elem);
    gsap.to(elem,{
        duration:1,
        scaleX:1.5, 
        scaleY:1.5,
        ease: "power4",
        opacity:0.8,
        textShadow:"2px 5px 5px green",
    }
    );
}

function scaleDown(elem){
    gsap.to(elem,{
        duration:1,
        scaleX:1, 
        scaleY:1,
        ease: "power4",
        opacity:1,
        textShadow:"",
    }
    );
}

function navclick(elem){
    navmap(elem);
    var h = window.innerHeight/2;
    var w = -window.innerWidth/2;
    //window.scrollTo(0, 200);
    //elem.style.position= "absolute";
    elem.style.zIndex="500";
    if(detectMob()==true){
         document.getElementsByClassName("nav navbar-nav navbar-right")[0].style.position="absolute";
         w = -w;
    }
    var tl = gsap.timeline({onComplete: redirect});
    tl.to(elem, {
      duration: 2, 
    })
    .to(window,{
        duration:3,
        scrollTo:200,
    },0)
    .to(elem,{
        duration:2,
        x:w,
        y:h,
        fontSize: 50,
    },0) 

    .to(elem, {
        duration: 1.5, 
        scaleX:3,
        scaleY:3,
        xPercent:-100,
        yPercent:1000,
        color:"#fff",
        fontSize: 500,
    }, 1)
    .to(body,{
        duration: 0.5,
        backgroundColor:"#ffffff",
        opacity:0,
    },1);

}

function redirect(){
    window.location.href = nav_redirect_url;

}

function navmap(elem){
    switch(elem.id){
        case "products":
            nav_redirect_url = "products.html";
            break;
        case "service":
            nav_redirect_url = "service.html";
            break;
        case "clientele":
            nav_redirect_url = "about.html";
            break;
        case "contact":
            nav_redirect_url = "contact.html";
            break;
        default:
            nav_redirect_url = "index.html";
    }
}

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
  }


gsap.to(".yo", {duration: 5, text: "We love the Web and the work we do.We work closely with our clients to deliver </br>  the best possible solutions for their needs.", ease:"rough",repeat: -1, repeatDelay: 1});

gsap.from(".reveal-later", {
    duration: 5,
    xPercent : 1000,
    ease: "power4",
    opacity:0.1,
  });

/*Tilt Js */
$('.border').tilt({
    maxTilt: 45,
    speed: 500,
    perspective: 1000
});


