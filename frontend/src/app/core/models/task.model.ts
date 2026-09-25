export type TaskStatus = 'assigned' | 'in_progress' | 'completed';

export interface Task {
  id: number;
  title: string;
  description: string;
  assigned_to: number;
  employee_name?: string;
  due_date: string;
  status: TaskStatus;
  created_at: string;
}

export interface TaskPayload {
  title: string;
  description: string;
  assigned_to: number;
  due_date: string;
}