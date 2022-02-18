// function getInputValue(inputId){
//     const inputField = document.getElementById(inputId);
//     const inputMoneyText = inputField.value;
//     const inputMoney = parseFloat(inputMoneyText);

//     //clear input field
//     inputField.value = "";
//     return inputMoney;
// }

// function displayTotalBalance(balanceId, money){
//     const displayTotal = document.getElementById(balanceId);
//     const previousTotal = parseFloat(displayTotal.innerText);
//     const updateTotal = previousTotal + money;
//     displayTotal.innerText = updateTotal;
// }

// function getCurrentBalance(){
//     const balanceTotal = document.getElementById("balance-total");
//     const oldBalance = parseFloat(balanceTotal.innerText);
//     return oldBalance;
// }

// function updateBalance(depositMoney, isAdd){
//     const balanceTotal = document.getElementById("balance-total");
//     const oldBalance = getCurrentBalance();
//     if (isAdd == true) {
//         const newBalance = oldBalance + depositMoney;
//         balanceTotal.innerText = newBalance;
//     } else {
//         const newBalance = oldBalance - depositMoney;
//         balanceTotal.innerText = newBalance;
//     }
// }


// // deposit button event handle
// document.getElementById("deposit-btn").addEventListener("click", function(){
//     const depositMoney = getInputValue("deposit");
    
//     if(depositMoney > 0){
//         // deposit sheet
//     displayTotalBalance("deposit-total", depositMoney);

//     //update balance sheet
//     updateBalance(depositMoney, true);
//     };
// })

// // withdraw button event handle
// document.getElementById("withdraw-btn").addEventListener("click", function(){
//     const withdrawMoney = getInputValue("withdraw");
//     const currentBalance = getCurrentBalance();
//     if(withdrawMoney > 0 && withdrawMoney <= currentBalance){
//         // withdraw sheet
//         displayTotalBalance("withdraw-total", withdrawMoney);

//         //update balance sheet
//         updateBalance(withdrawMoney, false);
//     };
// })


// New js code practice

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = Number(valueInText);
    inputField.value = "";
    return value;
}

function getInnerTextValue(fieldId){
    const tagField = document.getElementById(fieldId);
    const valueInText = tagField.innerText;
    const value = Number(valueInText);
    return value;
}

function updateTotal(fieldId, amount){
    
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}

function updateBalance(amount, isAdding){

    const previousBalance = getInnerTextValue("balance-total");
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    } else {
        newBalance = previousBalance - amount;
    }
    document.getElementById("balance-total").innerText = newBalance;
}

document.getElementById("deposit-btn").addEventListener("click", function(){
    const depositMoney = getInputValue("deposit");
    
    if (depositMoney > 0) {
        updateTotal("deposit-total", depositMoney);
        updateBalance(depositMoney, true);
    }
})


document.getElementById("withdraw-btn").addEventListener("click", function(){
    const withdrawMoney = getInputValue("withdraw");
    const balance = getInnerTextValue("balance-total")
    if (withdrawMoney > 0 && withdrawMoney <= balance) {
        updateTotal("withdraw-total", withdrawMoney);
        updateBalance(withdrawMoney, false);
    }
})