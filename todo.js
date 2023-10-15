const save_button = document.querySelector("#save-btn");
const title_input = document.querySelector("#title");
const list = document.querySelector(".list");

let todo_list = [];

function renderItem(todo_item){
    //create element div with class item
    const item = document.createElement("div");
    item.classList.add("todo");
    
  
    //add checkbox to item class
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo_item.status;
  
    //add spam to item class
    const span = document.createElement("span");
    span.textContent = todo_item.title;
  
    item.appendChild(checkbox);
    item.appendChild(span);
    
    list.appendChild(item);

}
function clearInput(){
    title_input.value = "";  
}

function renderList(){

    for(let i=0; i < todo_list.length; i++){
        const title = todo_list[i].title;
        renderItem({
            title: title,
        });
       }
}
function syncStorage(item){
    const next_item = {
        title: item.title,
        status: item.status,
    };

    todo_list.push(next_item);
    const next_list = JSON.stringify(todo_list);
    console.log(todo_list, next_list)
    localStorage.setItem("my_list", next_list);
}
function loadFromStorage() {
  const listFromStorage= JSON.parse(localStorage.getItem("my_list")) || []
  todo_list = listFromStorage;
  } 

   
function onAddItem(){
    const val = title_input.value;
       //  console.log("clicked",value);
       if(val=== ""){
           alert("You should write a text");
       }else {
         const item = {
            title:val,
            status: true,
         }      
         syncStorage(item);
         renderItem(item);
         clearInput();
       }
}
function events(){
    save_button.addEventListener("click", onAddItem);
}

function init(){
     loadFromStorage();
     renderList();
     events();    
}

init();

