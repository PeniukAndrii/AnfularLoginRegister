import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserResolveService} from './service/resolve/user-resolve.service';

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {users: UserResolveService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
