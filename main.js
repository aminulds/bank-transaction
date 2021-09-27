//remove login section & display transaction section
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function(){
    const loginSection = document.getElementById('loginSection');
    loginSection.style.display = 'none';

    const transactionSection = document.getElementById('transactionSection');
    transactionSection.style.display = 'block';
})

//reset input function
inpReset('depositResetBtn', 'depositAmount'); //reset deposit input
inpReset('withdrawResetBtn', 'withdrawAmount'); //reset withdraw input


//FUNCTION
//input Reset btn Handler
function inpReset(btnID, inpID) {
    const btn = document.getElementById(btnID);
    btn.addEventListener('click', function(){
        const inp = document.getElementById(inpID);
        inp.value = '';
    })
}

//Update Balance Function
function updateBalance(id, depositAmount){
    const currentDeposit = parseFloat(document.getElementById(id).innerText);
    const totalDeposit = depositAmount + currentDeposit;
    document.getElementById(id).innerText = totalDeposit;
}

//Input Amount Function
function inpAmount(id){
    let amount = document.getElementById(id).value;
    if (amount == ''){
        amount = '0';
    }
    const inpValue = parseFloat(amount);
    return inpValue;    
}
//auto reset input field function
function autoReset(id){
    document.getElementById(id).value = '';
}


//Deposit Handler
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
    
    const depositAmount = inpAmount('depositAmount'); 

    updateBalance('currentDeposit', depositAmount);
    updateBalance('currentBalance', depositAmount);

    autoReset('depositAmount'); //deposit field reset
    
})


//Withdraw Handler
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    
    const withdrawAmount = inpAmount('withdrawAmount');

    updateBalance('currentWithdraw', withdrawAmount);
    updateBalance('currentBalance', -1 * withdrawAmount);

    autoReset('withdrawAmount'); //withdraw field reset
})

