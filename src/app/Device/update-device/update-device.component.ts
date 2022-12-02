import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../Device';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {

  id: number;
  device: Device = new Device();
  constructor(private deviceService: DeviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.deviceService.getDeviceById(this.id).subscribe(data => {
      this.device = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.deviceService.updateDevice(this.id, this.device).subscribe(data =>{
      this.goToDeviceList();
    }
    , error => console.log(error));
  }

  goToDeviceList(){
    this.router.navigate(['/Device']);
  }
}
