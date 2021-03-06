import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { InvitationKeyCheckerService } from 'src/app/services/invitation-key-checker.service';
import { UserService } from 'src/app/services/user.service';
import { SharedModule } from '../../shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    SharedModule,
    MatSnackBarModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    RecaptchaModule,
    TranslateModule,
    RecaptchaFormsModule
  ],
  providers: [
    InvitationKeyCheckerService,
    UserService,
  ]
})
export class RegisterModule { }
