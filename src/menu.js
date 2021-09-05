// import Icon from './cassels-restaurant-food-christchurch.jpg';
import Icon from './IMG_6704.jpg';
import Icon2 from './IMG_6903.jpg';
import Icon3 from './IMG_7124.jpg';
import Icon4 from './IMG_6006.jpg';
import Icon5 from './IMG_6872.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';



function item(name, icon, cost) {
  const itemEntry = document.createElement('div');

  itemEntry.classList.add("col-4");

  const container = document.createElement('div');
  const row1 = document.createElement('div');
  const row2 = document.createElement('div');
  const row3 = document.createElement('div');
  container.classList.add("container-fluid", "h-100", "item");
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
  img.classList.add("img-fluid")

  row2.classList.add("list", "list-cover");
  row2.appendChild(img);


  const price = document.createElement('h5');
  price.textContent = '$'+`${cost.toFixed(2)}`;

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
  const row0 = document.createElement('div');
  const row1 = document.createElement('div');
  container.classList.add("container", "headerCon", "center");
  row0.classList.add("row");
  row1.classList.add("row");
  row1.id = "list";

  const title = document.createElement('h1');
  title.textContent = 'Menu';
  row0.appendChild(title);

  row1.appendChild(item('Eggplant Pizza', Icon, 16));
  row1.appendChild(item('five too many fish', Icon2, 50));
  row1.appendChild(item('donuts and worms', Icon3, 3));
  row1.appendChild(item('Ricut pudding', Icon4, 20));
  row1.appendChild(item('Sushi', Icon5, 8.50));

  container.appendChild(row0);
  container.appendChild(row1);
  return container;
} 


  export default layout;