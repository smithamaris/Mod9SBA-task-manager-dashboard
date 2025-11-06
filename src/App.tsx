// import { useState } from "react";
// import { log } from "console";
import { useState } from "react";
import DashBoard from "./components/DashBoard/DashBoard";
// import TaskList from "./components/TaskList/TaskList";
import type { Task } from "./types";

function App() {
  

  // const initialTasks: Task[] = [
    const [initialTasks, setInitialTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design landing page",
      description:
        "Create the initial wireframe and mockups for the landing page.",
      status: "pending",
      priority: "high",
      dueDate: "2025-06-20",
    },
    {
      id: "2",
      title: "Set up CI/CD pipeline",
      description:
        "Configure GitHub Actions for automated testing and deployment.",
      status: "pending",
      priority: "medium",
      dueDate: "2025-06-18",
    },
    {
      id: "3",
      title: "Fix login bug",
      description:
        "Resolve the issue where users can’t log in with Google OAuth.",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-06-14",
    },
    {
      id: "4",
      title: "Write unit tests",
      description: "Add coverage for the user service module.",
      status: "in-progress",
      priority: "low",
      dueDate: "2025-06-22",
    },
    {
      id: "5",
      title: "Deploy to staging",
      description: "Push the latest build to the staging environment for QA.",
      status: "completed",
      priority: "medium",
      dueDate: "2025-06-10",
    },
  ]);

  //-------------------------------------for the delete button 
  const handleDelete = (taskId: string) => {
    console.log('Delete clicked');
    setInitialTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
  };
//-------------------------------------------------
// updates the tasks status
const onStatusChange = (taskId: string, newStatus: Task["status"]) => {
    setInitialTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };
  return (
    <div className="flex flex-col items-center bg-zinc-900 text-white min-h-screen">
      <h1 className="text-5xl my-10">Task Manager Dashboard</h1>

      <DashBoard tasks={initialTasks} onDelete={handleDelete} onStatusChange={onStatusChange}/>

      {/* <TaskList tasks={initialTasks} onDelete={handleDelete} onStatusChange={onStatusChange}/> */}
      

      
    </div>
  );
}

export default App;