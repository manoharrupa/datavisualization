import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  private baseUrl = "http://localhost:8080/user"
  private url = this.baseUrl+"/register";
  private getUserUrl = this.baseUrl+ "/get/"
 
  constructor(private http: HttpClient) { }

  registerUser(registration:any){
    return this.http.post<any>(this.url, registration);
  }

  getUser(id: number){
    let url = `http://localhost:8080/user/get/${id}`;
    return this.http.get(url);
  }

  save(reg:any){
    return null;
  }

}
