let selectedPlayerExpences = 0;
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerExpence = getInputFieldValueById('per-player-input'); // used function from common.js
    const selectedPlayerNumber = document.getElementById("selected-players").children.length
    selectedPlayerExpences = perPlayerExpence * selectedPlayerNumber;
    const selectedTextElement = document.getElementById('player-expences');
    selectedTextElement.innerText = selectedPlayerExpences;
    return selectedPlayerExpences;

})

document.getElementById('total-btn').addEventListener('click', function () {
    const salaryOfManager = parseFloat(document.getElementById('manager-input-field').value);
    const salaryOfCoach = parseFloat(document.getElementById('coach-input-field').value);
    const total = (selectedPlayerExpences + salaryOfManager + salaryOfCoach);
    document.getElementById('total').innerText = total;
})