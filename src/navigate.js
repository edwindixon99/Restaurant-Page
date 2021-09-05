function addCol(string) {
    const col = document.createElement('div');
    col.classList.add("col", "clickable");
    const menu = document.createElement('h1');
    menu.textContent = string;
    col.id = string;
    col.appendChild(menu);

    return col;
}




function navcon() {
    const container = document.createElement('div');
    const row = document.createElement('div');
    const row1 = document.createElement('div');
    container.classList.add("container", "center");

    const heading = document.createElement('h1');
    heading.textContent = "The Aruna Resturant";
    

    row1.appendChild(heading);
    container.appendChild(row1);


    row.classList.add("row");
    row1.classList.add("row");

    row.appendChild(addCol("Home"));
    row.appendChild(addCol("Menu"));
    row.appendChild(addCol("Contact"));
 
  



   container.appendChild(row);

 

   
    return container;

}



export default navcon;