// import Icon from './cassels-restaurant-food-christchurch.jpg';
import Icon from './IMG_6704.jpg';
import Icon2 from './IMG_6903.jpg';
import Icon3 from './IMG_7124.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';



function item(name, icon, cost) {
  const itemEntry = document.createElement('div');

  itemEntry.classList.add("col-4");

  const container = document.createElement('div');
  const row1 = document.createElement('div');
  const row2 = document.createElement('div');
  const row3 = document.createElement('div');
  container.classList.add("container", "item");
  row1.classList.add("row");
  row2.classList.add("row");
  row3.classList.add("row");
  
  
  const heading = document.createElement('h4');
  heading.textContent = name;
  

  container.classList.add("item")
  row1.appendChild(heading);
  container.appendChild(row1);

  // Add the image to our existing div.
  const img = document.createElement('img');
  img.src = icon;
  img.classList.add("img-fluid", "itemImg")

  row2.appendChild(img);


  const price = document.createElement('h5');
  price.textContent = '$'+`${cost}`;

//  const desc2 = document.createElement('p');
//  desc2.textContent = "In New Zealand, 80 per cent of Aruna restaurants are franchised by local business men and women who own and operate their restaurants as independent businesses."

//  const desc3 = document.createElement('p');
//  desc3.textContent = "Aruna success is built on a foundation of integrity. Hundreds of millions of people around the world trust our brand and we earn that trust every day by respecting our customers and employees, and delivering outstanding quality, service, cleanliness and value (QSC&V)."

  
  row3.appendChild(price)
//  row3.appendChild(desc2)
//  row3.appendChild(desc3)




  container.appendChild(row1);
 container.appendChild(row2);
 container.appendChild(row3);
  itemEntry.appendChild(container);

   
  return itemEntry;
}

function layout() {
  const container = document.createElement('div');
  const row1 = document.createElement('div');
  container.classList.add("container");
  row1.classList.add("row");
  row1.id = "list";

  row1.appendChild(item('hi', Icon, 16));
  row1.appendChild(item('hi', Icon2, 0.50));
  row1.appendChild(item('hi', Icon3, 1));
  row1.appendChild(item('hi', Icon3, 1));
  container.appendChild(row1);
  return container;
} 


  export default layout;