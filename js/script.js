const listItem = ['pomodorini', 'patate', 'cipolle', 'carciofi'];
const ulEl = document.querySelector('ul');
let i = 0;

while (i < listItem.length) {
    const liEl = document.createElement('li');
    liEl.innerHTML = listItem[i]
    ulEl.appendChild(liEl)
    i += 1
    console.log(liEl, listItem, ulEl, i)
}

