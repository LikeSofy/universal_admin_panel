import {Observable} from "rxjs";
//import {PopupConfirmComponent} from "../components/popup-confirm/popup-confirm.component";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SortDirection} from "@angular/material/sort";
import {Page} from "../interfaces/pageble.interfase";
import {HttpClient, HttpEvent, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export abstract class CrudService<T> {
  constructor(
    protected apiUrl: string,
    protected http: HttpClient,
    protected router: Router,
    protected dialog: MatDialog,
    protected snackBar: MatSnackBar
  ) {
  }

  abstract get key(): string

  abstract get label(): string

  /*protected deleteWithDialog(id: number, name: string): Observable<any> {
    const dialogRef = this.dialog.open(PopupConfirmComponent, {
      width: '450px',
      data: {
        title: "Delete",
        text: "Are you sure you want to remove the following: " + name
      }
    });

    return new Observable(subscriber => {
      dialogRef.afterClosed().subscribe(result => {
        if (result == true) {
          this.delete(id).subscribe({
              next: data => {
                subscriber.next(data)
              },
              error: error => {
                console.log(error)
                this.snackBar?.open("Error", "ok", {duration: 3000})
                subscriber.error(error)
              },
              complete: () => {
                this.snackBar?.open("Deleted", "ok", {duration: 3000})
                subscriber.complete()
              }
            }
          )
        }
      });
    });
  }*/

  findAll(page?: number, limit?: number, order?: string, direction?: SortDirection, search?: string): Observable<Page<T>> {
    page = page ?? 0
    limit = limit ?? 1000

    let params = new HttpParams()
      .set('page', page)
      .set('size', limit)
    if (direction) {
      params = params.append('order', direction.toUpperCase())
    }
    if (order) {
      params = params.append('sort', order)
    }
    return this.http.get<Page<T>>(environment.baseUrl + this.apiUrl, {params: params})
  }

  save(request: any, id?: number): Observable<HttpEvent<any>> {
    let formData: FormData = new FormData()

    let files: Map<string, File> = this.excludeFiles(request)

    for (let fileKey of files.keys()) {
      formData.append(fileKey, files.get(fileKey) as File)
    }

    formData.append("json", JSON.stringify(request))

    if (id == null) {
      return this.http.post<void>(environment.baseUrl + this.apiUrl, formData, {
        observe: "events",
        reportProgress: true
      })
    }

    return this.http.put<void>(environment.baseUrl + this.apiUrl + id, formData, {
      observe: "events",
      reportProgress: true
    })
  }

  delete(id: number): Observable<HttpEvent<void>> {
    return this.http.delete<void>(environment.baseUrl + this.apiUrl + id, {observe: "events", reportProgress: true})
  }

  findRequestById(id: number): Observable<any> {
    return this.http.get(environment.baseUrl + this.apiUrl + id + "/data-for-change")
  }


  excludeFiles(data: any, key?: string): Map<string, File> {
    if (key) {
      key.concat('.')
    } else {
      key = ''
    }

    let files: Map<string, File> = new Map<string, File>();
    for (let iterableKey of Object.keys(data)) {
      if (data[iterableKey] instanceof File) {
        files.set(key.concat(iterableKey), data[iterableKey])
        data[key] = undefined
      } else if (data[key] instanceof Object) {
        this.excludeFiles(data[key], key).forEach(((value, key1) => {
          files.set(key1, value)
        }))
      }
    }

    return files
  }
}
