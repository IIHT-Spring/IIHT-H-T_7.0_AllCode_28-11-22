import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css'], 
})
export class TodoComponentComponent implements OnInit {
  todos: Todo[];

  constructor(private store: Store<{ todos: Todo[] }>) {
    store.pipe(select('todos')).subscribe((values) => {
      this.todos = values;
      console.log(values);
    });
  }

  ngOnInit(): void {}
}
