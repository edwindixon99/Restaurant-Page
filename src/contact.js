// import Icon from './cassels-restaurant-food-christchurch.jpg';
import Icon from './IMG_6704.jpg';
import Icon2 from './IMG_6903.jpg';
import Icon3 from './IMG_7124.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';


function addRow(string) {
    const row = document.createElement('div');
    row.classList.add("row");
    const l = document.createElement('h5');
    l.textContent = string;
    row.appendChild(l)  
    return row;
}

function location() {
  

    const container = document.createElement('div');
    container.classList.add("container");


    container.appendChild(addRow("1 Riccarton Avenue"));
    container.appendChild(addRow("Riccarton"));
    container.appendChild(addRow("Christchurch"));
    container.appendChild(addRow("New Zealand"));

    return container;
}


function links() {
  

    const container = document.createElement('div');
    container.classList.add("container");


    container.appendChild(addRow("YumYum@Aruna.com"));
    container.appendChild(addRow("0800 83 83 83"));


    return container;
}

function info() {
    const container = document.createElement('div');
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    const row3 = document.createElement('div');
    container.classList.add("container-fluid", "h-100", "headerCon", "center");
    row1.classList.add("row");
    row2.classList.add("row");
    // row3.classList.add("row");
    
    
    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";
    

    row1.appendChild(heading);
    container.appendChild(row1);
 
    const col1 = document.createElement('div');
    col1.classList.add("col");
    col1.appendChild(location())
    row2.appendChild(col1);

    const col2 = document.createElement('div');
    col2.classList.add("col");
    col2.appendChild(links())
    row2.appendChild(col2);



    container.appendChild(row2);


   return container;
} 


  export default info;