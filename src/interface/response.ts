export interface Person {
  person_name: string;
  status: string;
}

export interface Task {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: Person[];
  status: string;
  priority: string;
}

export interface ApiResponse {
  exec_time: number;
  response: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
    data: Task[];
  };
}
