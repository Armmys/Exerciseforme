const menu = document.getElementById('menu');

function addItem(){
    const items = document.createElement('li');
    items.innerText = "Item";
    menu.appendChild(items);
}