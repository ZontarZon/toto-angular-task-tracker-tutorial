import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  // have to initialize tasks in the constructor to use them.
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    /* will run code when the component loads.
    you usually want to use observables for this.
    Think of it like a promise.
    (tasks) is what's returned from the Observable. */
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
