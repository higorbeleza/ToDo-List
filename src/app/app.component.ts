import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private list = new TodoList("Bob",[
    new TodoItem("go for run", true),
    new TodoItem("get flowers"),
    new TodoItem("Collect tickets")
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items
      .filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete)
  }

  addItem(newItem: string) {
    if(newItem != '') {
      this.list.addItem(newItem);
    }
  }

  showComplete: boolean = false
}
