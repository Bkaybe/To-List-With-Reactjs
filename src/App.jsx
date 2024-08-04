import { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setToDos] = useState([]);
  const [todoValue, setToDoValue] = useState("");

  const persistData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setToDos(newTodoList);
  };

  const handleDeleteToDo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setToDos(newTodoList);
  };

  const handleEditToDo = (index) => {
    const valueToBeDelited = todos[index];
    setToDoValue(valueToBeDelited);
    handleDeleteToDo(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos;
    setToDos(localTodos);
  }, []);
  return (
    <>
      <ToDoInput
        todoValue={todoValue}
        setToDoValue={setToDoValue}
        handleNewToDos={handleAddTodos}
      />
      <ToDoList
        editToDo={handleEditToDo}
        deletion={handleDeleteToDo}
        todos={todos}
      />
    </>
  );
}

export default App;
