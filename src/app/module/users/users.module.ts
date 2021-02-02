import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserResolveService} from './service/resolve/user-resolve.service';
import {UserService} from './service/user.service';


@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [HttpClientModule],
  providers: [UserResolveService, UserService]
})
export class UsersModule { }
