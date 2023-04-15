'use strict';
let allEmployees = [];
function getAllEmployee(){
    let jsonArr = localStorage.getItem('allEmployees');
    let dataFromStorage = JSON.parse(jsonArr);
    allEmployees = dataFromStorage;
}


function render(){

    let tableEl = document.getElementById('table');
    
    if(allEmployees == null){
        allEmployees = [];
     }
    
     for(let i=0;i<allEmployees.length;i++){
         let trEl1 = document.createElement('tr');
         tableEl.appendChild(trEl1);
    
         let tdEl1 = document.createElement('td');
         tdEl1.textContent = allEmployees[i].department;
         trEl1.appendChild(tdEl1)
    
         let tdEl2 = document.createElement('td');
         tdEl2.textContent = allEmployees[i].price;
         trEl1.appendChild(tdEl2)
    
         let tdEl3 = document.createElement('td');
         tdEl3.textContent = allEmployees[i].isCold;
         trEl1.appendChild(tdEl3)
     }

     let thEl = document.createElement('tr');
     tableEl.appendChild(thEl);
    
     let tdEl1 = document.createElement('th');
     tdEl1.textContent = "Department";
     thEl.appendChild(tdEl1);
     tdEl1.setAttribute('style', 'color:white')
    
     let tdEl2 = document.createElement('th');
     tdEl2.textContent = "# of employees";
     thEl.appendChild(tdEl2);
     tdEl2.setAttribute('style', 'color:white')
    
     let tdEl3 = document.createElement('th');
     tdEl3.textContent = "Total Salary";
     thEl.appendChild(tdEl3);
     tdEl3.setAttribute('style', 'color:white')
    
     let tdEl4 = document.createElement('th');
     tdEl4.textContent = "Average";
     thEl.appendChild(tdEl4);
     tdEl4.setAttribute('style', 'color:white')
    
     
    }
    
    getAllEmployee()

    render()
    

    
