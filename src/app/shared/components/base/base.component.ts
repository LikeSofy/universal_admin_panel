import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {CrudHelperService} from "../../service/crud-helper.service";
import {Router} from "@angular/router";
import {NavigationService} from "../../service/navigation.service";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(public authService: AuthService, public navigationService: NavigationService, public crudService: CrudHelperService, public router: Router) { }

  pages?: {[key: string]: string}
  openedNavigation: boolean = true

  ngOnInit(): void {
    this.navigationService.getNavigation().subscribe(data => {
      this.pages = data
    })
  }

  pagesKeys(): string[] {
    if (!this.pages)
      return []

    return Object.keys(this.pages)
  }

  navButtonClicked(key: string): void{
    this.router.navigate([key])
  }

  logout($event: MouseEvent) {
    this.authService.logout()
    this.router.navigate(['login'])
  }
}
