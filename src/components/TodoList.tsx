import React from 'react';
import SingleTodo from './SingleTodo';
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
                <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
            ))
        }
    </div>
  )
}

export default TodoList