"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { GoTrash } from "react-icons/go";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    const handleRemoveTask = (taskToRemove) => {
        const updatedTasks = tasks.filter(task => task !== taskToRemove);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };


    return (
        <div className="flex flex-wrap justify-between p-3 pb-0">
            <div className="flex flex-col items-center w-full md:w-4/12  m-0 p-4 hover:border border-1 border-dashed border-yellow-200">

                <div className="flex flex-col items-center w-full  ">
                    <div className="flex flex-col items-center w-full p-3 border-l-8 border-yellow-500 bg-green-50 select-none">
                        <Image src="/schedule.png" alt="TODO Logo" width={50} height={50} />
                        <span className="mt-2 font-bold">Todo</span>
                    </div>


                    {tasks.map(task => (

                        (task.status === 'Todo' &&
                            <div className="flex flex-col w-full bg-white pt-2">



                                <div className="w-full border border-1 border-grey rounded-md mb-3">


                                    <div className="flex flex-row justify-between w-full flex-wrap">
                                        <span className="p-3 font-200 text-sm font-bold">{task.task}</span>
                                        <span className="p-3 font-200 "><GoTrash size={16} color="red" style={{ cursor: 'pointer' }} onClick={() => handleRemoveTask(task)} /></span>
                                    </div>


                                    <div className="flex flex-wrap">

                                        {task.technologies.includes('html') && (
                                            <span className="m-3 font-200 text-sm bg-yellow-200 pl-2 pr-2 pt-1 pb-1 rounded">html</span>
                                        )}

                                        {task.technologies.includes('css') && (
                                            <span className="m-3 font-200 text-sm bg-blue-200 pl-2 pr-2 pt-1 pb-1 rounded">css</span>
                                        )}

                                        {task.technologies.includes('javascript') && (
                                            <span className="m-3 font-200 text-sm bg-yellow-200 pl-2 pr-2 pt-1 pb-1 rounded">javascript</span>
                                        )}

                                        {task.technologies.includes('react.js') && (
                                            <span className="m-3 font-200 text-sm bg-blue-300 pl-2 pr-2 pt-1 pb-1 rounded">react.js</span>
                                        )}

                                        {task.technologies.includes('next.js') && (
                                            <span className="m-3 font-200 text-sm bg-green-200 pl-2 pr-2 pt-1 pb-1 rounded">next.js</span>
                                        )}

                                        {task.technologies.includes('tailwind css') && (
                                            <span className="m-3 font-200 text-sm bg-green-300 pl-2 pr-2 pt-1 pb-1 rounded">tailwind css</span>
                                        )}


                                    </div>


                                </div>







                            </div>
                        )

                    ))}




                </div>



            </div>

            <div className="flex flex-col items-center w-full md:w-4/12  m-0 p-4 hover:border border-1 border-dashed border-blue-200">

                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center w-full p-3 border-l-8 border-blue-500 bg-green-50 select-none">
                        <Image src="/working.png" alt="TODO Logo" width={50} height={50} />
                        <span className="mt-2 font-bold">Doing</span>
                    </div>



                    <div className="flex flex-col w-full bg-white pt-2">

                        {tasks.map(task => (

                            (task.status === 'Doing' &&
                                <div className="w-full border border-1 border-grey rounded-md mb-3">


                                    <div className="flex flex-row justify-between w-full flex-wrap">
                                        <span className="p-3 font-200 text-sm font-bold">{task.task}</span>
                                        <span className="p-3 font-200 "><GoTrash size={16} color="red" style={{ cursor: 'pointer' }} onClick={() => handleRemoveTask(task)} /></span>
                                    </div>



                                    <div className="flex flex-wrap">

                                        {task.technologies.includes('html') && (
                                            <span className="m-3 font-200 text-sm bg-yellow-200 pl-2 pr-2 pt-1 pb-1 rounded">html</span>
                                        )}

                                        {task.technologies.includes('css') && (
                                            <span className="m-3 font-200 text-sm bg-blue-200 pl-2 pr-2 pt-1 pb-1 rounded">css</span>
                                        )}

                                        {task.technologies.includes('javascript') && (
                                            <span className="m-3 font-200 text-sm bg-yellow-200 pl-2 pr-2 pt-1 pb-1 rounded">javascript</span>
                                        )}

                                        {task.technologies.includes('react.js') && (
                                            <span className="m-3 font-200 text-sm bg-blue-300 pl-2 pr-2 pt-1 pb-1 rounded">react.js</span>
                                        )}

                                        {task.technologies.includes('next.js') && (
                                            <span className="m-3 font-200 text-sm bg-green-200 pl-2 pr-2 pt-1 pb-1 rounded">next.js</span>
                                        )}

                                        {task.technologies.includes('tailwind css') && (
                                            <span className="m-3 font-200 text-sm bg-green-300 pl-2 pr-2 pt-1 pb-1 rounded">tailwind css</span>
                                        )}


                                    </div>


                                </div>
                            )



                        ))}


                    </div>

                </div>



            </div>

            <div className="flex flex-col items-center w-full md:w-4/12  m-0 p-4 hover:border border-1 border-dashed border-green-200">

                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center w-full p-3 border-l-8 border-green-500 bg-green-50 select-none">
                        <Image src="/done.png" alt="TODO Logo" width={50} height={50} />
                        <span className="mt-2 font-bold">Done</span>
                    </div>

                    <div className="flex flex-col w-full bg-white pt-2">

                        {tasks.map(task => (

                            (task.status === 'Done' &&

                                <div className="w-full border border-1 border-grey rounded-md mb-3">


                                    <div className="flex flex-row justify-between w-full flex-wrap">
                                        <span className="p-3 font-200 text-sm font-bold">{task.task}</span>
                                        <span className="p-3 font-200 "><GoTrash size={16} color="red" style={{ cursor: 'pointer' }} onClick={() => handleRemoveTask(task)} /></span>
                                    </div>


                                    <div className="flex flex-wrap">

                                        {task.technologies.includes('html') && (
                                            <span className="m-3 font-200 text-sm bg-yellow-200 pl-2 pr-2 pt-1 pb-1 rounded">html</span>
                                        )}

                                        {task.technologies.includes('css') && (
                                            <span className="m-3 font-200 text-sm bg-blue-500 pl-2 pr-2 pt-1 pb-1 rounded">css</span>
                                        )}

                                        {task.technologies.includes('javascript') && (
                                            <span className="m-3 font-200 text-sm bg-yellow-200 pl-2 pr-2 pt-1 pb-1 rounded">javascript</span>
                                        )}

                                        {task.technologies.includes('react.js') && (
                                            <span className="m-3 font-200 text-sm bg-blue-300 pl-2 pr-2 pt-1 pb-1 rounded">react.js</span>
                                        )}

                                        {task.technologies.includes('next.js') && (
                                            <span className="m-3 font-200 text-sm bg-green-300 pl-2 pr-2 pt-1 pb-1 rounded">next.js</span>
                                        )}

                                        {task.technologies.includes('tailwind css') && (
                                            <span className="m-3 font-200 text-sm bg-green-300 pl-2 pr-2 pt-1 pb-1 rounded">tailwind css</span>
                                        )}


                                    </div>


                                </div>
                            )

                        ))}


                    </div>

                </div>



            </div>

        </div>
    )
}

export default TaskList


