const save_button = document.querySelector("#save-btn");
const title_input = document.querySelector("#title");
const list = document.querySelector(".list");

const todo_list = [];

function makeItem(title){
    //create element div with class item
    const item = document.createElement("div");
    item.classList.add("item");
    
  
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
function syncStorage(title){

    todo_list.push(title);
    const next_list = JSON.stringify(todo_list);
    localStorage.setItem("my_list", next_list);
}

save_button.addEventListener("click", () => {
 const value = title_input.value;
//  console.log("clicked",value);
if(value=== ""){
    alert("You should write a text");
}else {
    
 
  syncStorage(value);
  makeItem(value);
  clearInput(value);
//   console.log(todo_list) ;
  
//   console.log(my_collection);

}
})
