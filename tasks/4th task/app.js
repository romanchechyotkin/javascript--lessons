const div = document.createElement('div')
div.classList.add('wrapper')

const body = document.body
body.appendChild(div)
console.log(body);

const header = document.createElement('h1')
header.textContent = 'DOM'
div.insertAdjacentElement("beforebegin", header)

const list = `
    <ul>
        <li>s</li>
        <li>d</li>
        <li>s</li>
    </ul>
`
div.innerHTML = list

const img = document.createElement('img')
img.src = 'https://picsum/photos/240'
img.width = 240
img.classList.add('super')
img.alt = 'superman'
div.appendChild(img)

const elemHTML = `<div class='pDiv'>
    <p>kldesnfldrnesoflir rfdgdsfg</p>
    <p>erfclms defdsmomfds efedsfm</p>
</div>`

const ullist = div.querySelector('ul')
ullist.insertAdjacentHTML("beforebegin", elemHTML)

const pDiv = document.querySelector('.pDiv')
pDiv.children[1].classList.add('text')
console.log(pDiv.children[1]);
pDiv.firstElementChild.remove()


const generateAutoCard = (brand, color, year) => {
    return `
        <div class='autoCard'>
            <h2>BRAND YEAR</h2>
            <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
        </div>
    `
}

const carsDiv = document.createElement('div')
carsDiv.classList.add('autos')
div.insertAdjacentElement("beforebegin", carsDiv)