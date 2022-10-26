var selectedRow= null;
function onFormSubmit(e){
    event.preventDefault();
    var forData = readForData();
    if(selectedRow === null){
        insertNewRecord(forData);
    }else{

    }
    


}

function readForData(){
    var forData={};
    forData["id"]=document.getElementById("id").value;
    forData["name"]=document.getElementById("name").value;
    forData["age"]=document.getElementById("age").value;
    forData["email"]=document.getElementById("email").value;
    return forData;
}
//insert the data
function insertNewRecord(data){
 var table = document.getElementById("storedlist").getElementsByTagName('tbody')[0];
 var newRow = table.insertRow(table.length);
 var cell1= newRow.insertCell(0);
     cell1.innerHTML = data.id;
 var cell2= newRow.insertCell(1);
     cell2.innerHTML = data.name;
 var cell3= newRow.insertCell(2);
     cell3.innerHTML = data.age;  
var cell4= newRow.insertCell(3);
     cell4.innerHTML = data.email;   
var cell5= newRow.insertCell(4);
     cell5.innerHTML = <button>Edit</button>,<button>Deleted</button>;          
}