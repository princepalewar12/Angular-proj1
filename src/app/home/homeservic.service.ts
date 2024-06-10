import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeservicService {

  constructor(private http:HttpClient) { }

  datafetch(){
  return this.http.get('http://localhost:2200/comments');
  }
}
 