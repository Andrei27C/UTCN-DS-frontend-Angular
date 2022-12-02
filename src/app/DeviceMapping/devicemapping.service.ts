import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {DeviceMapping} from './DeviceMapping';

@Injectable({
  providedIn: 'root'
})
export class DeviceMappingService {

  private baseURL = "http://localhost:5024/api/DeviceMapping";

  constructor(private httpClient: HttpClient) { }

  getDeviceMappingList(): Observable<DeviceMapping[]>{
    return this.httpClient.get<DeviceMapping[]>(`${this.baseURL}`);
  }

  createDeviceMapping(user: DeviceMapping): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getDeviceMappingById(id: number): Observable<DeviceMapping>{
    return this.httpClient.get<DeviceMapping>(`${this.baseURL}/${id}`);
  }

  updateDeviceMapping(id: number, user: DeviceMapping): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  deleteDeviceMapping(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
