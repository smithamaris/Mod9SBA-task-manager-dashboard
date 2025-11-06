import type { TaskFilterOptions } from "../../types";

interface TaskFilterProps {
  filters: TaskFilterOptions;
  onFilterChange: (filters: TaskFilterOptions) => void;
}

function TaskFilter({ filters, onFilterChange }: TaskFilterProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex gap-3 items-center bg-zinc-800 p-4 rounded-lg mt-5">
      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
        className="p-2 rounded bg-zinc-700"
      >
        <option value="all">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select
        name="priority"
        value={filters.priority}
        onChange={handleChange}
        className="p-2 rounded bg-zinc-700"
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={filters.search}
        onChange={handleChange}
        className="p-2 rounded bg-zinc-700"
      />
    </div>
  );
}

export default TaskFilter;