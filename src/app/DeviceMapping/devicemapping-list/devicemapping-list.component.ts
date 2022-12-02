import { Component, OnInit } from '@angular/core';
import { DeviceMapping } from '../DeviceMapping'
import { DeviceMappingService } from '../devicemapping.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-devicemapping-list',
  templateUrl: './devicemapping-list.component.html',
  styleUrls: ['./devicemapping-list.component.css']
})
export class DeviceMappingListComponent implements OnInit {

  devicemappings: DeviceMapping[];

  constructor(private devicemappingService: DeviceMappingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDeviceMappings();
  }

  private async getDeviceMappings(){
    await this.devicemappingService.getDeviceMappingList().subscribe(data => {
      this.devicemappings = data;
    });
  }

  devicemappingDetails(id: number){
    this.router.navigate(['devicemapping-details', id]);
  }

  updateDeviceMapping(id: number){
    this.router.navigate(['update-devicemapping', id]);
  }

  deleteDeviceMapping(id: number){
    this.devicemappingService.deleteDeviceMapping(id).subscribe(data => {
      console.log(data);
      this.getDeviceMappings();
    })
  }
}
