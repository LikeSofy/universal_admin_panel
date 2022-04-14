import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/service/auth.service";
import {Router} from "@angular/router";
import {Form} from "../../shared/interfaces/form.interface";
import {FormGroup} from "@angular/forms";
import {FormService} from "../../shared/service/form.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm?: Form
  errors?: {[key: string] : string}
  commonError?: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.getLoginForm().subscribe(data => {
      console.log(data)
      this.loginForm = data
    })
  }

  onSubmit(event: FormGroup) {
    this.commonError = undefined
    if (this.loginForm)
      this.authService.login(event, this.loginForm).subscribe({
        complete: () => {
          this.router.navigate(['dashboard'])
        },
        error: err => {
          this.commonError = err.error?.error
        }
      })
  }
}
