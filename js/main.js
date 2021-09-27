//login
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function(){
    const loginSection = document.getElementById('loginSection');
    loginSection.style.display = 'none';

    const transactionSection = document.getElementById('transactionSection');
    transactionSection.style.display = 'block';
})

//FUNCTION
//inpAmount Function
function inpAmount(id){
    let amount = document.getElementById(id).value;
    if (amount == ''){
        amount = '0'
    }
    return parseFloat(amount);
}

//Update Balance Function
function updateBalance(id, inpAmount){
    const amount = parseFloat(document.getElementById(id).innerText);
    const total = amount + inpAmount;
    document.getElementById(id).innerText = total;
}   

//Auto Reset Input Fields Function
function inpAutoReset(id){
    document.getElementById(id).value = '';
}

// Reset Button Function
function inpReset(btnID, inpID){
    const button = document.getElementById(btnID);
    button.addEventListener('click', function(){
        document.getElementById(inpID).value = '';
    })
}


//Deposit Button Handler
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
    const depositAmount = inpAmount('depositAmount');

    updateBalance('currentDeposit', depositAmount);
    updateBalance('currentBalance', depositAmount);

    inpAutoReset('depositAmount');
})

// Withdraw Button Handler
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = inpAmount('withdrawAmount');

    updateBalance('currentWithdraw', withdrawAmount);
    updateBalance('currentBalance', (-1) * withdrawAmount);


    inpAutoReset('withdrawAmount');
})

//Reset Button Handler
inpReset('depositResetBtn', 'depositAmount');
inpReset('withdrawResetBtn', 'withdrawAmount');