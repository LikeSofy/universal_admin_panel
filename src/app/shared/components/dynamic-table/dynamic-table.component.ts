import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {Sort, SortDirection} from "@angular/material/sort";
import {ActivatedRoute, Router} from "@angular/router";
import {Table} from "../../interfaces/table.interface";
import {TableService} from "../../service/table.service";
import {Button} from "../../interfaces/button.interface";

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnChanges, OnInit {

  @Input() table!: Table
  displayedColumns!: string[]

  data!: any[]
  countElements: number = 0
  pageSize: number = 10
  availablePageSize: number[] = [5, 10, 20]
  pageIndex: number = 0
  order?: string
  direction: SortDirection = 'desc'

  constructor(private router: Router, private route: ActivatedRoute, private tableService: TableService) {
  }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.availablePageSize = this.table.availablePageSize ?? this.availablePageSize
    this.pageSize = this.table.currentPageSize ?? this.pageSize

    this.displayedColumns = this.tableColumnKeys()
    this.update()
  }

  tableColumnKeys(): string[] {
    return Object.keys(this.table.columns)
  }

  update() {
    this.tableService.getTableData({
      table: this.table,
      pageSize: this.pageSize,
      pageIndex: this.pageIndex,
      sortProperty: this.order,
      sortDirection: this.direction
    }).subscribe(data => {
      this.data = data.content
      this.countElements = data.totalElements
    })
  }

  onPageChanged(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize
    this.pageIndex = pageEvent.pageIndex
    this.update()
  }

  sort(event: Sort) {
    this.order = event.active
    this.direction = event.direction
    this.update()
  }

  addButtonClicked() {
    this.router.navigate([this.table.addFormKey], {relativeTo: this.route})
  }

  tableButtonClicked(button: Button | undefined, element: any) {
    if (button!.type == 'open-form-button'){
      this.router.navigate([button!.formKey, element.id], {relativeTo: this.route})
    }
    else if (button!.type == 'update-button'){

    }
  }
}
