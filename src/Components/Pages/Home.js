import React from "react";
import dominozz from "../Images/dominozz.jfif";
import pizza1 from "../Images/pizza1.jfif";
import pizza3 from "../Images/pizza3.jfif";
import pizza2 from "../Images/pizza2.jfif";
function Home() {
  return (
    <div className="container">
        <div>
            <h2 style={{color:"pink", fontWeight:"bold"}}>WellCome All..</h2>  
            <img src={dominozz} className="float-right" alt="dominozzz" height="150px" width="150px"/>
        </div>
       <h3 style={{color:"pink", fontWeight:"bold"}}> you are here in <span style={{color:"red"}}>dominozz</span> hut..<span className="fas fa-heart"></span></h3>
             <div className="container" style={{color:"white"}}>
             Domino's Pizza Group plc is a United Kingdom-based master franchise of international fast food pizza delivery chain Domino's Pizza. It holds significant minority interests in the master franchisees for Domino's Pizza in Iceland, Norway and Sweden. The company is listed on the London Stock Exchange and is a constituent of the FTSE 250 Index.
             Domino's Pizza Group is the largest master franchisee in the Domino's system (see Domino's Pizza§Franchises), measured by retail sales and store profits.
            </div>
            
            <div className="container-fluid">
                <div className="row">
                   <div className="col">
                   <img src={pizza1} class="rounded-circle" alt="Cinque Terre"/>
                   </div>

                   <div className="col">
                   <img src={pizza3} class="rounded-circle" alt="Cinque Terre"/>
                   </div>

                   <div className="col">
                   <img src={pizza2} class="rounded-circle" alt="Cinque Terre"/>
                   </div>
                </div>
            </div>  
            <h2 style={{color:"pink", fontWeight:"bold"}}>Lets have a pizzaaaa </h2>
    </div>
  );
}

 export default Home;