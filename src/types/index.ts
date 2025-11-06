export type TaskStatus = "pending" | "in-progress" | "completed";
// export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string;
}

// Form data for adding /editing
export interface TaskFormData {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

// For filters
export interface TaskFilterOptions {
  status: "all" | "pending" | "in-progress" | "completed";
  priority: "all" | "low" | "medium" | "high";
  search: string;
}