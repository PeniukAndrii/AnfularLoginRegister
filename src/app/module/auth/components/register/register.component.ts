import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DbService} from '../../service/db.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login = new FormControl('', [Validators.required, Validators.minLength(2)]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);

  regForm = new FormGroup({
    login: this.login,
    password: this.password
  });

  constructor(private dbService: DbService, private router: Router) {
  }

  ngOnInit(): void {
  }

  tryLogin(): void {
    this.dbService.login.push({login: this.regForm.controls.login.value, password: this.regForm.controls.password.value});
    if (this.regForm.valid){
      this.router.navigate(['auth']);
    }
  }
}
