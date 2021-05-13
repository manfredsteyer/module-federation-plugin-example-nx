import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [AuthLibComponent, LoginComponent],
  imports: [
  ],
  exports: [AuthLibComponent]
})
export class AuthLibModule { }
