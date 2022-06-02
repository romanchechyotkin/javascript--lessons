const list = ['apple', 'orange', 'pineapple', 'melon']

const body = document.body
const div = document.createElement('div')
body.insertAdjacentElement('afterbegin', div)

for(let item of list){
    let p = document.createElement('p')
    p.innerText = item
    p.classList.add('fruit')
    div.append(p)
}

const fruits = document.querySelectorAll('.fruit')
for(let fruit of fruits){
    fruit.addEventListener('click', () => {
        const newdiv = document.createElement('div')
        newdiv.textContent = 
        body.append(newdiv)
    })
}