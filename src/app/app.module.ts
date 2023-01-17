import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './User/user-list/user-list.component';
import {CreateUserComponent} from './User/create-user/create-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateUserComponent} from './User/update-user/update-user.component';
import {UserDetailsComponent} from './User/user-details/user-details.component'
import {DeviceListComponent} from "./Device/device-list/device-list.component";
import {DeviceDetailsComponent} from "./Device/device-details/device-details.component";
import {CreateDeviceComponent} from "./Device/create-device/create-device.component";
import {UpdateDeviceComponent} from "./Device/update-device/update-device.component";
import {DeviceMappingDetailsComponent} from "./DeviceMapping/devicemapping-details/devicemapping-details.component";
import {UpdateDeviceMappingComponent} from "./DeviceMapping/update-devicemapping/update-devicemapping.component";
import {DeviceMappingListComponent} from "./DeviceMapping/devicemapping-list/devicemapping-list.component";
import {CreateDeviceMappingComponent} from "./DeviceMapping/create-devicemapping/create-devicemapping.component";
import {LoginComponent} from "./login/login.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {
  UserDashboardDetailsComponent
} from "./user-dashboard/user-dashboard-details.component";
import {ChatAdminComponent} from "./User/chat/chat-admin.component";
import {RegisterComponent} from "./register/register.component";
import {ChatComponentClient} from "./chat-client/chat.component";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    DeviceListComponent,
    CreateDeviceComponent,
    UpdateDeviceComponent,
    DeviceDetailsComponent,
    DeviceMappingListComponent,
    CreateDeviceMappingComponent,
    UpdateDeviceMappingComponent,
    DeviceMappingDetailsComponent,

    LoginComponent,
    RegisterComponent,

    UserDashboardDetailsComponent,
     ChatAdminComponent,
    ChatComponentClient
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
