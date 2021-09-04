import Icon from './cassels-restaurant-food-christchurch.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';



function mainPage() {
    const container = document.createElement('div');
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    const row3 = document.createElement('div');
    container.classList.add("container");
    row1.classList.add("row");
    row2.classList.add("row");
    row3.classList.add("row");
    
    
    const heading = document.createElement('h1');
    heading.textContent = "The Aruna Resturant";
    

    container.classList.add("headerCon")
    row1.appendChild(heading);
    container.appendChild(row1);
 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;
   myIcon.classList.add("img-fluid")
 
   row2.appendChild(myIcon);


   const desc1 = document.createElement('p');
   desc1.textContent = "Aruna New Zealand opened its first restaurant in 1976 in Porirua. Today there are 167 Aruna restaurants across New Zealand, with around one million people visiting our restaurants every week."

   const desc2 = document.createElement('p');
   desc2.textContent = "In New Zealand, 80 per cent of Aruna restaurants are franchised by local business men and women who own and operate their restaurants as independent businesses."

   const desc3 = document.createElement('p');
   desc3.textContent = "Aruna success is built on a foundation of integrity. Hundreds of millions of people around the world trust our brand and we earn that trust every day by respecting our customers and employees, and delivering outstanding quality, service, cleanliness and value (QSC&V)."

   
   row3.appendChild(desc1)
   row3.appendChild(desc2)
   row3.appendChild(desc3)




   container.appendChild(row1);
   container.appendChild(row2);
   container.appendChild(row3);
 

   
    return container;
  }



  export default mainPage;