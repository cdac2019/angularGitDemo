import { Details } from './../classes/details';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

   
  constructor(private api_service : ApiService ){
     
  }
  listdetals: Details[];
  path:any;
   
  ngOnInit(){
this.api_service.getDetail()
.subscribe
(
   data=>{
this.listdetals=data;
   }
   
   );
  }

}
