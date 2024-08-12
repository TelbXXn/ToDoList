export default class Todos {
  constructor(title, description, dueDate, priority,) {
    this.title = title;
    this.desc = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

}

export class Group { 
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}