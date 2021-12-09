let currentRow = null;

function submitForm(){
    let formData = readData();
    if(currentRow == null)
        insertNewRecord(formData);
        else
        updateRecord(formData);
    
    resetForm();
}

function readData(){
    let formData = {};
    formData["clientId"] = document.getElementById("clientId").value;
    formData["clientName"] = document.getElementById("clientName").value;
    formData["courseName"] = document.getElementById("courseName").value;
    formData["coursePrice"] = document.getElementById("coursePrice").value;
    return formData;
}

function insertNewRecord(data){
    let table = document.getElementById("clientsTable").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.clientId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.clientName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.courseName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.coursePrice;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("clientId").value = "";
    document.getElementById("clientName").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("coursePrice").value = "";
    let currentRow = null;
}

function onEdit(td){
    currentRow = td.parentElement.parentElement;
    document.getElementById("clientId").value = currentRow.cells[0].innerHTML;
    document.getElementById("clientName").value = currentRow.cells[1].innerHTML;
    document.getElementById("courseName").value = currentRow.cells[2].innerHTML;
    document.getElementById("coursePrice").value = currentRow.cells[3].innerHTML;
}

function updateRecord(formData){
    currentRow.cells[0].innerHTML = formData.clientId;
    currentRow.cells[1].innerHTML = formData.clientName;
    currentRow.cells[2].innerHTML = formData.courseName;
    currentRow.cells[3].innerHTML = formData.coursePrice;
}

function onDelete(td){
    if (confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("clientsTable").deleteRow(row.rowIndex);
        resetForm()
    }
}