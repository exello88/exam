let TypeOfCredit;

const credit = document.querySelectorAll('a')[0];
const vklad = document.querySelectorAll('a')[1];
const oblig = document.querySelectorAll('a')[2];
credit.addEventListener('click', () => {
    TypeOfCredit = 'credit';
    credit.style.background = '#08a652';
    vklad.style.background = '#eff3f6';
    oblig.style.background = '#eff3f6';
})
vklad.addEventListener('click', () => {
    TypeOfCredit = 'vklad';
    credit.style.background = '#eff3f6';
    vklad.style.background = '#08a652';
    oblig.style.background = '#eff3f6';
})
oblig.addEventListener('click', () => {
    TypeOfCredit = 'oblig';
    credit.style.background = '#eff3f6';
    vklad.style.background = '#eff3f6';
    oblig.style.background = '#08a652';
})




const top_1 = document.querySelector('.top');
const money = document.getElementsByName('money')[0];
top_1.addEventListener('change', () => {
    money.value = top_1.value;
})

money.addEventListener('change', () => {
    if (money.value > 5000000) {
        money.value = 5000000;
    }
    else if (money.value < 30000) {
        money.value = 30000;
    }
    top_1.value = money.value;
})

const bottom = document.querySelector('.bottom');
const months = document.getElementsByName('months')[0];
let monthsV = months.value;
bottom.addEventListener('change', () => {
    months.value = bottom.value + ' месяцев';
})

months.addEventListener('change', () => {
    monthsV = months.value;
    monthsV = monthsV.replace('месяцев', '');
    if (monthsV > 60) {
        monthsV = 60;
        months.value = monthsV + ' месяцев';
    }
    else if (monthsV < 3) {
        monthsV = 3;
        months.value = monthsV + ' месяцев';
    }
    bottom.value = +monthsV;
})

const checkbox = document.getElementsByName('salary')[0];
let ch = true;
checkbox.addEventListener('change', () => {
    ch = checkbox.checked;
})

const rightbutton = document.querySelectorAll('a')[3];
const pay = document.querySelector('.pay');
const proc = document.querySelector('.proc');
rightbutton.addEventListener('click', () => {
    if (TypeOfCredit == 'credit') {
        if (ch == true) {
            proc.textContent = ((bottom.value / top_1.value) * 10000).toFixed(5) + "%";
        }
        else {
            proc.textContent = ((bottom.value / top_1.value) * 100000).toFixed(5) + "%";
        }
        pay.textContent = (top_1.value / bottom.value).toFixed(2) + 'P';
    }
    else if (TypeOfCredit == 'vklad') {
        if (ch == true) {
            proc.textContent = ((top_1.value + bottom.value) / 10000000).toFixed(5) + "%";
        }
        else {
            proc.textContent = ((top_1.value + bottom.value) / 100000000).toFixed(5) + "%";
        }
        pay.textContent = (top_1.value / bottom.value).toFixed(2) + 'P';
    }
    else if (TypeOfCredit == 'oblig') {
        if (ch == true) {
            proc.textContent = ((top_1.value / bottom.value) / 10000).toFixed(5) + "%";
        }
        else {
            proc.textContent = ((top_1.value / bottom.value) / 100000).toFixed(5) + "%";
        }
        pay.textContent = (top_1.value / bottom.value).toFixed(2) + 'P';
    }
    else {
        alert('Не выбрат тип кредита');
    }
})