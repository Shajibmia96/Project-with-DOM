document.getElementById('withdraw').addEventListener('click' , function(){
    const withdrawTotalElement = document.getElementById("amount-withdraw");
    const withdrawTotal = withdrawTotalElement.value;
    const withdraw = parseFloat(withdrawTotal)
    // console.log(withdraw)
    withdrawTotalElement.value = '';
    if(isNaN(withdraw)){
        alert("Please deposit money")
        return;
    }

    

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText)
    const balance = balanceTotal - withdraw;
      if(withdraw > balanceTotal){
        alert('amount not pound')
        return;
      }
      const withdrawValueElement = document.getElementById('withdraw-total')
    const withdrawValue = parseFloat(withdrawValueElement.innerText) 
    const withdrawSum = withdrawValue +withdraw;
    // console.log(withdrawSum)
    withdrawValueElement.innerText = withdrawSum;

    balanceTotalElement.innerText = balance;

})