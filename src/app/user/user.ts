import {
  Component,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { User } from '../models/user.model';

// type aliases
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // @Input({required: true}) id! : string;
  // @Output() select = new EventEmitter<string>();

  // id = input.required<string>();
  // name = input.required<string | undefined>();

  // avatar = input.required<string>();

  user = input.required<User>();

  selected = input.required<boolean>();

  select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.user().avatar);
  // get imagePath(){
  //   // we access this in html as property imagePath ✔️
  //   // not as method , imagePath() ❌
  //   return 'assets/users/'+  this.avatar();
  // }

  randomNumber = signal(1);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
