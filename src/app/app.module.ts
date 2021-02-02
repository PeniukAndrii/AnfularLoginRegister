import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'auth', loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'users', loadChildren: () => import('./module/users/users.module').then(m => m.UsersModule)
      }
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClientModule, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
