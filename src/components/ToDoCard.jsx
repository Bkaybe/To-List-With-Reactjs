/* eslint-disable react/prop-types */

const ToDoCard = (props) => {
  const { children, deletion, index, editToDo } = props;
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {children}
        <button onClick={() => {editToDo(index)}}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            deletion(index);
          }}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default ToDoCard;
