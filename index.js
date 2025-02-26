let cars = [
    {
        name: 'Bugatti Mistral',
        id: 1,
        img: './images/2024-bugatti-mistral.jpg',
        price: 5000000
    },
    {
        name: 'BMW 7 Series',
        id: 2,
        img: './images/bmw-css-7.jpg',
        price: 98475
    },
    {
        name: 'Bugatti Chiron',
        id: 3,
        img: './images/bugatti-chiron-1500.jpg',
        price: 3000000
    },
    {
        name: 'Chevrolet Camaro',
        id: 4,
        img: './images/chevrolet-camaro-bum-2.jpg',
        price: 125000
    },
    {
        name: 'Rolls Phantom',
        id: 5,
        img: './images/rolls-royce-phantom.jpg',
        price: 510000
    },
]

let imageDiv = document.querySelector('.image')
let previousBtn = document.querySelector('.previous')
let nextBtn = document.querySelector('.next')
let name = document.querySelector('.name')
let price = document.querySelector('.price')

let counter = 0
imageDiv.style.backgroundImage = `url('${cars[counter].img}')`
name.innerText = `${cars[counter].name}`

const numberFormatter = new Intl.NumberFormat('en-us',{
    style: 'currency',
    currency: 'USD',
})

nextBtn.addEventListener('click', () => {
    if(counter >= cars.length - 1){
        nextBtn.disabled = true;
    }
    else{
        previousBtn.disabled = false
        counter++
        imageDiv.style.backgroundImage = `url('${cars[counter].img}')`
        name.innerText = `${cars[counter].name}`
        price.innerText = `${numberFormatter.format(cars[counter].price)}`
    }
})

previousBtn.addEventListener('click', () => {
    nextBtn.disabled = false
    if(counter > 0){
        counter--
        imageDiv.style.backgroundImage = `url('${cars[counter].img}')`
        name.innerText = `${cars[counter].name}`
        price.innerText = `${numberFormatter.format(cars[counter].price)}`
    }
})  
