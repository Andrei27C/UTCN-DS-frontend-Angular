import { Component, OnInit } from '@angular/core';
import { User } from '../User'
import { UserService } from '../user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private async getUsers(){
    await this.userService.getUserList().subscribe(data => {
      this.users = data;
    });
  }

  userDetails(id: number){
    this.router.navigate(['user-details', id]);
  }

  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    })
  }
}
