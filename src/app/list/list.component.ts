import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  lists:any;
  getLists:any;
  id:number = 1; 
  cedula = "";
  nombre = "";
  apellido = "";
  celular = "";

  constructor(
    private listService : ListService
  ) { }
  
  ngOnInit(): void {
    this.getList();
  }

  getList(){
     this.getLists = this.listService.get().subscribe(data =>
      this.lists = data.response );
  }

  createItem(){
    var item ={
      cedula:this.cedula,
      nombre: this.nombre,
      apellido:this.apellido,
      celular: this.celular
    }
    this.listService.createItem(item).subscribe(data =>
      this.getList());
  }

}
