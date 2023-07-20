import React from "react";
import "./App.css";
const App = () => {
  

  return (
    <div className="componet">
      <div className="container-1">
          <img
          src="https://hub.dummyapis.com/Image?text=DF&height=120&width=120"
          alt="userimage"
          />
        <div id="star-1">4.5<i class="fa-regular fa-star"></i></div>
        <div  id="para"><p>Ratings</p></div>
      </div>
      <div className="container-2">
          <h2>John Doe,5 Yrs Exp. </h2> 
          <h2 className="color">Detalils</h2>
          <p>I a interested in Sciene and Web technology,Basic Lorem Ipsum</p>
        <div id="subject">
           <h3 className="subject">Science</h3>  
           <h3 className="subject">Maths</h3> 
           <h3 className="subject">Hindi</h3> 
           <h3 className="subject">+</h3> 
       </div>
      </div>
      <div className="rating">
        <i class="fa-regular fa-star" id="red"></i>
        <i class="fa-regular fa-star" id="yellow"></i>
        <i class="fa-regular fa-star" id="brown"></i>
        <i class="fa-regular fa-star" id="green"></i>
        <div id="award"><p>Awards</p></div> 
      </div>
       <div className="profile">
          <i class="fa-sharp fa-solid fa-pen"></i> 
         <h2>Profile</h2>
      </div> 
    </div>
  );
};
export default App;
