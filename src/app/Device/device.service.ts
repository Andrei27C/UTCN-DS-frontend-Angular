import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Device } from './Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private baseURL = "http://localhost:5024/api/Device";

  constructor(private httpClient: HttpClient) { }

  getDeviceList(): Observable<Device[]>{
    return this.httpClient.get<Device[]>(`${this.baseURL}`);
  }

  createDevice(user: Device): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getDeviceById(id: number): Observable<Device>{
    return this.httpClient.get<Device>(`${this.baseURL}/${id}`);
  }

  updateDevice(id: number, user: Device): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  deleteDevice(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
