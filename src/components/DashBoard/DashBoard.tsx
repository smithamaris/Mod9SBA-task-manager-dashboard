import { useState } from "react";
import type { Task, TaskFormData, TaskFilterOptions } from "../../types";
import TaskForm from "../TaskForm/TaskForm";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskList from "../TaskList/TaskList";
import { filterTasks } from "../../utils/taskUtils";

interface DashboardProps {
  tasks: Task[];
  onDelete: (taskId: string) => void
  onStatusChange: (taskId: string, newStatus: Task["status"]) => void;
}

function Dashboard({ tasks: initialTasks, onStatusChange }: DashboardProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  
  const [filters, setFilters] = useState<TaskFilterOptions>({
    status: "all",
    priority: "all",
    search: "",
  });


  // add a new task
  const addTask = (data: TaskFormData) => {
    const newTask: Task = {
      id: Date.now().toString(),
      status: "pending",
      ...data,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const filteredTasks = filterTasks(tasks, filters.status, filters.priority, filters.search);

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleStatusChange = (id: string, newStatus: Task["status"]) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
    onStatusChange(id, newStatus);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <TaskForm onAddTask={addTask} />
      <TaskFilter filters={filters} onFilterChange={setFilters} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} onStatusChange={handleStatusChange}/>
      

    </div>
  );
}

export default Dashboard;