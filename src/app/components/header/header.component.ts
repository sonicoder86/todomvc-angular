import { Component } from '@angular/core';
import { TodoActionService } from '../../services/todo-action.service';

const ENTER_KEY = 13;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  name = '';

  constructor(private action: TodoActionService) {}

  handleChange(event: KeyboardEvent) {
    if (event.which === ENTER_KEY) {
      this.action.onCreate(this.name);
      // this.onCreate(this.name);
      this.name = '';
    } else {
      this.name = (event.target as HTMLInputElement).value;
    }
  }
}
