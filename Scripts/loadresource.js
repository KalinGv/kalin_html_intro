//This variable makes sure the item is alowed to be loader only once.
var onece = false;

//Selecting where the array of information will be put later.
const empToTable = document.querySelector('#emp-table > tbody');

//Creating connection with the json file and making sure it will be readed correctly.
function loadEmp() 
{
    if (onece == false)
    {
        const request = new XMLHttpRequest();
    request.overrideMimeType("content-type: application/json");  

    request.open('get', 'Data/employee.json');
    request.onload = () =>  {
              const json = JSON.parse(request.responseText);
        populateEmp(json);
     
    }; 
    onece = true;
    request.send();

    }
   
}

//Taking all json elements as an array objects and printing them into the table.
function populateEmp(json)
    {
        

         json.forEach((row)  => {
            const tr = document.createElement('tr');
            row.forEach ((cell, i) => {
               if (i!=0)
               {
                const td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = cell;
               
               }          
            
        });

        empToTable.appendChild(tr);

        });
 
        
    }

//The button that loads our content.
var loadBtn = document.querySelector('#load-btn');
loadBtn.addEventListener('click', loadEmp);
