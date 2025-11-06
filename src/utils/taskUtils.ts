import type { Task } from "../types";

export const filterTasks = (
  tasks: Task[],
  status: string,
  priority: string,
  search: string
) => {
  return tasks.filter((task) => {
    const matchesStatus = status === "all" || task.status === status;
    const matchesPriority = priority === "all" || task.priority === priority;
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesStatus && matchesPriority && matchesSearch;
  });
};

export const sortTasksByDate = (tasks: Task[]) => {
  return [...tasks].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );
};