const Employee = require('./Employee.js')
class SoftwareEngineer extends Employee {
    #programmingLanguage
    constructor (name,position,salary,programmingLanguages){
        super(name,position,salary)
        this.#programmingLanguage=programmingLanguages
    }
    getProgrammingLanguages(){
        return this.#programmingLanguage
    }

    setProgrammingLanguages(language){
        this.#programmingLanguage.push(language)
    }

    
}

module.exports = 
    SoftwareEngineer
