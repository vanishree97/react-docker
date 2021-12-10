import React from "react";

function Demo() {
    const Softdrinks = [
        {

            "CategoryID": 1,
        
            "CategoryName": "Beverages",
        
            "Description": "Soft drinks, coffees & teas",
        
            "In stock": true,

          },
        
          {
        
            "CategoryID": 2,
        
            "CategoryName": "Condiments",
        
            "Description": "Sweet and savory sauces",
        
            "In stock": false
          },
        
          {
        
            "CategoryID": 3,
        
            "CategoryName": "Confections",
        
            "Description": "Candies and sweet breads",
        
            "In stock": true
          }
    ];

    const Softdrinkslist = () =>{
        Softdrinks.map((item,index) =>{
            return(
              console.log(item.CategoryName)  
            );        
        })
    }

  return (
    <div className="container">
         <nav className="navbar navbar-default"> 
             <div className="container-fluid">
                <ul className="nav nabar-nav">
                    <li><a href="#">Soft Drinks</a></li>
                    <li><a href="#">pizza</a></li>
                    <li><a href="#">Deals</a></li>
                    <li><a href="#">Orders</a></li>
                </ul>
             </div> 
        </nav> 
        {Softdrinkslist}
      <h4 style={{color:"pink", fontWeight:"bold"}}>yeap...you can try your<span style={{color:"red"}}>order</span></h4>
      
    </div>
  );
}

 export default Demo;