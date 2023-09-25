
const KEY = "listStudents";
 class ListStudent{
         
    constructor(){
        this.Students = this.getData();
    }
    storeData(){
        localStorage.setItem(KEY,JSON.stringify(this.Students));
    }
    getData(){
        this.Students = JSON.parse(localStorage.getItem(KEY));
        if(this.Students == null){
            return [];
        } else{
            return this.Students;
        }
    }
    addNewStudent(Student){
        this.Students.push(Student);
       
        this.storeData();
    }
     
    searchStudentById(id){
        return this.Students.find(student => student.id == id)
    }
    deleteStudentbyId(id) {
        this.getData();
        this.Students.pop(this.searchStudentById(id))
        this.storeData();
    }
    updateStudentbyId(id, data){
        this.getData();
        const student = this.searchStudentById(id)
        student.name = data.name
        student.age = data.age
        student.gender = data.gender
        student.klass = data.klass
        this.storeData();
    }
    search(keyword){
        keyword = keyword.toLowerCase();
         return this.Students.filter(student => student.name.toLowerCase().includes(keyword));
    }
    
 }

