import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks';
import { NewTaskComponent } from './tasks/new-task/new-task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent , NewTaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-project');

  users = DUMMY_USERS;

  selectedUserId = signal('');

  // addTask = signal<boolean>(false);

  get selectedUser() {
    return this.users.find((user) => user.id == this.selectedUserId());
  }

  onSelectUser(id: string) {
    console.log('The selected user is with id : ' + id);
    this.selectedUserId.set(id);
  }

  // onAddTaskForUser(addTask: boolean) {
  //   this.addTask.set(addTask);
  // }
}
