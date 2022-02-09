import ToDoListItem from './ToDoListItem';
import './TodoList.scss';

function TodoList({ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle }) {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <ToDoListItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
