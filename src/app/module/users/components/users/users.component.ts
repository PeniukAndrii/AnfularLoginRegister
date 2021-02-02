import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../interface/i-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  loginUser: any[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.loginUser = this.router.getCurrentNavigation().extras.state as any;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({users}) => this.users = users);
  }

}
