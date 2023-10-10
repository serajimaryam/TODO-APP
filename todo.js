const save_button = document.querySelector("#save-btn");
const title_input = document.querySelector("#title");
const list = document.querySelector(".list");

function makeItem(title){
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

save_button.addEventListener("click", () => {
 const value = title_input.value;
//  console.log("clicked",value);
if(value=== ""){
    alert("You should write a text");
}else {
    //create element div with class item
 
  makeItem(value);
  clearInput(value);
  
}
})
