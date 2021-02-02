import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DbService} from '../../service/db.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  loginInvalid = false;

  mainForm = new FormGroup({
    login: this.login,
    password: this.password
  });

  constructor(private dbService: DbService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  tryLogin(): void{
    const find = this.dbService.login.filter(value =>
      value.login.toString() === this.mainForm.controls.login.value.toString() &&
      value.password.toString() === this.mainForm.controls.password.value.toString());
    if (find.length > 0){
      this.router.navigate(['users'], {
        state: find
      });
    }
    else {
      this.loginInvalid = true;
    }
  }


  Register(): void {
    this.router.navigate(['register'], {relativeTo: this.activatedRoute});
  }
}
