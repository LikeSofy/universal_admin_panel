import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormService} from "./form.service";
import {MatDialog} from "@angular/material/dialog";
import {CrudService} from "./crud.service";

@Injectable({
  providedIn: 'root'
})
export class CrudHelperService {
  private services: Map<string, CrudService<any>> = new Map()

  constructor(private router: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private formService: FormService) {
  }

  private addService(service: CrudService<any>){
    this.services.set(service.key, service)
  }

  findService(model: string): CrudService<any> | undefined {
    return this.services.get(model)
  }

  findPagesList(): { label: string, key: string }[] {
    let pages: { label: string, key: string }[] = []
    for (let key of this.services.keys()) {
      pages.push({label: this.services.get(key)!.label, key: key})
    }

    return pages;
  }
}
