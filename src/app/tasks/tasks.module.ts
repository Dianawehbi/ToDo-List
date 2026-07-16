import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks';
import { NewTaskComponent } from './new-task/new-task';
import { TaskComponent } from './task/task';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, NewTaskComponent, TaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
