import { useState } from "react";
import type { TaskFormData } from "../../types";

interface TaskFormProps {
  onAddTask: (taskData: TaskFormData) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return alert("Title is required!");
    onAddTask(formData);
    setFormData({ title: "", description: "", priority: "medium", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-zinc-800 p-5 rounded-lg w-96">
      <h3 className="text-2xl mb-2">Add New Task</h3>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="p-2 rounded bg-zinc-700"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="p-2 rounded bg-zinc-700"
      />

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="p-2 rounded bg-zinc-700"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="p-2 rounded bg-zinc-700"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;