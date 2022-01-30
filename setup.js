
 let slides=document.querySelector('.image_slider ').children;
 let nextSlide=document.querySelector(".right-slide");
let prevSlide=document.querySelector(".left-slide");
let num=document.querySelector(".caption");
let totalSlides=slides.length;
let index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

const next=(direction)=>{

   if(direction=="next"){
      index++;
      if(index==totalSlides){
          index=totalSlides-1;
          
     }
   } 
   else{
           if(index==0){
           index=0;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     
 
}


