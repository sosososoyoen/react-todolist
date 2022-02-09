import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline
} from 'react-icons/md';
import './ToDoListItem.scss';
import cn from 'classnames';

function ToDoListItem({ todo, onRemove, onToggle,onChangeSelectedTodo,onInsertToggle }) {
  const { id, text, checked } = todo;
  return (
    <li className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={()=>onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="edit" onClick={() =>
        {onChangeSelectedTodo(todo)
          onInsertToggle();
        }
         }>
        <MdModeEditOutline />
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </li>
  );
}

export default ToDoListItem;
