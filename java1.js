let action = document.getElementById('action');
function deposit() {
    let start = + document.getElementById('start').value;
    let monthsum = + document.getElementById('monthsum').value;
    let percent = + document.getElementById('percent').value;
    let days = + document.getElementById('days').value;

    if (calculator(start, monthsum, percent, days)){
        alert(calculator(start, monthsum, percent, days));
    }
   else {
    
    console.error('NaN');

   }
}

function calculator(start, monthsum, percent, days) {
    let total = start;
    let percentformonth = percent / 12;
    let everyday = days / 30;
    let element = document.getElementById("welcome");
    if (start <= 0 || monthsum < 0 || percent <= 0 && percent <= 100 || days < 0) {

        element.style.display = "block";
        element.innerHTML = "<p>Рассчитать заново!</p>";
       // console.error('NaN');
        return NaN;
    }
    element.style.display = "none";
    for (i = 1; i < everyday; i++) {
        total += monthsum + (total * percentformonth) / 100;
    }


    return Math.ceil(total);;
}


action.addEventListener('click', deposit)



