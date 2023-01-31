const Section = document.querySelector('.project-slider')
const Dot = document.querySelectorAll('.dot')
const Slide1 = document.querySelector('.project-one')
const Slide2 = document.querySelector('.project-two')
const Slide3 = document.querySelector('.project-three')

Section.addEventListener('click', Slider)


function Slider(event){
    const { target } = event

    if(target.id === 'dot1'){
        
        Slide3.classList.remove('img-active')
        Slide2.classList.add('img-active')
        Slide1.classList.add('img-active')
    } else if(target.id === 'dot2'){
        
       Slide3.classList.add('img-active')
       Slide1.classList.add('img-active')
       Slide2.classList.remove('img-active')
      
    }else if(target.id === 'dot3'){
        
        Slide1.classList.remove('img-active')
        Slide2.classList.add('img-active')
        Slide3.classList.add('img-active')
    } else{
        return
    }
}
