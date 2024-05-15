const listItem = ['pomodorini', 'patate', 'cipolle', 'carciofi'];
const liEl = document.createElement('li');
const ulEl = document.querySelector('ul');
let i = 0;

while (i < listItem.length) {
    liEl.innerHTML = listItem[i]
    ulEl.appendChild(liEl)
    i += 1
    console.log(liEl, listItem, ulEl, i)
}

