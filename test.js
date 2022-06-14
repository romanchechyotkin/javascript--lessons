const btnStart = document.querySelector('.beg')
const btnEnd = document.querySelector('.fin')
const output = document.querySelector('footer')

// btnStart.addEventListener('click', () => {
//     document.addEventListener('mousemove', handle)
// })

// btnEnd.addEventListener('click', () => {
//     document.removeEventListener('mousemove', handle)
// })

// function handle(e){
//     output.innerText = `X: ${e.pageX}px - Y: ${e.pageY}px`
// }

window.addEventListener('mousemove', (event) => {
    output.innerText = `X: ${event.pageX}px - Y: ${event.pageY}px`
})