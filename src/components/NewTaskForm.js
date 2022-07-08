import React, { useState } from "react";

function NewTaskForm({categories, newItemObjectFunc}) {
  const [newItem, setNewItem]= useState("")
  const [newItemCategory, setNewItemCategory]= useState("Code")

  const categoriesArray = categories.map(e=> {
    return (
      <option key={e}>{e}</option>
    )
  })

 
  function handleAddTaskSubmission(e){
    e.preventDefault();
    const newObj = {
      text: newItem,
      category: newItemCategory
    }
    newItemObjectFunc(newObj);
    setNewItem("");
    setNewItemCategory("Code");
  };

  return (
    <form onSubmit={handleAddTaskSubmission} className="new-task-form">
      <label>
        Details
        <input onChange={e=> setNewItem(e.target.value)} type="text" value={newItem} />
      </label>

      <label>
        Category
        <select onChange={e=> setNewItemCategory(e.target.value)} name="category">
          {/* render <option> elements for each category here */}
          {categoriesArray}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
