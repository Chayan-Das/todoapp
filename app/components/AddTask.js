"use client";
import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast'



const AddTask = () => {


    const [task, setTask] = useState('');
    const [status, setStatus] = useState('');
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    const technologies = ['html', 'css', 'javascript', 'react.js', 'next.js', 'tailwind css'];

    const handleAddTask = () => {
        if (task) {

            if (status) {

                if (selectedTechnologies.length > 0) {
                    const newTask = { task, status, technologies: selectedTechnologies };

                    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
                    const updatedTasks = [...existingTasks, newTask];

                    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

                    console.log('New Task Added:', newTask);
                    console.log('Updated Tasks List:', updatedTasks);

                    toast.success('Task added');

                    setTask('');
                    setStatus('');
                    setSelectedTechnologies([]);
                    window.location.reload();
                }
                else {
                    toast.error('Select at least one technology');
                }



            }
            else {
                toast.error('Select a state');
            }


        } else {
            toast.error('Enter a task');
        }
    };

    const toggleTechnology = (tech) => {
        if (selectedTechnologies.includes(tech)) {
            setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech));
        } else {
            setSelectedTechnologies([...selectedTechnologies, tech]);
        }
    };

    return (

        <div className="w-auto border border-1 border-dashed p-5">
            <Toaster />
            <div className="flex items-center justify-center p-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <input
                        type="text"
                        className="outline-none p-3 rounded bg-green-50 w-full md:w-auto"
                        placeholder="Enter New task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <select
                        className="outline-none p-3 rounded bg-green-50 w-full md:w-auto"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">Select a state</option>
                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>

                    <button
                        className="outline-none p-3 rounded text-white bg-green-600 hover:bg-green-700 w-full md:w-auto"
                        onClick={handleAddTask}
                    >
                        Add Task
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center p-4 flex-wrap">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className={`flex items-center m-3 font-medium text-sm bg-green-100 px-2 py-1 rounded cursor-pointer ${selectedTechnologies.includes(tech) ? 'bg-green-200' : ''}`}
                        onClick={() => toggleTechnology(tech)}
                    >
                        {tech} &nbsp;
                        {selectedTechnologies.includes(tech) && (
                            <FaCheckCircle size={15} color="green" className="ml-1" />
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default AddTask;