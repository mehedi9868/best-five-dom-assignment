let btnClickedCount = 0;
function cardButtonClicked(clicked) {

    btnClickedCount = btnClickedCount + 1;

    if (btnClickedCount <= 5) {
        const clickedBtn = document.getElementById(clicked);
        clickedBtn.disabled = true; // disable the clicked button.
        const playerName = clickedBtn.parentNode.parentNode.children[0].innerText
        const olElement = document.getElementById('selected-players');
        const li = document.createElement('li');
        li.innerText = playerName;
        olElement.appendChild(li);

    } else {
        alert('You have already selected five players!')
    }
}