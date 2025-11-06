import type { Task, TaskStatus  } from "../../types";

interface Props {
  task: Task;
  onStatusChange: (id: string, status: TaskStatus) => void;
  onDeleted: (id: string) => void; 
}

function TaskItem({ task, onStatusChange, onDeleted }: Props) {
    

  return (
    <div className="flex flex-col gap-2 text-xl border p-2 rounded-lg">
        <div>
            <h3 className="font-bold">{task.title}</h3>
            <p className="text-gray-400">{task.description}</p>
            <p>Status: {task.status} | Priority: {task.priority} </p>
            <p>Due Date: {task.dueDate}</p>
        </div>
        <div className="flex flex-col gap-1">
            <select
            value={task.status}
            onChange={e => onStatusChange(task.id, e.target.value as TaskStatus)}
            className="rounded bg-zinc-900 p-1">
                <option value="pending">Pending</option>
                <option value="in-progress">In Progess</option>
                <option value="completed">Completed</option>
            </select>
            <button className="text-red-400 hover:underline mt-1" onClick={() =>onDeleted(task.id)}>Delete</button>



        </div>
    </div>
  );
}

export default TaskItem;