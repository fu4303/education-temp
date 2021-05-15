let slideIndex = 0;

const showSlides = () => {
    const slides = document.querySelectorAll('.tutor-container')
    const dots = document.querySelectorAll('.dot')
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none'
    }
    slideIndex ++

    if(slideIndex > slides.length){
        slideIndex = 1
    }

    dots.forEach(dot => {
        dot.className = dot.className.replace(' active', '')
    })
    slides[slideIndex-1].style.display = 'block'
    dots[slideIndex-1].className += " active"
    setTimeout(showSlides, 2000)
}

showSlides()