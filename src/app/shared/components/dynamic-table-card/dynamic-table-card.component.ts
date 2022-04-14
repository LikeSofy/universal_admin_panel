import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from "../../service/crud.service";
import {Table} from "../../interfaces/table.interface";

@Component({
  selector: 'app-dynamic-table-card',
  templateUrl: './dynamic-table-card.component.html',
  styleUrls: ['./dynamic-table-card.component.scss']
})
export class DynamicTableCardComponent {
  @Input() table!: Table
}
