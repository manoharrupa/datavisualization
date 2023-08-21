import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  save(username: string){

    localStorage.setItem('userName',username)
    }
    public get userValue(): string {
            return localStorage.getItem('userName')!
        }
  constructor() { }

}
