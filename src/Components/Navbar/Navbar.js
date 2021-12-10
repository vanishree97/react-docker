import React from "react";
import { Menulist } from "./Menulist";
import  "./Navbar.css";
function NavBar  () {  
    
    const menulist = Menulist.map((data,index)=>{
        return(
            
               <li key={index}>
                   <a href={data.url}>{data.title}</a>
               </li>
           
        );
       
    })
  return (
      <nav>  
          <div style={{color:"tomato", fontWeight:600, fontSize:"25px", marginLeft:"0px" }}>
              Dominozz<font style={{color:"white"}}>Pizza</font>
          </div>  
        <ul className="menu-list"> {menulist}</ul>   
      </nav>
    
  );
}

 export default NavBar;