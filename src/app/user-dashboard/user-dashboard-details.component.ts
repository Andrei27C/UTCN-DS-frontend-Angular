import { Component, OnInit } from '@angular/core';
import { User } from '../User/User';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../User/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-dashboard-details.component.html',
  styleUrls: ['./user-dashboard-details.component.css']
})
export class UserDashboardDetailsComponent implements OnInit {

  id: number
  user: User
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.user = JSON.parse(sessionStorage.getItem("currentUser") || '{}');
    // this.userService.getUserById(this.id).subscribe(data => {
    //   this.user = data;
    // });
  }

}
