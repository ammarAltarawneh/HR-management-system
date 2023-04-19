'use strict'


let allEmployees = [];
let formEl = document.getElementById('employee-Form');
formEl.addEventListener("submit", submitHand);

function Employee(employeeId, fullName, department, level, imageURL, salary) {

  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.imageURL = imageURL;
  this.level = level;
  this.salary = salary;
  allEmployees.push(this);

}

function calculateSalary() {
  for (let i = 0; i < allEmployees.length; i++) {

    if (allEmployees[i].level == "Senior") {
      allEmployees[i].salary = Math.round(Math.floor(Math.random() * (2000 - 1500) + 1500))
      allEmployees[i].salary = parseInt(allEmployees[i].salary - (allEmployees[i].salary * 7.5 / 100))
      return allEmployees[i].salary;
    }
    else if (allEmployees[i].level == "Mid-senior") {
      allEmployees[i].salary = Math.round(Math.floor(Math.random() * (1500 - 1000) + 1000))
      allEmployees[i].salary = parseInt(allEmployees[i].salary - (allEmployees[i].salary * 7.5 / 100))
      return allEmployees[i].salary;
    }
    else {
      allEmployees[i].salary = Math.round(Math.floor(Math.random() * (1000 - 500) + 500))
      allEmployees[i].salary = parseInt(allEmployees[i].salary - (allEmployees[i].salary * 7.5 / 100))
      return allEmployees[i].salary;
    }
  }
}

function generateId() {
  let employeeId = '';
  for (let i = 0; i < 4; i++) {
    employeeId += Math.floor(Math.random() * 10);
  }
  return employeeId;
}

function addEmployeeJson() {
  let jsonArray = localStorage.getItem('allEmployees')
  let getInformationEmployee = JSON.parse(jsonArray);
  allEmployees = getInformationEmployee;

}

function submitHand(event) {
  let fullname = event.target.fname.value;
  let Department = event.target.Department.value;
  let levels = event.target.level.value;
  let image = event.target.imgurl.value
  let id = generateId();
  let salary = calculateSalary();
  let newEmployee = new Employee(id, fullname, Department, levels, image, salary)
  let jsonArryEmployee = JSON.stringify(allEmployees);
  localStorage.setItem('allEmployees', jsonArryEmployee);

}

