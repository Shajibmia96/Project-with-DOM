// console.log('By by Bangladesh')
document.getElementById('deposit').addEventListener('click', function(){
    // console.log("The button is Clicked")
    const depositField = document.getElementById('amount-deposit');
    const depositValue = parseFloat(depositField.value);
    depositField.value = '';
     if(isNaN (depositValue)){
            alert("Please deposit money")
            return;
     }
    // console.log(depositValue)
   
    const withdrawTotalElement = document.getElementById('deposit-total');
    const withdrawTotal = parseFloat(withdrawTotalElement.innerText);
    // console.log(withdrawTotal)
    const deposit = withdrawTotal +depositValue;
    withdrawTotalElement.innerText = deposit;

    // Add Deposit Total

    const balanceTotalElement = document.getElementById('balance-total')
    const balanceTotal = parseFloat(balanceTotalElement.innerText);
    const balance = balanceTotal +depositValue;
    balanceTotalElement.innerText = balance;

})