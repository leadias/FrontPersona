import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';



@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  @Input() name!:string;
  @Input() lists:any;
  cedula = "";
  nombre="";
  apellido="";
  celular = "";
  id:number = 0;




  constructor(
    private listService : ListService
  ) {}


  ngOnInit(): void {
  }

  dataModal(cedula:string,name:string,apellido:string,celular:string){
      this.cedula = cedula;
      this.nombre = name;
      this.apellido= apellido;
      this.celular = celular;
  }


  deleteItem(id:string){
       this.listService.deleteItem(id).subscribe(data => 
        location.reload());
       
  }

  updateItem(){

    var item ={
      cedula:this.cedula,
      nombre:this.nombre,
      apellido:this.apellido,
      celular:this.celular
   }
   this.listService.updateItem(item).subscribe(data => 
    location.reload());
  }



}
