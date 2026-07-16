import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../models/task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  standalone: false,
  styleUrl: './task.css',
})
export class TaskComponent {
  task = input.required<Task>();

  private tasksService = inject(TasksService);
  
  onTaskCompleted() {
    this.tasksService.removeTask(this.task().id);
  }
}
