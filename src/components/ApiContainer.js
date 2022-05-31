import React from "react";
import ApiCard from "./ApiCard";

function ApiContainer({showApis}) {
  const renderApis =       
  showApis.map((api) => 
    <ApiCard 
    key = {api.id}
    api = {api}
    />
  )
  

  return (
    <ApiCard 
    itemsPerRow={3}
    //css needs to match className
    className="">
      {renderApis}
    </ApiCard>
  );
}

export default ApiContainer;
