import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService}  from '../api-service.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, public api: ApiServiceService) { }

  todo:any = null

  taskName=""
  completed:boolean = false

  ngOnInit(): void {
    const todoId = this.route.snapshot.paramMap.get("id")
    console.log(todoId)
  
    if(todoId)
      this.loadTodo(parseInt(todoId))
 
  }

  loadTodo(id: number){
    return this.api.getTodoById(id).subscribe((data: {}) => {
      this.todo = data
      this.completed = this.todo.isCompleted
      this.taskName = this.todo.name;
    })
  }

  
}
