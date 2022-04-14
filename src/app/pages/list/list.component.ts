import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {TableService} from "../../shared/service/table.service";
import {Table} from "../../shared/interfaces/table.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  table?: Table

  constructor(private tableService: TableService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['model'] == null) {
        return
      }

      let model: string = params['model']

      this.tableService.getTable(model).subscribe(data => {
        this.table = data
      })
    })
  }

}
