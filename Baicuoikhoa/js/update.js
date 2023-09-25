const update_name = document.querySelector(".update_name");
const update_age = document.querySelector(".update_age") ;
const update_gender = document.querySelector(".update_gender");
const update_klass = document.querySelector(".update_klass");


const updateBtn = document.querySelector(".update-btn");
const id = localStorage.getItem("studentId")

const student = listStudent.searchStudentById(id)
update_name.value = student.name;
update_age.value = student.age;

const options = document.querySelectorAll('option')
options.forEach(element => {
    if(element.value == student.gender) {
        element.selected = true
    }
})

update_klass.value = student.klass;

updateBtn.onclick = e => {
    e.preventDefault()
    const name = update_name.value
    const age = update_age.value
    const gender = update_gender.value
    const klass = update_klass.value
    listStudent.updateStudentbyId(id, { age, name, gender, klass})
    localStorage.removeItem(ID_KEY)
    window.location.href= "index.html";
}



// const data_student =  listStudent.searchStudentById(id);
// console.log(data_student);
 


// listStudent = new ListStudent;
// let update_btn = document.querySelector(".Update-btn");
// update_btn.onclick = function(){
//     let arr = [];
//     let update_name = document.querySelector(".update_name").value;
//     arr.push(update_name);
//     let update_age = document.querySelector(".update_age").value ;
//     arr.push(update_age);
//     let update_gender = document.querySelector(".update_gender").value;
//     arr.push(update_gender);
//     let update_klass = document.querySelector(".update_klass").value;
//     arr.push(update_klass);
     
//     if(confirm("Bạn muốn lưu thay đổi?")){
//         listStudent.updateStudentbyId(data_student.id,arr);
//         window.location.href= "index.html";
//     }else{
//         window.location.href= "updateform.html";
//     }
// }


