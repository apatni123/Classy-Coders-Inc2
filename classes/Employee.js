class Employee {
    #salary
    #isHired
    static #allEmployees=[]



    constructor(name,position,salary){
        this.name=name
        this.position=position
        this.#salary=salary
        this.#isHired=true

        Employee.#allEmployees.push(this);
    }

    getSalary(){
        return this.#salary
    }

    setSalary(amount){
        this.#salary=amount
    }

    getStatus(){
        return this.#isHired
    }

    setStatus(command){
        if (command=="hire"){
            this.#isHired=true
        } else if (command=="fire"){
            this.#isHired=false
        }
    }

    static getEmployees() {
        console.log(this.#allEmployees)
        return this.#allEmployees;
    }

    static getTotalPayroll() {
        let total = 0; // Initialize total to 0
        // Loop through each employee in the allEmployees array
        for (const employee of this.#allEmployees) {
            total += employee.getSalary(); // Add the employee's salary to the total
        }
        return total; // Return the total salary of all employees
    }

    
}








module.exports = Employee
