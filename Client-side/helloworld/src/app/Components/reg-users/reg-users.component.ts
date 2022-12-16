import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-reg-users',
  templateUrl: './reg-users.component.html',
  styleUrls: ['./reg-users.component.css']
})
export class RegUsersComponent implements OnInit {





  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
