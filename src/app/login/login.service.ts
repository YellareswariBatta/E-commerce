import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { 
    
  }

  login(body:any):Observable<Login>{
    const url = "http://localhost:3000/usercreds"
    return this.http.post<Login>(url,body);
  }
  getUsers():Observable<Login>{
    const url = "http://localhost:3000/usercreds"
    return this.http.get<Login>(url);
  }
}
