
class ReceipeManager{
    constructor(foodId = 0) {
            this._receipes = [];
            this._foodId = foodId;
    }
     get receipes() {
         return this._receipes;
     }
     get foodId() {
         return this._foodId;
     }
    
    addTask(foodType,receipe,ingredients,processTime,processSteps) 
    {
        const receipeList = {
            id: this._foodId++,
            foodType: foodType,
            receipe: receipe,
            ingredients: ingredients,
            processTime: processTime,
            processSteps: processSteps,
        };
        this._receipes.push(receipeList);
        //console.log("Add function");
      //  console.log(foodType,receipe,ingredients,processTime,processSteps);
    }

 //Render method to display Receipes   
    render()
     {
        let receipesHtmlList = [];
        let saladsList = [];
        let riceList = [];
        let dessertsList = [];
          for (let i = 0; i < this._receipes.length; i++) 
          {
          const myReceipe = this._receipes[i];
          //console.log(myReceipe.receipe);
          const receipeHtml = createReceipeHtml(myReceipe.id,myReceipe.foodType,myReceipe.receipe,myReceipe.ingredients,myReceipe.processTime,myReceipe.processSteps);
         //console.log(myReceipe.foodType);
         //console.log(myReceipe.foodType);
        //   if(myReceipe.foodType == 'salads') {
        //      saladsList.push(receipeHtml);
        //     // console.log(saladsList);
        //  } else if(myReceipe.foodType === 'rice') {
        //      riceList.push(receipeHtml);
        //  } else if(myReceipe.foodType === 'desserts') {
        //      dessertsList.push(receipeHtml);
        //  } else {
        //      receipesHtmlList.push(receipeHtml);
        //  }
        receipesHtmlList.push(receipeHtml);
          }
        const receipeHtml = receipesHtmlList.join("\n");
         // console.log(receipeHtml);
         const foodList = document.querySelector('#justForDisp');
          foodList.innerHTML = receipeHtml;
        //  switch(true) {
        //     case 'salads' : console.log("in switch");
        //                     //saladsList.push(receipeHtml);
        //                     saladsCol.appendChild(saladsList);
        //                     // saladsCol.innerHTML = saladsList;
        //                     break;
        //     case 'rice' :
        //                     console.log("in switch");
        //                     riceCol.appendChild(riceList);
        //                     // riceCol.innerHTML = receipeHtml;
        //                     break;
        //     case 'desserts':
        //                     //dessertsList.push(receipeHtml);
        //                     dessertsCol.innerHTML = receipeHtml;
        //                     break;
        //     default:
        //                     foodList.innerHTML = receipeHtml;
        // }
      } 
     
      getTaskById(receipeId) 
      {
        //console.log("in get task function");
          let foundReceipe;
          for(let i=0; i< this._receipes.length; i++) {
              const item = this._receipes[i];
              if(item.id == receipeId) {
                  foundReceipe = item;
              }
          }
          //console.log(foundReceipe);
          return foundReceipe;
      }   
      // To add data to Local Storage
      save() 
      {
      //console.log("local storage adding");
        var receipeJson = JSON.stringify(this._receipes);
        localStorage.setItem("food", receipeJson);
        var currentId = JSON.stringify(this._foodId);
        localStorage.setItem("receipeId" ,currentId);
      }

      // Retrieving data from Local Storage
      load() 
      {
        if (localStorage.getItem("food"))
         {
          const receipeJson = localStorage.getItem("food") || [];
         this._receipes = JSON.parse(receipeJson);
        }
        if (localStorage.getItem("receipeId")) 
        {
          const currentId = localStorage.getItem("receipeId");
          this._foodId = Number(currentId);
        }
    }
    // Delete Task function
    deleteTask(receipeId) 
    {
      let newReceipes = [];
      for(let i=0; i < this._receipes.length; i++) 
      {
        const food = this._receipes[i];
        
        if(food.id !== receipeId) {
          newReceipes.push(food);
        }
      }
     this._receipes = newReceipes; 
    }
}
function createReceipeHtml(id,receipeName,ingredients,processTime,processSteps) 
 {
    // console.log(receipeName);
    const html = `<div class="row border-3" id="receipeMenu">
          <div class="col " id="riceCol">
        <div data-task-id="${id}">
    <div>
       <h5 >Name : ${receipeName}</h5>
      <p > Description : 
        ${ingredients}
      </p>
      <p >Assigned To : ${processTime} </p>
      <p >Due Date: ${processSteps}</p>
      <div >
        <div class="col-6 col-sm">
          <button class="btn btn-outline-danger delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>`;
 //console.log(html);
  return html;
}
