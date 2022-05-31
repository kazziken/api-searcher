import React from "react";

function ApiCard({api}) {
    const {name,link,category,image,description} = api
    
    //create a ratings button using state?
    
    return (
        <div>
          <h3>{name}</h3>
          <p>{link}</p>
          <img src={image} alt=""/>
          <p>
            <strong>{category}</strong>
          </p>
          <p>{description}</p>
        </div>
      );
}

export default ApiCard;