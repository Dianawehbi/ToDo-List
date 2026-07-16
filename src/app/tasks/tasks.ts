import { Component, inject, input, output, signal } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { type NewTaskData } from '../models/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class TasksComponent {
  name = input.required<string>();
  userId = input.required<string>();
  // isAddingTask = output<boolean>();
  isAddingTask = signal<boolean>(false);

  // taskService = inject(TasksService);

  constructor(private tasksService: TasksService){}
 

  get selectedUserTasks() {
    console.log('inside teask compoenet in my way to get usertasks');
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddTask() {
    // this.isAddingTask.emit(true);
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }

}
