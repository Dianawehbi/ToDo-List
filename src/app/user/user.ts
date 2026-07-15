import { Component, computed, EventEmitter, Input, input, output, Output, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // @Input({required: true}) id! : string;
  // @Output() select = new EventEmitter<string>();
  
  id = input.required<string>();
  name = input.required<string>();

  avatar = input.required<string>();

  select = output<string>();

  imagePath = computed(()=> 'assets/users/'+ this.avatar());
  // get imagePath(){
  //   // we access this in html as property imagePath ✔️
  //   // not as method , imagePath() ❌
  //   return 'assets/users/'+  this.avatar();
  // }

  randomNumber = signal(1);

  onSelectUser(){
    this.select.emit(this.id());
  }
  // user: UserModel = input.required();

  // onClick(){
  //   // should be also an input from outside ,
  //   // on clcik display the data of the list componenet based on the selected user
  // }
}
