import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborator } from '../interfaces/Colabortor';

@Injectable({
  providedIn: 'root'
})
export class ColaboratorService {

  private url = "http://localhost:8080/api/colaborator"

  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<Colaborator[]>{
    return this._httpClient.get<Colaborator[]>(this.url);
  }

  getbyDepartament(departamentId: number): Observable<Colaborator[]>{
    return this._httpClient.get<Colaborator[]>(`${this.url}/departament?departamentId=${departamentId}`);
  }
  
  getOne(id: number): Observable<Colaborator>{
    return this._httpClient.get<Colaborator>(`${this.url}?id=${id}`);
  }

  createCollaborator(colaborator: Colaborator): Observable<any>{
    return  this._httpClient.post<any>(this.url, colaborator);
  }

  updateCollaborator(id:number, colaborator: Colaborator): Observable<any>{
    return  this._httpClient.put<any>(`${this.url}?id=${id}`, colaborator);
  }

  deleteCollaborator(id:number): Observable<any>{
    return  this._httpClient.delete<any>(`${this.url}?id=${id}`)
  }

}
