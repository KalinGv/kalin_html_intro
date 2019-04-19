 //button for testing
 var testBtn = document.querySelector('#testBtn');
 testBtn.addEventListener("click", btnF, false);
 
 function btnF()
 {
     testBtn.innerHTML += " WORKS!";
 }

 //first name validation event
  var fn = document.querySelector('#fn');      
 var fn_error = document.querySelector('#fn_error'); 
 fn.addEventListener('blur', fnField, false);


 function fnField()
 {         
    if (!/^(.{1,15})$/.test(fn.value)) {
         fn_error.innerHTML = "Your first name should be between 1 and 15 symbols! ";
     }
     else   {
         fn_error.innerHTML = "";
     }   
 } 

 //last name validation event
 var ln = document.querySelector('#ln');      
 var ln_error = document.querySelector('#ln_error'); 
 ln.addEventListener('blur', lnField, false);


 function lnField()
 {         
    if (!/^(.{1,15})$/.test(ln.value)) {
         ln_error.innerHTML = "Your last name should be between 1 and 15 symbols! ";
     }
     else   {
         ln_error.innerHTML = "";
     }   
 }
 
 //EGN validation event
 var egn = document.querySelector('#egn');      
 var egn_error = document.querySelector('#egn_error'); 
 egn.addEventListener('blur', egnField, false);


 function egnField()
 {         
    if (!/^(\d{10})$/.test(egn.value)) {
         egn_error.innerHTML = "The EGN has to be exactly 10 digits! ";
     }
     else  {
         egn_error.innerHTML = "";
     }   
 } 

 //Age validation event
 var age = document.querySelector('#age');      
 var age_error = document.querySelector('#age_error'); 
 age.addEventListener('blur', ageField, false);


 function ageField()
 {         
    if ((/^18$/).test(age.value) || (/^19$/).test(age.value) || (/^[2-9][0-9]$/).test(age.value) 
    || (/^10[0-9]$/).test(age.value) || (/^11[0-8]$/).test(age.value) ) {
         age_error.innerHTML = "";     
     }
     else   {
         age_error.innerHTML = "The age should be between 18 an 118 years! ";
     }   
 } 

 //Address validation event
 var address = document.querySelector('#address');      
 var address_error = document.querySelector('#address_error'); 
 address.addEventListener('blur', addressField, false);


 function addressField()
 {         
    if (!/(^.{1,100})$/.test(address.value) ) {
         address_error.innerHTML = "The address can't be more than 100 symbols and is required! ";   
     }
     else   {
         address_error.innerHTML = "";
     }   
 } 

 //Password validation event
 var pass = document.querySelector('#pass');      
 var pass_error = document.querySelector('#pass_error'); 
 pass.addEventListener('blur', passField, false);


 function passField()
 {         
    if (!/^([a-zA-Z]{6,18})$/.test(pass.value) ) {
         pass_error.innerHTML = "The password should be between 6 nad 18 english letters! ";   
     }
     else   {
         pass_error.innerHTML = "";
     }   
 } 
 //Get all validation functions
  function verifyAll(){
     fnField();
     lnField();
     egnField();
     ageField();
     addressField();
     passField();
 }

 //Submit button checks if everything is ok using all previous functions
 var subm = document.querySelector('#register');
 subm.addEventListener('focus', verifyAll, false);
 
 function validForm()
 {
     var err_box = document.querySelectorAll('.error-msg');
     var allgood = true;
     Array.from(err_box).forEach(function(er){
         if (er.innerHTML != "")
         {
             allgood = false;
             console.log(err_box);
         }
             
     });
    if (allgood == false)
    {
     alert ("Something went wrong! Please check your fields.");
    } else {
     alert ('Th registration is successful! :)');
    }
 }
  
 