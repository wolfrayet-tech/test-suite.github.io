

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
  

function scaleUp(elem){
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

gsap.from(".reveal-later", {
    duration: 5,
    xPercent : 1000,
    ease: "power4",
    opacity:0.1,
  });



function navclick(elem){
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
    window.location.href = "service.html";

}