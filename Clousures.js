//No es un clousure, no recuerda el valor de las variables
/*function moneybox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox $${saveCoins}`);
}

moneybox(5);
moneybox(5);*/

//Clousure que guarda el contexto
function moneybox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneybox = moneybox();
myMoneybox(5);
myMoneybox(5);
myMoneybox(15);

//instancias
const moneyBoxAna = moneybox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(30);