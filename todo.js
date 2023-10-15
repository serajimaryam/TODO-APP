const save_button = document.querySelector("#save-btn");
const title_input = document.querySelector("#title");
const list = document.querySelector(".list");

let todo_list = [];

function renderItem(title){
    //create element div with class item
    const item = document.createElement("div");
    item.classList.add("todo");
    
  
    //add checkbox to item class
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
  
    //add spam to item class
    const span = document.createElement("span");
    span.textContent = title;
  
    item.appendChild(checkbox);
    item.appendChild(span);
    
    list.appendChild(item);

}
function clearInput(){
    title_input.value = "";  
}

function renderList(){

    for(let i=0; i < todo_list.length; i++){
        const title = todo_list[i];
        renderItem(title);
       }
}
function syncStorage(title){

    todo_list.push(title);
    const next_list = JSON.stringify(todo_list);
    console.log(todo_list, next_list)
    localStorage.setItem("my_list", next_list);
}
function loadFromStorage() {
  const listFromStorage= JSON.parse(localStorage.getItem("my_list")) || [];
  todo_list = listFromStorage;
  } 

   

function events(){

    save_button.addEventListener("click", () => {
        const value = title_input.value;
       //  console.log("clicked",value);
       if(value=== ""){
           alert("You should write a text");
       }else {
                
         syncStorage(value);
         renderItem(value);
         clearInput(value);
       }
       });
       

}

function init(){
     loadFromStorage();
     renderList();
     events();    
}

init();

