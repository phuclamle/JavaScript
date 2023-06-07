const KEY = 'listStudents'

class ListStudents {
    students = []
    constructor() {}
    
    getData() {
        this.students = JSON.parse(localStorage.getItem(KEY))
        if(this.students == null) {
            return []
        }
        return this.students
    }
    storeData() {
        localStorage.setItem(KEY, JSON.stringify(this.students))
        // this.students = JSON.parse(localStorage.getItem(KEY))
    }

    addNewStudent(student) {
        this.students.push(student)
        this.storeData()
    }

    searchStudentByName(name) {
        const result = []
        this.students.forEach(student => {
            if(student.name.includes(name.toLowerCase())) {
                result.push(student)
            }
        })
        return result
    }
    searchStudentById(id) {
        let result = null
        this.students.forEach(student => {
            if(student.id == id) {
                result = this.students.indexOf(student)
                return
            }
        })
        result = this.students[result]
        return result
    }

    updateStudentById(id, {name, age, gender,lop, klass,n}) {
        const student = this.searchStudentById(id)
        if(student != null) {
            student.name = name
            student.age = age
            student.gender = gender
            student.lop = lop
            student.klass = klass
            student.n = n;
            this.storeData()
        }
       
    }

    deleteStudentById(id) {
        const student = this.searchStudentById(id)
        if(student != null) {
            this.students.splice(this.students.indexOf(student), 1)
            this.storeData()
        }
    }
}