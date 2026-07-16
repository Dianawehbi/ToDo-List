import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { TasksComponent } from './tasks/tasks';
import { CardComponent } from './shared/card/card';
import { TaskComponent } from './tasks/task/task';
import { NewTaskComponent } from './tasks/new-task/new-task';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    CardComponent
  ],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
