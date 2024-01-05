
function b1(){
    var b1 =document.querySelector("#btn1");
    var b2 =document.querySelector("#btn2");
    var b3 =document.querySelector("#btn3")
    var slider =document.querySelector(".slider");

    b1.style.backgroundColor="white";
    b1.style.color="black";
    b2.style.backgroundColor="transparent";
    b3.style.backgroundColor="transparent";
    slider.style.marginLeft ="1350px";
    slider.style.animation="none";

}
function b2(){
    var b1 =document.querySelector("#btn1");
    var b2 =document.querySelector("#btn2");
    var b3 =document.querySelector("#btn3")
    var slider =document.querySelector(".slider");

    b2.style.backgroundColor="white";
    b2.style.color="black";
    b3.style.backgroundColor="transparent";
    b1.style.backgroundColor="transparent";
    slider.style.marginLeft ="0px";
    slider.style.animation="none";


}function b3(){
    var b1 =document.querySelector("#btn1");
    var b2 =document.querySelector("#btn2");
    var b3 =document.querySelector("#btn3")
    var slider =document.querySelector(".slider");

    b3.style.backgroundColor="white";
    b3.style.color="black";
    b2.style.backgroundColor="transparent";
    b1.style.backgroundColor="transparent";
    slider.style.marginLeft =" -1350px";
    slider.style.animation="none";
}

gsap.from("header" ,)