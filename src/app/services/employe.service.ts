import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../interface/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private API_URL = "http://127.0.0.1:8000/api/get_user";
  private DELETE_URL = "http://127.0.0.1:8000/api/delete_user";
  private GET_URL = "http://127.0.0.1:8000/api/get_user_details";
  private UPDATE_USER = "http://127.0.0.1:8000/api/update_user";
  private ADD_USER = "http://127.0.0.1:8000/api/register";

  httpoptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  getuser():Observable<any>{
    return this.http.get(this.API_URL);
  }

  deleteuser(id:number):Observable<any>{
    return this.http.get(`${this.DELETE_URL}/${id}`);
  }

  getuserdeatils(id:number):Observable<any>{
    return this.http.get(`${this.GET_URL}/${id}`);
  }

  updateuserdetails(id:number,data:Employe):Observable<any>{
    return this.http.put(`${this.UPDATE_USER}`,JSON.stringify(data),this.httpoptions)
  }

  adduser(data:Employe):Observable<any>{
    return this.http.post(`${this.ADD_USER}`,JSON.stringify(data),this.httpoptions)
  }

}
