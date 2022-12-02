import { Component, OnInit } from '@angular/core';
import { DeviceMapping } from '../DeviceMapping';
import { ActivatedRoute } from '@angular/router';
import { DeviceMappingService } from '../devicemapping.service';

@Component({
  selector: 'app-devicemapping-details',
  templateUrl: './devicemapping-details.component.html',
  styleUrls: ['./devicemapping-details.component.css']
})
export class DeviceMappingDetailsComponent implements OnInit {

  id: number
  devicemapping: DeviceMapping
  constructor(private route: ActivatedRoute, private devicemappingService: DeviceMappingService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.devicemapping = new DeviceMapping();
    this.devicemappingService.getDeviceMappingById(this.id).subscribe(data => {
      this.devicemapping = data;
    });
  }

}