function rander() {
  addEmployeeJson();
  if (allEmployees == null) {
    allEmployees = [];
  }

  for (let i = 0; i < allEmployees.length; i++) {
    if (allEmployees[i].department == 'Administration') {

      const section = document.getElementById("Administration");

      let divElback = document.createElement('div')
      section.appendChild(divElback);
      divElback.setAttribute('style', 'display: flex; flex-direction: column; background-color: #0E8388; width: 100%; border-radius: 10px; padding-block: 20px; margin-bottom: 20px')


      let imgEl = document.createElement('img')
      divElback.appendChild(imgEl);
      imgEl.src = `./assets/${allEmployees[i].fullName}.jpg`;
      imgEl.setAttribute('style', 'width: 40%; height: auto;  border-radius: 50%;margin-left: 30%;')

      let divElInfo = document.createElement('div');
      divElback.appendChild(divElInfo);
      divElInfo.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; background-color: white; width: 90%; border-radius: 10px; padding-block: 20px ;margin:0 auto; margin-top: 20px;hight:100px')


      let h2El2 = document.createElement('h2');
      h2El2.textContent = `Name: ${allEmployees[i].fullName} - ID: ${allEmployees[i].employeeId}`;
      divElInfo.appendChild(h2El2);
      h2El2.setAttribute('style', 'color:blue')

      let h3El3 = document.createElement('h3');
      h3El3.textContent = `Department: ${allEmployees[i].department} - Level: ${allEmployees[i].level}`;
      divElInfo.appendChild(h3El3);
      h3El3.setAttribute('style', 'color:blue;')

      let h4El4 = document.createElement('h4');
      h4El4.textContent = `Salary: ${allEmployees[i].salary}`;
      divElInfo.appendChild(h4El4);
      h4El4.setAttribute('style', 'color:blue')

    } else if (allEmployees[i].department == 'Marketing') {

      const section = document.getElementById("Marketing");

      let divElback = document.createElement('div')
      section.appendChild(divElback);
      divElback.setAttribute('style', 'display: flex; flex-direction: column; background-color: #0E8388; width: 100%; border-radius: 10px; padding-block: 20px; margin-bottom: 20px')


      let imgEl = document.createElement('img')
      divElback.appendChild(imgEl);
      imgEl.src = `./assets/${allEmployees[i].fullName}.jpg`;
      imgEl.setAttribute('style', 'width: 40%; height: auto;  border-radius: 50%;margin-left: 30%;')

      let divElInfo = document.createElement('div');
      divElback.appendChild(divElInfo);
      divElInfo.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; background-color: white; width: 90%; border-radius: 10px; padding-block: 20px ;margin:0 auto; margin-top: 20px;hight:100px')


      let h2El2 = document.createElement('h2');
      h2El2.textContent = `Name: ${allEmployees[i].fullName} - ID: ${allEmployees[i].employeeId}`;
      divElInfo.appendChild(h2El2);
      h2El2.setAttribute('style', 'color:blue')

      let h3El3 = document.createElement('h3');
      h3El3.textContent = `Department: ${allEmployees[i].department} - Level: ${allEmployees[i].level}`;
      divElInfo.appendChild(h3El3);
      h3El3.setAttribute('style', 'color:blue;')

      let h4El4 = document.createElement('h4');
      h4El4.textContent = `Salary: ${allEmployees[i].salary}`;
      divElInfo.appendChild(h4El4);
      h4El4.setAttribute('style', 'color:blue')

    } else if (allEmployees[i].department == 'Development') {

      const section = document.getElementById("Development");

      let divElback = document.createElement('div')
      section.appendChild(divElback);
      divElback.setAttribute('style', 'display: flex; flex-direction: column; background-color: #0E8388; width: 100%; border-radius: 10px; padding-block: 20px; margin-bottom: 20px')


      let imgEl = document.createElement('img')
      divElback.appendChild(imgEl);
      imgEl.src = `./assets/${allEmployees[i].fullName}.jpg`;
      imgEl.setAttribute('style', 'width: 40%; height: auto;  border-radius: 50%;margin-left: 30%;')

      let divElInfo = document.createElement('div');
      divElback.appendChild(divElInfo);
      divElInfo.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; background-color: white; width: 90%; border-radius: 10px; padding-block: 20px ;margin:0 auto; margin-top: 20px;hight:100px')


      let h2El2 = document.createElement('h2');
      h2El2.textContent = `Name: ${allEmployees[i].fullName} - ID: ${allEmployees[i].employeeId}`;
      divElInfo.appendChild(h2El2);
      h2El2.setAttribute('style', 'color:blue')

      let h3El3 = document.createElement('h3');
      h3El3.textContent = `Department: ${allEmployees[i].department} - Level: ${allEmployees[i].level}`;
      divElInfo.appendChild(h3El3);
      h3El3.setAttribute('style', 'color:blue;')

      let h4El4 = document.createElement('h4');
      h4El4.textContent = `Salary: ${allEmployees[i].salary}`;
      divElInfo.appendChild(h4El4);
      h4El4.setAttribute('style', 'color:blue')

    } else {

      const section = document.getElementById("Finance");

      let divElback = document.createElement('div')
      section.appendChild(divElback);
      divElback.setAttribute('style', 'display: flex; flex-direction: column; background-color: #0E8388; width: 100%; border-radius: 10px; padding-block: 20px; margin-bottom: 20px')


      let imgEl = document.createElement('img')
      divElback.appendChild(imgEl);
      imgEl.src = `./assets/${allEmployees[i].fullName}.jpg`;
      imgEl.setAttribute('style', 'width: 40%; height: auto;  border-radius: 50%;margin-left: 30%;')

      let divElInfo = document.createElement('div');
      divElback.appendChild(divElInfo);
      divElInfo.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; background-color: white; width: 90%; border-radius: 10px; padding-block: 20px ;margin:0 auto; margin-top: 20px;hight:100px')


      let h2El2 = document.createElement('h2');
      h2El2.textContent = `Name: ${allEmployees[i].fullName} - ID: ${allEmployees[i].employeeId}`;
      divElInfo.appendChild(h2El2);
      h2El2.setAttribute('style', 'color:blue')

      let h3El3 = document.createElement('h3');
      h3El3.textContent = `Department: ${allEmployees[i].department} - Level: ${allEmployees[i].level}`;
      divElInfo.appendChild(h3El3);
      h3El3.setAttribute('style', 'color:blue;')

      let h4El4 = document.createElement('h4');
      h4El4.textContent = `Salary: ${allEmployees[i].salary}`;
      divElInfo.appendChild(h4El4);
      h4El4.setAttribute('style', 'color:blue')
    }
  }
}





addEmployeeJson();

rander();



console.log(allEmployees)

