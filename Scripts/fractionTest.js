var testO = document.querySelector('#test-obj');
var msg = document.querySelector('#msg');
var btnT = document.querySelector('#do-test');
btnT.addEventListener('click', testFrac);


    //This functions are separated from the main function to not couse trouble while testing.
     function testFrac()
    {
        var test00 = testO.value;
        verifyFrac(test00);
    }

      function message(msg0)
    {
        msg.innerHTML = msg0;
    }
  
     

    //This is the main function fo verifying if the inputed number is a fraction.
    //There are some problems:
    //For the test to work the EventListener and the two callings of the message() function have to be commented.
    function verifyFrac(test00)
        {
            
            if (/^(\d{1,10}[.,]\d{1,5})$/.test(test00) && !/^(\d{1,10}[.,][0])$/.test(test00)
            && !/^(\d{1,10}[.,][0][0])$/.test(test00) && !/^(\d{1,10}[.,][0][0][0])$/.test(test00) 
            && !/^(\d{1,10}[.,][0][0][0][0])$/.test(test00) && !/^(\d{1,10}[.,][0][0][0][0][0])$/.test(test00))
           {
               var msg0 = "It's a fraction!";
               
              message(msg0);
               return msg0;       
                                  
           }
           else {
               var msg0 = "It's not a fraction!";
        
              message(msg0);
               return msg0;
               
           }

        }
        exports.verifyFrac = verifyFrac;
        
    
    
    //This is a more simple version of the function made foe easy testing.
    function testingFrac(testobj)
    {
        if (/^(\d{1,10}[.,]\d{1,5})$/.test(testobj) && !/^(\d{1,10}[.,][0])$/.test(testobj)
         && !/^(\d{1,10}[.,][0][0])$/.test(testobj) && !/^(\d{1,10}[.,][0][0][0])$/.test(testobj) 
         && !/^(\d{1,10}[.,][0][0][0][0])$/.test(testobj) && !/^(\d{1,10}[.,][0][0][0][0][0])$/.test(testobj))
        {
                return "It's a fraction!";
              
        }
        else {

            return "It's not a fraction!";
         
        }
    } 
    exports.testingFrac = testingFrac; 
   


    //This is just a simle function to be tested.
    const sum = (a,b) =>
    {
        return a+b;
    } 

    exports.sum = sum;
 



