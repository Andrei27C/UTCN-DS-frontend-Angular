import { Component, OnInit } from '@angular/core';
import { Device } from '../Device';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {

  device: Device = new Device();
  constructor(private deviceService: DeviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveDevice(){
    this.deviceService.createDevice(this.device).subscribe(data =>{
      console.log(data);
      this.goToDeviceList();
    },
    error => console.log(error));
  }

  goToDeviceList(){
    this.router.navigate(['/Device']);
  }

  onSubmit(){
    console.log(this.device);
    this.saveDevice();
  }
}
