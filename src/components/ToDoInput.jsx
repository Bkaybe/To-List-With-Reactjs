/* eslint-disable react/prop-types */


const ToDoInput = ({ handleNewToDos, todoValue, setToDoValue }) => {
  
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setToDoValue(e.target.value);
        }}
        placeholder="Enter To Do..."
      />
      <button
        onClick={() => {
          handleNewToDos(todoValue);
          setToDoValue("");
        }}>
        Add
      </button>
    </header>
  );
};

export default ToDoInput;
