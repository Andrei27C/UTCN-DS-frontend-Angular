import { Component, OnInit } from '@angular/core';
import { DeviceMapping } from '../DeviceMapping';
import { DeviceMappingService } from '../devicemapping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-devicemapping',
  templateUrl: './create-devicemapping.component.html',
  styleUrls: ['./create-devicemapping.component.css']
})
export class CreateDeviceMappingComponent implements OnInit {

  devicemapping: DeviceMapping = new DeviceMapping();
  constructor(private devicemappingService: DeviceMappingService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveDeviceMapping(){
    this.devicemappingService.createDeviceMapping(this.devicemapping).subscribe(data =>{
      console.log(data);
      this.goToDeviceMappingList();
    },
    error => console.log(error));
  }

  goToDeviceMappingList(){
    this.router.navigate(['/DeviceMapping']);
  }

  onSubmit(){
    console.log(this.devicemapping);
    this.saveDeviceMapping();
  }
}
