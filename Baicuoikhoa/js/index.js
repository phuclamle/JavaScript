const display_table = document.getElementById("display-table");
const results_table = document.querySelector('.data-result')

const toggleBtn = document.querySelector('.toggle-btn');
const addForm = document.querySelector('.add-form')
const addBtn = document.querySelector('.add-btn')
const searchInput = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')

displayData(display_table, listStudent.Students)

toggleBtn.onclick = () => {
    addForm.classList.toggle('active')
}
addBtn.onclick = e => {
    e.preventDefault()
    const add_name = document.querySelector(".add_name").value;
    const add_age = document.querySelector(".add_age").value;
    const add_gender = document.querySelector(".add_gender").value;
    const add_klass = document.querySelector(".add_klass").value;
    const student = new Student(add_name, add_age, add_gender, add_klass);
    //thêm trong localstorage
    listStudent.addNewStudent(student);
    //thêm trong giao diện
    addRow(display_table, student)
    addForm.reset()
}
// delete / update
display_table.addEventListener("click",function(e){
    if(e.target.classList.contains("delete-btn")) {
        const id = e.target.getAttribute("data-id")
        const row = e.target.parentElement.closest("tr")
        // xóa giao diện
        row.remove()
        // xóa localstorage
        listStudent.deleteStudentbyId(id);
    }
    else if(e.target.classList.contains("update-btn")) {
        const id = e.target.getAttribute("data-id")
        localStorage.setItem (ID_KEY, id);
        window.location.href = "updateform.html";
    }
});

searchInput.oninput = e => {
    document.querySelectorAll('.data-result tr').forEach(row => {
        if(!row.classList.contains('table-header')) {
            row.remove()
        }
    })
    const keyword = e.target.value
    if(keyword != '') {
        const results = listStudent.search(keyword)

        results.forEach(student => {
            addRow(results_table, student)
        });
    }
}
















  

