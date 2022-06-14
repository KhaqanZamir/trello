import { faCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './styles.css'
import Todo from './Todo';

interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEdit = (isDone: boolean) => {
        if (!edit && !isDone) {
            setEdit(!edit);
        }
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    }

    const handleEditText = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editText } : todo)))
        setEdit(false);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided) => (
                <div className='todo' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div className='todo-header'>
                        <p>{todo.id}</p>
                        <div className='todo-icons'>
                            <FontAwesomeIcon className='todo-icon' icon={faPen} onClick={() => handleEdit(todo.isDone)} />
                            <FontAwesomeIcon className='todo-icon' icon={faTrashCan} onClick={() => handleDelete(todo.id)} />
                            <FontAwesomeIcon className='todo-icon' icon={faCheck} onClick={() => handleDone(todo.id)} />
                        </div>
                    </div>
                    <form className='edit-text-form' onSubmit={(e) => handleEditText(e, todo.id)}>
                        {
                            edit ? (<input ref={inputRef} value={editText} onChange={(e) => setEditText(e.target.value)} />) : todo.isDone ? <s>{todo.todo}</s> : <p>{todo.todo}</p>
                        }
                    </form>
                </div>
            )}
        </Draggable>
    )
}

export default SingleTodo