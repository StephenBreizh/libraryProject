const selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        const formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    const formData = {};
    formData["titre"] = document.getElementById("titre").value;
    formData["auteur"] = document.getElementById("auteur").value;
    formData["page"] = document.getElementById("page").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    const table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.titre;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.auteur;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.page;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("page").value = selectedRow.cells[2].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.titre;
    selectedRow.cells[1].innerHTML = formData.auteur;
    selectedRow.cells[2].innerHTML = formData.page;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("titre").value = '';
    document.getElementById("product").value = '';
    document.getElementById("page").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}