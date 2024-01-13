let Scroll_Top=document.getElementById("scroll-top");

function ScrollTopButton(){
    let Screen=window.scrollY;
    if(Screen>=700){
        Scroll_Top.className="arrow-up show";
    }else{
        Scroll_Top.className="arrow-up hide";

    }
    
}
window.addEventListener("scroll",ScrollTopButton);

function Move_Top(){
    window.scrollTo(0,0);
}


