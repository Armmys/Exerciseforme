import { validateEmail, validatePassword, validateUsername } from "./validate.js"
let itemList = []

document.getElementById('color-btn').addEventListener('click', () => {
    const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"]
    const randomColor = Math.round(Math.random() * (colorArray.length - 1))
    document.getElementById('rainbow').style.backgroundColor = colorArray[randomColor]
})

// sally sec

document.getElementById('add-btn').addEventListener('click', () => {
    const addItem = document.getElementById('item-input').value
    if (addItem?.length > 0) {
        const newItem = document.createElement('li')
        newItem.textContent = addItem
        itemList.push(addItem)
        document.getElementById('listItem').querySelector('ul').appendChild(newItem)
        document.getElementById('item-input').value = ''
    }
})

document.getElementById('backpack').querySelectorAll('button')[1].addEventListener('click', () => {
    document.getElementById('listItem').querySelector('ul').textContent = ''
    itemList = []
})

document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const username = document.getElementById('input-list').querySelector('form').querySelectorAll('input')[0].value
    const email = document.getElementById('input-list').querySelector('form').querySelectorAll('input')[1].value
    const password = document.getElementById('input-list').querySelector('form').querySelectorAll('input')[2].value
    const errorElement = document.getElementById('input-list').querySelector('form').querySelector('p')
    if (!validateUsername(username)) {
        errorElement.textContent = 'Username must contains uppercase, number and at least 5 characters long (no special character)'
    } else if (!validateEmail(email)) {
        errorElement.textContent = 'Email must contains @ and end with .com'
    } else if (!validatePassword(password)) {
        errorElement.textContent = 'Password must contains uppercase, lowercase, number, special character and at least 8 characters long'
    } else {
        errorElement.textContent = 'Successfully! Yay'
    }
})
window.addEventListener('load', () => {
    const oldItemList = JSON.parse(localStorage.getItem('itemList'))
    Array.from(oldItemList).forEach(item => {
        const newItem = document.createElement('li')
        newItem.textContent = item
        itemList.push(item)
        document.getElementById('listItem').querySelector('ul').appendChild(newItem)
    })
    const oldColorBg = JSON.parse(localStorage.getItem('colorBg'))
    document.getElementById('rainbow').style.backgroundColor = oldColorBg
})

window.addEventListener('unload', (e) => {
    e.preventDefault()
    localStorage.setItem('itemList', JSON.stringify(itemList))
    localStorage.setItem('colorBg', JSON.stringify(document.getElementById('rainbow').style.backgroundColor)) 
})