document.getElementById('deposit-button').addEventListener('click', function(){

    //deposit input field
    const newDepositText = document.getElementById('deposit-input');
    const newDepositValue = parseFloat(newDepositText.value);

    //deposit output field
    const previousDepositText = document.getElementById('deposit-output');
    const previousDepositValue = parseFloat(previousDepositText.innerText);
    
    //adding the deposited amounts
    const updatedDepositValue = newDepositValue + previousDepositValue;
    
    //show the update values
    previousDepositText.innerText = updatedDepositValue;


    //update account balance
    const balanceText = document.getElementById('balance');
    const balanceValue = parseFloat(balanceText.innerText);

    const updatedBalance = balanceValue + newDepositValue;

    balanceText.innerText = updatedBalance;




    //clear the deposit input field
    newDepositText.value = '';

   
});