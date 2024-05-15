const listItem = ['pomodorini', 'patate', 'cipolle', 'carciofi', 'mayonese'];
const ulEl = document.querySelector('ul');
let i = 0;

while (i < listItem.length) {
    const liEl = document.createElement('li');
    liEl.innerHTML = listItem[i]
    ulEl.appendChild(liEl)
    i += 1
}

