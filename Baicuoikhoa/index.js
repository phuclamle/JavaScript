const listStudents = new ListStudents()
const students = listStudents.getData()

const table = document.getElementById('dataTable')
const addNewBtn = document.querySelector('.submit-btn')
const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-input')
const listResults = document.querySelector('.list-results')
// thêm dữ liệu 1 student vào 1 row của table
function insertStudent(student) {
    let totalRows = table.rows.length
    const row = table.insertRow(totalRows);
    //row.insertCell(0).innerHTML = totalRows;
    row.insertCell(0).innerHTML = students.indexOf(student) + 1;
    row.insertCell(1).innerHTML = student.name;
    row.insertCell(2).innerHTML = student.age;
    row.insertCell(3).innerHTML = student.gender;
    row.insertCell(4).innerHTML = student.klass;
    row.insertCell(5).innerHTML = `
                                <div class="actions">
                                    <button type="button" class="btn btn-primary update-btn" data-id="${student.id}">Update</button>
                                    <button type="button" class="btn btn-danger delete-btn" data-id="${student.id}">Delete</button>
                                </div>`;
}

function resetTable() {
    const totalRows = table.rows.length - 1
    for (let index = totalRows; index > 0; index--) {
        table.deleteRow(index);
    }
}

function addNewStudent() {
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const gender = document.getElementById('gender').value
    const klass = document.getElementById('class').value
    if(name != '' && age != '' && gender != '' && klass != '') {
        listStudents.addNewStudent(new Student(name, age, gender, klass))
        document.getElementById('name').value = ''
        document.getElementById('age').value = ''
        document.getElementById('gender').value = ''
        document.getElementById('class').value = ''
       // displayData()
       window.location.reload()
    }
    else {
        console.log('thiếu dữ liệu nhập');
    }
}

function displayData() {
    resetTable()
    students.forEach(student => {
        insertStudent(student)
    })
    document.querySelector('.total').innerHTML = students.length
    updateEventDeleteBtns()
    updateBtn()
}

// thêm sự kiên click cho tất cả nút delete
function updateEventDeleteBtns() {
    const deleteBtns = document.querySelectorAll('.delete-btn')
    deleteBtns.forEach(item => {
        item.onclick = (e) => {
            listStudents.deleteStudentById(e.target.getAttribute("data-id"))            
            e.target.parentElement.closest('tr').remove()
            window.location.reload()
        }
    })
}

function updateBtn() {
    const updateBtns = document.querySelectorAll('.update-btn')
    updateBtns.forEach(item => {
        item.onclick = (e) => {
            const updateForm = document.querySelector('.update-form__wrapper')
            updateForm.classList.add('active')
            const id = e.target.getAttribute('data-id')
            const student = listStudents.searchStudentById(id)
            document.getElementById('updateName').value = student.name
            document.getElementById('updateAge').value = student.age
            document.getElementById('updateGender').value = student.gender
            document.getElementById('updateClass').value = student.klass
            const updateSubmit = document.querySelector('.submit-update')
            updateSubmit.addEventListener('click', e => {
                e.preventDefault()
                listStudents.updateStudentById(id, {
                    name: document.getElementById('updateName').value,
                    age: document.getElementById('updateAge').value,
                    gender: document.getElementById('updateGender').value,
                    klass :document.getElementById('updateClass').value
                })
                window.location.reload()

                //updateForm.classList.remove('active')

            })
            
            
        }
    })
}

addNewBtn.onclick = e => {
    e.preventDefault()
    addNewStudent()
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const keyWord = searchInput.value
    search(keyWord)
})

function search(keyWord) {
    if(keyWord != '') {
        listResults.innerHTML = ''
        const results = listStudents.searchStudentByName(keyWord)
        if(results.length > 0) {
            listResults.classList.add('active')
            results.forEach(result => {
                const resultItem = document.createElement('li')
                resultItem.className = 'result-item'
                resultItem.innerHTML = result.name
                listResults.append(resultItem)
            })
        }
        else {
            listResults.classList.remove('active')
            listResults.innerHTML = ''
        }
    }
    else {
        listResults.classList.remove('active')
        listResults.innerHTML = ''
    }
}
searchInput.oninput = () => {
    const keyWord = searchInput.value
    search(keyWord)
}


document.querySelector('.x-btn').onclick = () => {
    document.querySelector('.update-form__wrapper').classList.remove('active')
}
// updateSubmit.onclick = e => {
//     e.preventDefault()

// }
displayData()
