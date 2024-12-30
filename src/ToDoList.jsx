import React, { useState } from 'react';

function ToDoList({
  tasks,
  addTask,
  toggleTaskCompletion,
  setFilter,
  activeTasksCount,
  searchQuery,
  setSearchQuery,
}) {
  const [newTask, setNewTask] = useState(''); // Local state for new task input

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="todo-list">
      {/* Add Task Form */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </form>

      {/* Search Tasks */}
      <input
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.name}
            </span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <footer>
        <span>{activeTasksCount} items left</span>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Active')}>Active</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
      </footer>
    </div>
  );
}

export default ToDoList;
