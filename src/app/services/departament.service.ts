import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departament } from '../interfaces/Departament';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private url = "http://localhost:5044/api/Departament"
  
  constructor(private _httpClient: HttpClient) { }
  
  getAll(): Observable<Departament[]>{
    return this._httpClient.get<Departament[]>(this.url);
  }
  
  getItem(id: number): Observable<Departament>{
    return this._httpClient.get<Departament>(`${this.url}/${id}`);
  }

  createDepartament(departament:Departament):Observable<any>{
    return this._httpClient.post<any>(this.url, departament); 
  }

  updateDepartament(id:number, departament:Departament):Observable<any>{
    return  this._httpClient.put<any>(`${this.url}/${id}`, departament);
  }

  deleteDepartament(id:number):Observable<any>{
    return this._httpClient.delete<any>(`${this.url}/${id}`);
  }


}
