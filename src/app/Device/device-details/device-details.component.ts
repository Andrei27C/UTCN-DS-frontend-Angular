import { Component, OnInit } from '@angular/core';
import { Device } from '../Device';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  id: number
  device: Device
  constructor(private route: ActivatedRoute, private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.device = new Device();
    this.deviceService.getDeviceById(this.id).subscribe(data => {
      this.device = data;
    });
  }

}
