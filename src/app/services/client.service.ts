import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/class/client';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 private API_URL = "https://freeapi.miniprojectideas.com/api/ClientStrive/";
  constructor(private http: HttpClient) { }

  getAllClients(): Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(this.API_URL+ "GetAllClients");
  }
  addUpdate(obj: Client): Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(this.API_URL+ "AddUpdateClient", obj);
  }
  deleteClientById(id: number): Observable<ApiResponseModel>{
    return this.http.delete<ApiResponseModel>(this.API_URL+ "DeleteClientByClientId?ClientId=" + id);
  }
}
