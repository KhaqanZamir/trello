import { faCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles.css'
import Todo from './Todo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {
            todos.map((todo) => (
                <div className='todo'>
                    <div className='todo-header'>
                        <p>{todo.id}</p>
                        <div className='todo-icons'>
                            <FontAwesomeIcon icon={faPen} />
                            <FontAwesomeIcon icon={faTrashCan} />
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                    </div>
                    <p>{todo.todo}</p>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList