import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
  signal,
} from '@angular/core';
import { User } from '../models/user.model';
import { CardComponent } from '../shared/card/card';

// type aliases
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

@Component({
  selector: 'app-user',
  imports: [CardComponent],
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
