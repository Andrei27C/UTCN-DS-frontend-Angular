import { Component, OnInit } from '@angular/core';
import { DeviceMappingService } from '../devicemapping.service';
import { DeviceMapping } from '../DeviceMapping';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-devicemapping',
  templateUrl: './update-devicemapping.component.html',
  styleUrls: ['./update-devicemapping.component.css']
})
export class UpdateDeviceMappingComponent implements OnInit {

  id: number;
  devicemapping: DeviceMapping = new DeviceMapping();
  constructor(private devicemappingService: DeviceMappingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.devicemappingService.getDeviceMappingById(this.id).subscribe(data => {
      this.devicemapping = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.devicemappingService.updateDeviceMapping(this.id, this.devicemapping).subscribe(() =>{
      this.goToDeviceMappingList();
    }
    , error => console.log(error));
  }

  goToDeviceMappingList(){
    this.router.navigate(['/DeviceMapping']);
  }
}
