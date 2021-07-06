let detailsDiv = document.querySelector('#detailsDiv');
let addButton = document.querySelector('#addButton');
let repName = document.querySelector('#repName');
let ingredientName = document.querySelector('#ingredientName');
let timeReq = document.querySelector('#timeReq');
let steps = document.querySelector('#steps');
let receipeMenu = document.querySelector('#receipeMenu');
let submitButton = document.querySelector('#submitButton');
let cancelButton = document.querySelector('#cancelButton');
let saladsCol = document.querySelector('#saladsCol');
let riceCol = document.querySelector('#riceCol');
let dessertsCol = document.querySelector('#dessertsCol');
let selectFood = document.querySelector('#selectFood');
let receipeDelete = document.querySelector('#justForDisp');

receipeMenu.style.visibility = "visible";
detailsDiv.style.visibility = "hidden";
let receipeManager = new ReceipeManager(0);
receipeManager.load();
receipeManager.render();

function validate() {
    
}
function nameValidate() {
    
}

function display() {
    console.log("In display function");
   detailsDiv.style.visibility = "visible";
   console.log(selectFood.value);
   validate();
   receipeManager.addTask(selectFood.value,repName.value,ingredientName.value,timeReq.value,steps.value);
   receipeManager.save();
   receipeManager.getTaskById(0);
   receipeManager.render();  
   reset(); 
}

function submit() {
   // receipeManager.render();
    detailsDiv.style.visibility = "hidden";
}
function cancel() {
    detailsDiv.style.visibility = "hidden";
    reset();
    //window.location.reload();

}
function reset() {
    repName.value = "";
    ingredientName.value = "";
    timeReq.value = "";
    steps.value = "";
}
//Event Listeners
addButton.addEventListener('click', display);
addButton.addEventListener('click',(e)=>{e.preventDefault();});
submitButton.addEventListener('click', submit);
submitButton.addEventListener('click',(e)=>{e.preventDefault();});
cancelButton.addEventListener('click', cancel);

receipeDelete.addEventListener('click', (event) => {
     if(event.target.classList.contains("delete-button")) 
     {
        // console.log("in delete event");
        const deleteReceipe = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(deleteReceipe);
        const Id = Number(deleteReceipe.dataset.taskId)
        //console.log(taskId);
        receipeManager.deleteTask(Id);
        receipeManager.save();
        receipeManager.render();
     }
});
