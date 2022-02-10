
const inputDeposit=document.getElementById('input-deposit');
const   depositBalance=document.getElementById('deposit-balance');

const wthdrawinput=document.getElementById('input-wthdraw');
const   wthdrawBalance=document.getElementById('wthdraw-balance');



const mainBalance=document.getElementById('balance');

let totalBalance;

// deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
    let totalDepositBalance=parseFloat(inputDeposit.value)+parseFloat(depositBalance.innerText);
    depositBalance.innerText=totalDepositBalance;
    
    totalBalance=parseFloat(inputDeposit.value)+parseFloat(mainBalance.innerText);

    mainBalance.innerText=totalBalance;
    

    inputDeposit.value='';
})

// wthdraw balance

document.getElementById('wthraw-btn').addEventListener('click', function(){
   
    let totalWthdraw=parseFloat(wthdrawinput.value)+parseFloat( wthdrawBalance.innerText);

    wthdrawBalance.innerText=totalWthdraw;

    totalBalance=parseFloat(mainBalance.innerText)-parseFloat(wthdrawinput.value);

    mainBalance.innerText=totalBalance;

    wthdrawinput.value=''
})