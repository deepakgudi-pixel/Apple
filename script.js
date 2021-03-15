// Cube
let y = 0

const cube = document.querySelector('.cube');

const rotate = () => {
    setInterval(()=>{
        cube.style.transform = `rotateY(${y++}deg)`

    }, 30)
}

rotate()
// Cube ends

// Slide-show
const slideShowDivs = () => {
    for(let i=1; i<=6; i++){
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slide-show').appendChild(div)
    }

}
slideShowDivs()

const divs = document.querySelectorAll('.slide-show div')

let a = 1

const slideshow = () => {
    setInterval(()=>{
        a++
        const div = document.querySelector('.slide-show .change')
        
        div.classList.remove('change')

        if(a < divs.length){
            div.nextElementSibling.classList.add('change')
        }

        else{
            divs[0].classList.add('change')
            a = 1

        }

    }, 5000)
}

slideshow()
// Slide-show Ends

//section 3
const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2){
        section3Content.classList.add('change')

    }

} )

//section 3 ends

// section 4
// control

document.querySelectorAll('.watch-control, .iphone-btn').forEach(control =>{
    control.addEventListener('click', e =>{
        e.preventDefault()
    })
})

const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')


let axisY = 0
let axisX = 0

const hideControl = () => {
    if(axisY === -280){
        watchTopControl.classList.add('hideControl')
    } else{
        watchTopControl.classList.remove('hideControl')
    }

    if(axisY === 280){
        watchBottomControl.classList.add('hideControl')
    } else{
        watchBottomControl.classList.remove('hideControl')
    }

    if(axisX === 280){
        watchRightControl.classList.add('hideControl')
    } else{
        watchRightControl.classList.remove('hideControl')
    }

    if(axisX === -280){
        watchLeftControl.classList.add('hideControl')
    } else{
        watchLeftControl.classList.remove('hideControl')
    }
}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`
    hideControl()
})

watchBottomControl.addEventListener('click', () =>{
    watchCases.style.marginTop = `${axisY +=70}rem`
    hideControl()
})

watchRightControl.addEventListener('click', () =>{
    watchBands.style.marginRight = `${axisX +=70}rem`
    hideControl()
})

watchLeftControl.addEventListener('click', () =>{
    watchBands.style.marginRight = `${axisX -=70}rem`
    hideControl()
})



// section 4 ends



