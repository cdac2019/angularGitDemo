import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

 
 @Injectable()
 export class ApiService{
 constructor(private httpclient :HttpClient){ }
    getDetail():Observable <any>{
return this.httpclient.get("https://jsonplaceholder.typicode.com/comments?postId=1");
    }
}