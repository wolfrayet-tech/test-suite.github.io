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
    elem.style.position= "absolute";
    elem.style.zIndex="500";
    var tl = gsap.timeline({onComplete: redirect});
    
    tl.to(elem, {
      duration: 2, 
      attr:{
        startOffset:'100%'
      }
    }) 
    .to(elem, {
        duration: 1.5, 
        scaleX:3,
        scaleY:3,
        xPercent:-100,
        yPercent:1000,
        color:"#fff",
        fontSize: 500,
    }, 0)
    .to("body",{
        duration: 1.5,
        backgroundColor:"#ffffff",
        opacity:0,
    },0);

}

function redirect(){
    window.location.href = "service.html";

}