import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baserUrl=environment.urlServidor;

  private http=inject(HttpClient)

  constructor() {}
  loginConNest(credenciales: any){
    return this.http.post<any>(`${this.baserUrl}/auth/login`,credenciales);
  }

  registroConNest(datos: any){
    return this.http.post<any>(`${this.baserUrl}/register`,datos)
  } 
}