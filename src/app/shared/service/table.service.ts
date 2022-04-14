import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Table} from "../interfaces/table.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    protected http: HttpClient,
  ) {
  }

  getTable(key: string): Observable<Table> {
    return this.http.get<Table>(environment.baseUrl + '/api/v1/sofy-admin/' + key)
  }

  getTableData(data: {
    table: Table,
    pageIndex: number,
    pageSize: number,
    sortProperty?: string,
    sortDirection?: string
  }): Observable<any>{
    let params = new HttpParams()
      .set(data.table.pageSizeParamName, data.pageSize)
      .set(data.table.pageSizeParamName, data.pageSize)

    if (data.sortProperty){
      params = params.set(data.table.sortPropertyParamName, data.sortProperty)
    }

    if (data.sortDirection){
      params = params.set(data.table.sortDirectionParamName, data.sortDirection.toUpperCase())
    }

    return this.http.get(environment.baseUrl + data.table.url, {params: params})
  }
}
