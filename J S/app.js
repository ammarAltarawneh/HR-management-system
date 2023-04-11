'use strict';

let allEmployees = [];
let form = document.getElementById('HR-manag');
form.addEventListener('submit', addNewEmployee)

function Employee(Id, fullName, department, level){
  this.Id = Id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = `./assets/${this.fullName}.jpg`;
  this.salary = this.calculateSalary();
}



function addNewEmployee(event){
  event.preventDefault();
  let fullName = event.target.name.value;
  let department = event.target.dropdown1.value;
  let level = event.target.dropdown2.value;
  let imgUrl = event.target.url.value;

  let newEmployee = new Employee(fullName, department, level, imgUrl);
  newEmployee.render()
}





Employee.prototype.calculateSalary = function() {
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


function generateId() {
  let employeeId = '';
  for (let i = 0; i < 4; i++) {
    employeeId += Math.floor(Math.random() * 10);
  }
  return employeeId;
}

let section = document.getElementById('sec');
let IdEl = document.createElement('p');
IdEl.textContent ="ID: " + generateId();
section.appendChild(IdEl);
