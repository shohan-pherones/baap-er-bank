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

//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){

    //withdraw input section
    const withdrawInputText = document.getElementById('withdraw-input');
    const withdrawInputValue = parseFloat(withdrawInputText.value);
    
    //withdraw output section
    const withdrawOutputText = document.getElementById('withdraw-amount');
    const withdrawOutputValue = parseFloat(withdrawOutputText.innerText);
    
    //adding withdraw amounts
    const updatedWithdraw = withdrawOutputValue + withdrawInputValue;

    withdrawOutputText.innerText = updatedWithdraw;

    //balance update after withdraw
    const balanceText = document.getElementById('balance');
    const balanceValue = parseFloat(balanceText.innerText);

    const updatedBalance = balanceValue - withdrawInputValue;

    balanceText.innerText = updatedBalance;

    //clear the withdraw field
    withdrawInputText.value = '';
});