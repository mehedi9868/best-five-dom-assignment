
let selectedPlayerExpences = 0;
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerExpence = document.getElementById('per-player-input');
    const inputFieldStringValue = perPlayerExpence.value;
    const inputFieldValue = parseFloat(inputFieldStringValue);
    // console.log(inputValue);
    selectedPlayerExpences = inputFieldValue * 5;
    // console.log(selectedPlayerCost);
    const textElement = document.getElementById('player-expences');
    textElement.innerText = selectedPlayerExpences;
    return selectedPlayerExpences;

})

document.getElementById('total-btn').addEventListener('click', function () {
    //part-2
    const salaryOfManager = parseFloat(document.getElementById('manager-input-field').value);
    const salaryOfCoach = parseFloat(document.getElementById('coach-input-field').value);
    const total = (selectedPlayerExpences + salaryOfManager + salaryOfCoach);
    document.getElementById('total').innerText = total;
})