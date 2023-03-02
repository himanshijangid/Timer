document.querySelector("#input").addEventListener("keydown", (event) => {
    if (event.key ==="Enter"){
        const input = document.querySelector("#input");
        addItem(input.value);
    }
});

document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
});
addItem  = (input) => {
    const item = document.createElement("div");
    const allItem = document.createElement("div");
    allItem.className="allitem"
    const text = document.createElement("p");
    
    item.className = "item";
    text.textContent = input;
    
    
    const checkboxIcon = document.createElement("i");
    checkboxIcon.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    checkboxIcon.className ="check-button";
    checkboxIcon.style.color="red"
    
    allItem.appendChild(checkboxIcon);

    // checkboxIcon.addEventListener("click" , () =>{
    //     checkboxIcon.style.color="green"
    // } );
    checkboxIcon.addEventListener("click", () =>{
        let color = checkboxIcon.style.color;
        if(color=='red'){
            checkboxIcon.style.color='green';
            item.style.textDecoration="line-through";
        }
        else{
            
            checkboxIcon.style.color='red';
            item.style.textDecoration="none";
        }
        
    });
    
    // checkboxIcon.addEventListener("click" , checkbox()
    // );
   // function checkbox (){
    //     if(checkboxIcon.style.color == "red"){
    //         checkboxIcon.style.color = "green";
    //     }if (checkboxIcon.style.color == "green"){
    //         checkboxIcon.style.color = "red";
    //     }
    // }
     
    
    const deleteIcon = document.createElement("i");
    deleteIcon.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteIcon.className = "trash-button";
    allItem.appendChild(deleteIcon);

    deleteIcon.addEventListener("click",() => {
        item.remove();

    })
    allItem.appendChild(deleteIcon);
    item.appendChild (text);
    item.appendChild(allItem);

    document.querySelector("#to-do-list").appendChild(item);
    document.querySelector("#input").value = "";


}
