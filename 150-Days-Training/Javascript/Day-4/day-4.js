function addTotable(){
    // console.log("Hi fuction called")

    //get value
    var name = document.getElementById('nameId').value ;
    var email = document.getElementById('emailId').value;

    //gettable
    var table = document.getElementById("tableId");


    //create row
    var newRow = table.insertRow();

    //create td
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    //add value
    cell1.innerHTML = name;
    cell2.innerHTML = email;

    //clear form
    document.getElementById('nameId').value = '';
    document.getElementById('emailId').value = '';


}