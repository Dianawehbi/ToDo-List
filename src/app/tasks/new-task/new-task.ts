import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<boolean>();

  private tasksService = inject(TasksService);

  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');
  enteredDate = signal<string>('');

  onCancel() {
    this.close.emit(true);
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDate(),
      },
      this.userId(),
    );

    this.close.emit(true);
  }
}
