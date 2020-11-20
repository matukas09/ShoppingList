const addButton = document.getElementById('add');
const itemField = document.querySelector('#item-name');
const ObjectPrice = document.querySelector('#item-price');
const totalSpan = document.querySelector('.total-price');
const list = document.querySelector('#item-list');
let total = 0;



addButton.addEventListener('click', (event)=> {
    let itemName = itemField.value; 
    let itemPrice = parseInt(ObjectPrice.value); 
    total = total + itemPrice; 
    totalSpan.innerHTML = total;

    let listItem = document.createElement('li');
    listItem.classList.add('collection-item');
    let text = `Item ${itemName}. Price: ${itemPrice} ${"€"}`;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);
    list.appendChild(listItem);

    //Clear the entry fields
    itemField.value = '';
    ObjectPrice.value = '';

    console.log('Item:', typeof(itemName));
    console.log('Price:', typeof(itemPrice));
    console.log('Total:', total);

    event.preventDefault();
});