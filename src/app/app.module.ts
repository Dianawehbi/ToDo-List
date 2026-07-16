import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, HeaderComponent, UserComponent],

  bootstrap: [App],
  imports: [BrowserModule, FormsModule, TasksModule],
})
export class AppModule {}
