import React, {useState} from "react";

function NewApiForm({onAddApi}) {

  const [name, setName]=useState('')
  const [link, setLink]=useState('')
  const [image, setImage]=useState('')
  const [category, setCategory]=useState('')
  const [description, setDescription]=useState('')

  
  function handleSubmit(){
    const newApiForm = {
      name,
      link,
      image,
      category,
      description,
    }
    fetch("http://localhost:3000/apis",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newApiForm),
    })
    .then((r) => r.json())
    .then(onAddApi)
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <input 
      placeholder="Name" 
      onChange={(e)=>setName(e.target.value)}/>
      <input 
      placeholder="Link" 
      onChange={(e)=>setLink(e.target.value)}/>
      <input 
      placeholder="Image" 
      onChange={(e)=>setImage(e.target.value)} />
      <input 
      placeholder="Category" 
      onChange={(e)=>setCategory(e.target.value)} />
      <input 
      placeholder="Write a brief description"
      onChange={(e)=>setDescription(e.target.value)} />
      <input 
      type="submit" 
      value="Submit Api" />
    </form>
  );
}

export default NewApiForm;