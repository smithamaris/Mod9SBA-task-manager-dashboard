import type { Task, TaskStatus } from "../../types";
import TaskItem from "./TaskItem"


// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: "low" | "medium" | "high";
//   dueDate: string;
// }
export interface TaskListProps {
    tasks: Task[];
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}
interface Props {
  tasks: Task[];
  onStatusChange: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
}

 function TaskList({ tasks, onStatusChange, onDelete }: Props) {
  
    if (tasks.length ===0)
        return <div className="text-gray-400 py-10 text-center">No tasks found</div>;
  return (
      
      <div className="flex flex-col gap-5">
      <h2 className="text-3xl my-5">Task List</h2>

        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onStatusChange={onStatusChange} onDeleted={onDelete}/>
        ))}
      </div>
    
  );
}

export default TaskList;


