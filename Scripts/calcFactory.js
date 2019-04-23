
function createCalculator()
{
    let expression = {value: '', isResult: false}

   return {
    

    //write nuber or symbol from the calculator interface keyboard
    onBtn(b){

        if (expression.value =='' && !/([\d|-])/.test(b))        //When the screan is empty put a zero if u press a symbol(exept for -)
        {
             let result =  (expression.value = '0'+b)
             expression = {value: result, isResult: false}
             return  result
        }
        
        else if (expression.value.charAt(expression.value.length-1) == "-"      //using the minus for negative numbers
        && /([\d])/.test(expression.value.charAt(expression.value.length-2))
        && /(-|\\.)/.test(expression.value.charAt(expression.value.length-3))
        && b== '-' )
        {
            let result =  (expression.value += ' -')
            expression = {value: result, isResult: false}
            return  result
        }
        else if (expression.value.charAt(expression.value.length-1) == "-" 
        && /([\d])/.test(expression.value.charAt(expression.value.length-2))
        && b == "-")
        {
            let result =  (expression.value += ' -')
            expression = {value: result, isResult: false}
            return  result
        }
          else if (expression.value != "" && !/([\d])/.test(expression.value.charAt(expression.value.length-1)) && !/([\d])/.test(b) )  //no 2 simbols next to each other
        {
            let result =  (expression.value = expression.value)
            expression = {value: result, isResult: false}
            return  result
        } 
        
         else {
    
            let result =  (expression.value += b)
            expression = {value: result, isResult: false}
            return  result 
         } 



    },
    

    //=
    evaluate() {

        let result = new String( eval(expression.value));            

        expression = {value: result, isResult: true}

        return result

    },

    //AC
    clearAll(){

      expression = {value: '', isResult: false};    

      return ''

    },

    //CE
    delLast(){

        if (!expression.isResult) {
            expression.value = expression.value.slice(0, -1);
        }

        return expression.value
    }


   };
    

}



let calculator = createCalculator();

