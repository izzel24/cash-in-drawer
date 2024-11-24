
let price = 19.5;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];

const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
];


document.addEventListener('DOMContentLoaded', function () {
    let cash = document.getElementById("cash");
    let purchasebtn = document.getElementById("purchase-btn");
    let changeDue = document.getElementById("change-due");
    let cidDisplay = document.getElementById("cid-display");
    let priceDisplay = document.getElementById("price");


    function checkCashRegister(price, cash, cid) {
        let change = cash - price;
        let totalCid = cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2);
    
        if (cash === price) {
            return { status: "EXACT_CASH", change: [] };
        }
    
        if (Number(totalCid) < change) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        } else if (Number(totalCid) === change) {
            return { status: "CLOSED", change: cid };
        } else {
            let changeArr = [];
            for (let i = currencyUnit.length - 1; i >= 0; i--) {
                const coinName = currencyUnit[i][0];
                const coinValue = currencyUnit[i][1];
                const coinAvailable = cid[i][1];
                const maxCoins = Math.floor(coinAvailable / coinValue);
                let coinsToReturn = Math.min(maxCoins, Math.floor(change / coinValue)) * coinValue;
                coinsToReturn = Number(coinsToReturn.toFixed(2));
    
                if (coinsToReturn > 0) {
                    changeArr.push([coinName, coinsToReturn]);
                    change -= coinsToReturn;
                    change = Number(change.toFixed(2));
                }
            }
    
            if (change > 0) {
                return { status: "INSUFFICIENT_FUNDS", change: [] };
            } else {
                return { status: "OPEN", change: changeArr };
            }
        }
    }
    
    function buy() {
        const cashAmount = parseFloat(cash.value);
    
        if (cashAmount < price) {
            alert("Customer does not have enough money to purchase the item.");
            return;
        }
    
        const result = checkCashRegister(price, cashAmount, JSON.parse(JSON.stringify(cid)));
        let changeResult = "";
    
        if (result.status === "EXACT_CASH") {
            changeResult = "No change due - customer paid with exact cash";
        } else if (result.status === "OPEN") {
            changeResult = `Status: OPEN<ul>${result.change.map(item => 
                `<li>${item[0]}: $${item[1]}</li>`).join("")}</ul>`;
        } else if (result.status === "CLOSED") {
            const filteredChange = result.change.filter(item => item[1] > 0); 
            changeResult = `Status: CLOSED<ul>${filteredChange.map(item => 
                `<li>${item[0]}: $${item[1]}</li>`).join("")}</ul>`;
        } else {
            changeResult = "Status: INSUFFICIENT_FUNDS";
        }
        changeDue.innerHTML = changeResult;
    }

    cidDisplay.innerHTML = `<ul>${cid.map(data =>
        `<li>${data[0]} : $${data[1]}</li>`).join("")}</ul>`;
    priceDisplay.innerHTML = "$" + price;


    purchasebtn.addEventListener("click", buy);
});
