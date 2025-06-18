addEventListener('DOMContentLoaded',() => { 
const btn = document.createElement ('button');
btn.textContent = 'add item';

document.body.appendChild(btn);
btn.addEventListener('click',() => {
    console.log('button clicked!');
});

const entry = document.createElement('ul');
document.body.appendChild(list);

const entry = document.createElement('li');
entry.textContent= 'new item'
list.appendChild(entry);

});

