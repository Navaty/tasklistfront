export class Project {
  id: number;
  title: string;
  todos: Todos[];
}
export class Todos {
  id: number;
  text: string;
  isComplited: boolean;
}

