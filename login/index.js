document.getElementById('login-btn').addEventListener('click', function(){
   let emailInput=document.getElementById('email-input');
   let passwordInput=document.getElementById('password-input')
  
    if(emailInput.value=='shahadat@gmail.com' && passwordInput.value=='shahadat'){
      console.log('lala');
      window.location.href='banking.html'
    
    }else{
        alert('Your information is incorrect, please provide correct information')
    }

})