const TodoList = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {todo.title}
          <input type="checkbox" checked={todo.completed} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
