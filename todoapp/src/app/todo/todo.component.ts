import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/material_module';
import { ApiServiceService}  from '../api-service.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public api: ApiServiceService) { }

  displayedColumns: string[] = ['Task No', 'Name', 'Completed', 'View'];
  dataSource: any = []
  
  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(){
    return this.api.getTodos().subscribe((data: {}) => {
      this.dataSource = data;
      console.log(data)
    })
  }

  updateStatus(id: string, checked: boolean){   
    return this.api.completeTodo(parseInt(id)).subscribe(res => {
        console.log(res)
    })

  }
}
