import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import SingleTodo from './SingleTodo';
import './styles.css'
import Todo from './Todo';

interface Props {
    todos: Todo[];
    completedTodos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {

    return (
        <div className='all-actions'>
            <Droppable droppableId='TodosList'>
                {(provided) => (
                    <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
                        <h2>Active Tasks</h2>
                        {todos.map((todo, index) => (
                            <SingleTodo key={todo.id} index={index} todo={todo} todos={todos} setTodos={setTodos} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <Droppable droppableId='CompletedList'>
                {(provided) => (
                    <div className='completed-tasks' ref={provided.innerRef} {...provided.droppableProps}>
                        <h2>Completed Tasks</h2>
                        {completedTodos.map((todo, index) => (
                            <SingleTodo key={todo.id} index={index} todo={todo} todos={completedTodos} setTodos={setCompletedTodos} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default TodoList