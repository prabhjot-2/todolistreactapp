import React, { useState } from 'react';
import ToDoList from './ToDoList.jsx'; // Import ToDoList component

function App() {
  const [tasks, setTasks] = useState([]); // Array to store tasks
  const [filter, setFilter] = useState('All'); // Active filter ('All', 'Active', 'Completed')
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Function to add a new task
  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to filter tasks based on the active filter ('All', 'Active', 'Completed')
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true; // Return all tasks for 'All' filter
  });

  // Filter tasks based on search input
  const searchedTasks = filteredTasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Things to Do</h1>
      <ToDoList
        tasks={searchedTasks}
        addTask={addTask}
        toggleTaskCompletion={toggleTaskCompletion}
        setFilter={setFilter}
        activeTasksCount={tasks.filter((task) => !task.completed).length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}

export default App;
