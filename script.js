var total = 0;
var appleQuantity = 0;
var orangeQuantity = 0;
var bananaQuantity = 0;
var wallet = 0;


function cash() {
    wallet = document.querySelector('#cash-value').value;
    if (wallet < total
        &&  wallet == 0
        
    ) {
        alert('you have insuficient balance and you need add credit');
        return true;
    } else if (wallet == total &&  total + wallet && total>1) {

        alert("shoping success full ...if you want to buy more products add more balance!!!");
        
        return true;

        
    }
}

function addApple() {
    appleQuantity++;
    document.getElementById('number').value = appleQuantity;
    total = appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML = total;
    cash();
}

function addOrange() {
    orangeQuantity++;
    document.getElementById('number2').value = orangeQuantity;
    total = appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML = total;
    cash();
}

function addBanana() {
    bananaQuantity++;
    document.getElementById('number3').value = bananaQuantity;
    total = appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML = total;
    cash();
}

function minusApple() {
    appleQuantity--;
    document.getElementById('number').value = appleQuantity;
    total = appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML = total;
}

function minusOrange() {

    orangeQuantity--;
    document.getElementById('number2').value = orangeQuantity;
    total = appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML = total;

}

function minusBanana() {

    bananaQuantity--;
    document.getElementById('number3').value = bananaQuantity;
    total = appleQuantity * 10 + orangeQuantity * 7 + bananaQuantity * 5;
    document.getElementById('total-value').innerHTML = total;
}