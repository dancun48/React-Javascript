
import React, { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {  //allows us to see the input that we type-in
        setNewTask(event.target.value);
    }

    const addTask = () => {

        if(newTask.trim() !== ''){
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
        else{
            window.alert('You must input a task!')
        }
        
    }

    const deleteTask = (index) => {
        
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    const moveTaskUp = (index) => {
        if(index > 0){
            const movedUpTask = [...tasks];
            [movedUpTask[index], movedUpTask[index -1]] = [movedUpTask[index - 1], movedUpTask[index]];
            setTasks(movedUpTask);
        }
        
    }

    const moveTaskDown = (index) => {
        if(index < tasks.length - 1){
            const movedDownTask = [...tasks];
            [movedDownTask[index], movedDownTask[index + 1]] = [movedDownTask[index + 1], movedDownTask[index]];
            setTasks(movedDownTask);
        }
        
    }


    return (
            <>
                <div className='to-do-list '>
                    <h1>To-Do-List</h1>
                    <div>
                        <input type='text' placeholder='Enter a task...' value={newTask} onChange={handleInputChange}/>

                        <button className='add-button' onClick={addTask}>Add</button>
                    </div>
                    <ol>
                        {tasks.map((task, index) => 
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button className='delete-button' onClick={() => {deleteTask(index)}}>Delete</button>
                            <button className='move-button' onClick={() => {moveTaskUp(index)}}>⬆️</button>
                            <button className='move-button' onClick={() => {moveTaskDown(index)}}>⬇️</button>
                        </li>)}
                    </ol>
                </div>
            </>)
}
export default ToDoList