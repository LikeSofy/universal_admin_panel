import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.findToken();

    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
    }

    return next.handle(req).pipe(tap({
      error: err => {
        if (err.error.status == 403)
          this.router.navigate(['login'])
      }
    }));
  }

}
