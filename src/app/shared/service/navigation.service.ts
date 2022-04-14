import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    protected http: HttpClient,
  ) {
  }

  getNavigation(): Observable<{
    [key: string]: string
  }> {
    return this.http.get<{
      [key: string]: string
    }>(environment.baseUrl + '/api/v1/sofy-admin/navigation')
  }
}
