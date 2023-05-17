let box = document.querySelector('.box')
let form = document.querySelector('form')
let inputFrom = document.querySelector('.names') 
let inputTo = document.querySelector('.ages')

let products = [
    {   
        name: "milk",
        type: "milk",
        price: 12000
    },
    {   
        name: "tomato",
        type: "vegetables",
        price: 20000
    },
    {   
        name: "govyadina",
        type: "meat",
        price: 88000
    },
    {   
        name: "konyak",
        type: "alcohol",
        price: 50000
    },
    {   
        name: "tvorog",
        type: "milk",
        price: 13000
    },
    {   
        name: "potato",
        type: "vegetables",
        price: 5000
    },
    {   
        name: "kruryatina",
        type: "meat",
        price: 30000
    },
    {   
        name: "baranina",
        type: "meat",
        price: 80000
    },
    {   
        name: "kolbasa",
        type: "meat",
        price: 60000
    },
    {   
        name: "pivo",
        type: "alcohol",
        price: 6000
    },
    {   
        name: "vine",
        type: "alcohol",
        price: 45000
    },
    {   
        name: "whiskey",
        type: "alcohol",
        price: 10000000
    },
    {   
        name: "cheese",
        type: "milk",
        price: 600000
    },
    {   
        name: "yogurt",
        type: "milk",
        price: 80000
    },
]

function reload(arr,cont) {
    for(let item of arr) {
        let elem = document.createElement('div') 
        let h1 = document.createElement('h1')
        let h2 = document.createElement('h2')

        elem.classList.add('elem')
        h1.innerHTML = item.name
        h2.innerHTML = item.price + '$'

        cont.append(elem)
        elem.append(h1,h2)
    }   
}

form.onsubmit = (event) => {
    event.preventDefault();
    
    let filtred = products.filter((el) => {
        return el.price > inputFrom.value && el.price < inputTo.value
    })
    
    reload(filtred, box)
}
