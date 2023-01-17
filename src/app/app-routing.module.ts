import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from './User/user-list/user-list.component';
import {CreateUserComponent} from './User/create-user/create-user.component';
import {UpdateUserComponent} from './User/update-user/update-user.component';
import {UserDetailsComponent} from './User/user-details/user-details.component';


import {DeviceListComponent} from './Device/device-list/device-list.component';
import {CreateDeviceComponent} from './Device/create-device/create-device.component';
import {UpdateDeviceComponent} from './Device/update-device/update-device.component';
import {DeviceDetailsComponent} from './Device/device-details/device-details.component';
import {DeviceMappingDetailsComponent} from "./DeviceMapping/devicemapping-details/devicemapping-details.component";
import {UpdateDeviceMappingComponent} from "./DeviceMapping/update-devicemapping/update-devicemapping.component";
import {CreateDeviceMappingComponent} from "./DeviceMapping/create-devicemapping/create-devicemapping.component";
import {DeviceMappingListComponent} from "./DeviceMapping/devicemapping-list/devicemapping-list.component";
import {LoginComponent} from "./login/login.component";
import {
  UserDashboardDetailsComponent
} from "./user-dashboard/user-dashboard-details.component";
import {Role} from "./services/authentication/authentication.service";
import {AuthGuard} from "./helpers/auth.guard";
import {ChatAdminComponent} from "./User/chat/chat-admin.component";
import {ChatComponentClient} from "./chat-client/chat.component";

const routes: Routes = [
  //Login Routes
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},

  //Admin Routes
  {path: 'User', component: UserListComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},
  {path: 'create-user', component: CreateUserComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},
  // {path: '', redirectTo: 'User', pathMatch: 'full'},
  {path: 'update-user/:id', component: UpdateUserComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},
  {path: 'user-details/:id', component: UserDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},

  //UserDashboard Routes
  {path: 'User-Dashboard', component: UserDashboardDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.USER],
    }},
  {path: 'chat-client', component: ChatComponentClient,
    canActivate: [AuthGuard],
    data: {
      role: [Role.USER],
    }},

  //Device Routes
  {path: 'Device', component: DeviceListComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},
  {path: 'create-device', component: CreateDeviceComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},
  // {path: '', redirectTo: 'User', pathMatch: 'full'},
  {path: 'update-device/:id', component: UpdateDeviceComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},
  {path: 'device-details/:id', component: DeviceDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},
  {path: 'chat', component: ChatAdminComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},

  //DeviceMapping Routes
  {path: 'DeviceMapping', component: DeviceMappingListComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},
  {path: 'create-devicemapping', component: CreateDeviceMappingComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},
  // {path: '', redirectTo: 'User', pathMatch: 'full'},
  {path: 'update-devicemapping/:id', component: UpdateDeviceMappingComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }},
  {path: 'devicemapping-details/:id', component: DeviceMappingDetailsComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.ADMIN],
    }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
