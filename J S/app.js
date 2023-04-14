'use strict';

let allEmployees = [];
let form = document.getElementById('HR-manag');
form.addEventListener('submit', addNewEmployee)

function Employee(fullName, department, level, imgUrl) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imgUrl = imgUrl;
  allEmployees.push(this)
}

Employee.prototype.calculateSalary = function () {
  let minSalary, maxSalary;
  if (this.level === "Senior") {
    minSalary = 1500;
    maxSalary = 2000;
  } else if (this.level === "Mid-Senior") {
    minSalary = 1000;
    maxSalary = 1500;
  } else if (this.level === "Junior") {
    minSalary = 500;
    maxSalary = 1000;
  }
  const randomSalary = (Math.random() * (maxSalary - minSalary)) + minSalary;
  const netSalary = Math.floor(randomSalary - randomSalary * 0.075);
  return netSalary;
};

Employee.prototype.generateId = function () {
  let employeeId = '';
  for (let i = 0; i < 4; i++) {
    employeeId += Math.floor(Math.random() * 10);
  }
  return employeeId;
}


Employee.prototype.render = function () {
  const section = document.getElementById('container');

  const divEl = document.createElement('div');
  section.appendChild(divEl);
  divEl.setAttribute('style','display: flex; flex-direction: column; align-items: center; background-color: #0E8388; width: 30%; border-radius: 10px; padding-block: 20px ;margin: 0 auto; margin-bottom: 20px')

  let imgEl = document.createElement('img');
  divEl.appendChild(imgEl);
  imgEl.src = `./assets/${this.fullName}.jpg`;
  imgEl.alt = "Employee pic";
  imgEl.setAttribute('style','width: 30%; height: auto;  border-radius: 50%;')

  let h2El2 = document.createElement('h2');
  h2El2.textContent = `Name: ${this.fullName} - ID: ${this.generateId()}`;
  divEl.appendChild(h2El2);
  h2El2.setAttribute('style', 'color:white')

  let h3El3 = document.createElement('h3');
  h3El3.textContent = `Department: ${this.department} - Level: ${this.level}`;
  divEl.appendChild(h3El3);
  h3El3.setAttribute('style', 'color:white')

  let h4El4 = document.createElement('h4');
  h4El4.textContent = `Salary: ${this.calculateSalary()}`;
  divEl.appendChild(h4El4);
  h4El4.setAttribute('style', 'color:white')

}

function addNewEmployee(event) {
  event.preventDefault();
  let fullName = event.target.name.value;
  let department = event.target.dropdown1.value;
  let level = event.target.dropdown2.value;
  let imgUrl = event.target.url.value;

  let newEmployee = new Employee(fullName, department, level, imgUrl);

  newEmployee.calculateSalary();
  newEmployee.generateId();
  newEmployee.render();
}