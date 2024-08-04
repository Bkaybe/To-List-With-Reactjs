/* eslint-disable react/prop-types */

import ToDoCard from "./ToDoCard";

const ToDoList = ({ todos, deletion, editToDo }) => {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <ToDoCard  editToDo={editToDo} deletion={deletion} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </ToDoCard>
        );
      })}
    </ul>
  );
};

export default ToDoList;
