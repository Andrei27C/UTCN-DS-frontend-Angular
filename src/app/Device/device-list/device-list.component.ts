import { Component, OnInit } from '@angular/core';
import { Device } from '../Device'
import { DeviceService } from '../device.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  devices: Device[];

  constructor(private deviceService: DeviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDevices();
  }

  private async getDevices(){
    await this.deviceService.getDeviceList().subscribe(data => {
      this.devices = data;
    });
  }

  deviceDetails(id: number){
    this.router.navigate(['device-details', id]);
  }

  updateDevice(id: number){
    this.router.navigate(['update-device', id]);
  }

  deleteDevice(id: number){
    this.deviceService.deleteDevice(id).subscribe(data => {
      console.log(data);
      this.getDevices();
    })
  }
}
