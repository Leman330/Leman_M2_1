let action = document.getElementById('action');
function deposit() {
    let start = + document.getElementById('start').value;
    let monthsum = + document.getElementById('monthsum').value;
    let percent = + document.getElementById('percent').value;
    let days = + document.getElementById('days').value;

    calculator(start, monthsum, percent, days);
}

function calculator(start, monthsum, percent, days) {
    let total = start;
    let percentformonth = percent / 12;
    let everyday = days / 30;

    if (start <= 0 || monthsum < 0 || percent <= 0 || days < 0) {
        let element = document.getElementById("welcome");
        element.style.display="block";
        element.innerHTML = "<p>Рассчитать заново!</p>";
        console.error('NaN');
        return;
    }
    for (i = 1; i < everyday; i++) {
        total += monthsum + (total * percentformonth) / 100;
    }

    alert(Math.ceil(total));
}


action.addEventListener('click', deposit)



