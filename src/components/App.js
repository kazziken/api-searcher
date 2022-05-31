import React, {useState, useEffect} from "react";
import ApiContainer from "./ApiContainer"; 

function App(){
   const [showApis, setShowApis] = useState([]);
 
   useEffect(() => {
       fetch("http://localhost:3000/apis")
         .then((r) => r.json())
         .then((showApi) => setShowApis(showApi))
     }, []);
 
  
   return (
       <div className="App">
           {/* <Header /> */}
           <ApiContainer showApis={showApis}/>
       </div>
   )
 
}
export default App();
