import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {Login} from '../interfaces/auth.interfaces';
import {Form} from "../interfaces/form.interface";
import {FormService} from "./form.service";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ACCESS_TOKEN_KEY: string = "access_token"
  apiUrl: string = "/api/v1/auth/"

  constructor(
    private http: HttpClient,
    private formService: FormService,
    private router: Router,
  ) {
  }

  getLoginForm(): Observable<Form>{
    return this.http.get<Form>(environment.baseUrl + '/api/v1/sofy-admin/login')
  }

  login(request: FormGroup, form: Form): Observable<any> {
    return this.formService.sendForm(request, form).pipe(tap(data => {
        localStorage.setItem(this.ACCESS_TOKEN_KEY, data.token)
      })
    )
  }

  isAuthenticated(): boolean {
    let token = this.findToken()
    return token != null
  }

  findToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY)
  }

  logout(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY)
    this.router.navigate([''])
  }
}
