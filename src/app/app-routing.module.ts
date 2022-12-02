import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './User/user-list/user-list.component';
import { CreateUserComponent } from './User/create-user/create-user.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';


import { DeviceListComponent } from './Device/device-list/device-list.component';
import { CreateDeviceComponent } from './Device/create-device/create-device.component';
import { UpdateDeviceComponent } from './Device/update-device/update-device.component';
import { DeviceDetailsComponent } from './Device/device-details/device-details.component';
import {DeviceMappingDetailsComponent} from "./DeviceMapping/devicemapping-details/devicemapping-details.component";
import {UpdateDeviceMappingComponent} from "./DeviceMapping/update-devicemapping/update-devicemapping.component";
import {CreateDeviceMappingComponent} from "./DeviceMapping/create-devicemapping/create-devicemapping.component";
import {DeviceMappingListComponent} from "./DeviceMapping/devicemapping-list/devicemapping-list.component";

const routes: Routes = [
  //User Routes
  {path: 'User', component: UserListComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: '', redirectTo: 'User', pathMatch: 'full'},
  {path: 'update-user/:id', component: UpdateUserComponent},
  {path: 'user-details/:id', component: UserDetailsComponent},

  //Device Routes
  {path: 'Device', component: DeviceListComponent},
  {path: 'create-device', component: CreateDeviceComponent},
  // {path: '', redirectTo: 'User', pathMatch: 'full'},
  {path: 'update-device/:id', component: UpdateDeviceComponent},
  {path: 'device-details/:id', component: DeviceDetailsComponent},

  //DeviceMapping Routes
  {path: 'DeviceMapping', component: DeviceMappingListComponent},
  {path: 'create-devicemapping', component: CreateDeviceMappingComponent},
  // {path: '', redirectTo: 'User', pathMatch: 'full'},
  {path: 'update-devicemapping/:id', component: UpdateDeviceMappingComponent},
  {path: 'devicemapping-details/:id', component: DeviceMappingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
