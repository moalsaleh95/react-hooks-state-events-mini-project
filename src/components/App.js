import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [categoryFilter, setCategoryFilter]= useState("All") //added All

  function newItemObject(obj){
    setTasks([...tasks,obj])
  }

  // added the below 2 functions
  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const visibleTasks = tasks.filter(
    (task) => categoryFilter === "All" // gives true and shows all tasks
     || task.category === categoryFilter // or , it filters according to what has been selected
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryFilterSetter={setCategoryFilter} selectedCategory={categoryFilter}/>
      <NewTaskForm categories={CATEGORIES} newItemObjectFunc={newItemObject}/>
      <TaskList onDeleteTask={handleDeleteTask} tasks={visibleTasks}/>
    </div>
  );
}

export default App;
