const listStudent = new ListStudent();
const ID_KEY = 'studentId'
const RESULT_KEY = 'results'


function addRow(table, data) {
    const totalRows = table.rows.length;
    const totalColumns = table.rows[0].cells.length
    const rowToAdd =  table.insertRow(totalRows);
    const dataArray = Object.values(data)

    for (let i = 0; i < totalColumns; i++) {
        if(i == 5) {
            rowToAdd.insertCell(i).innerHTML =  `<div class="function">
                                                    <button type="button" class="add-btn update-btn" data-id="${data.id}">Sửa</button>
                                                    <button type="button" class="delete-btn" data-id="${data.id}">Xóa</button>
                                                </div>`
            break                                    
        }

        if(i == 0) {
            rowToAdd.insertCell(i).innerHTML = totalRows
        }
        else {
            rowToAdd.insertCell(i).innerHTML = dataArray[i]
        }
    }

}

function displayData(table, data){
    data.forEach(student => {
        addRow(table, student)
    });
}