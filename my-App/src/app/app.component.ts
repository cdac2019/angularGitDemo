import { Component } from '@angular/core';
import { ApiService  }  from './services/api.service';
import { Details } from "./classes/details";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
