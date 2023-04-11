'use strict';
function Employee (Id, fullName, department, level){
  this.Id = Id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = `./assets/${this.fullName}.jpg`;
  this.salary = this.calculateSalary();
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


Employee.prototype.render = function() {
  document.write(`<h1>Id: ${this.Id}</h1>
                  <p>Full name: ${this.fullName}</p>
                  <p>Department: ${this.department}</p>
                  <p>Salary: ${this.calculateSalary()}</p>`);
};


const ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
ghazi.render();

const lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
lana.render();

const tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
tamara.render();

const safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
safi.render();

const omar = new Employee(1004, "Omar Zaid", "Development", "Senior");
omar.render();

const rana = new Employee(1005, "Rana Saleh", "Development", "Junior");
rana.render();

const hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");
hadi.render();