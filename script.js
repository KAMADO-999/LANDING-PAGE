const nextButton = document.querySelector('.next-btn');
const video=document.querySelector('.hero-video');
const movieList=['videos/hero-1.mp4','videos/hero-2.mp4','videos/hero-3.mp4','videos/hero-4.mp4'];
let i=0;
nextButton.addEventListener('click',()=>{
    i++;
    video.src=movieList[i];
    if(i===3){
        i=-1;
    }
})