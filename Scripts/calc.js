var result = document.querySelector('#result'); //targeting the "Output" input field lol
var write = document.querySelectorAll(".btnS"); //targeting the input buttons

var isResult = false; // checks is the input is result 
var stop ='';          // saves the result so it can't be delated by 1 number at a time even if other numbers are added 

//taking the value of the buttons using them as the next input
for (i = 0; i < write.length; i++) {
  write[i].addEventListener("click", function(wr) {
    
   result.value +=  wr.currentTarget.value;
   isResult = false;
   console.log(isResult);
  })
}

//AC
function clearAll()
{
    result.value = "";
    stop='';
}

//CE
function delLast()
{
    if (isResult==false)
    {
        result.value = result.value.slice(0, -1);
    } else 
        {
            result.value = result.value;
        }
    if (result.value == stop)
    {
     isResult = true;   
    }    
        console.log(isResult);
        console.log(stop);
}

// = 
function eqauls()
{
        result.value = eval(result.value);
        isResult = true;
        stop = result.value;
}
