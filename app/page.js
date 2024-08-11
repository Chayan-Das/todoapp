import Image from "next/image";
import { GoTrash } from "react-icons/go";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";


export default function Home() {
  return (
    <main className="p-5">
      <div className="flex flex-row justify-between p-2">
        <div className="p-3 font-bold flex items-center">
          <Image src="/todologo.png" alt="TODO Logo" width={50} height={50} />
          <span className="ml-2">PROJECT TODO</span>
        </div>


      </div>


      <AddTask />

      <TaskList/>


    </main>
  );
}
