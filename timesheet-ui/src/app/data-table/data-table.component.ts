import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DataTableConfig } from './model/dataTableConfig';
import { TableState } from './model/tableState';
import { MissingConfigError } from './model/error';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  loading = true;
  tableState: TableState;
  items: any[];

  @Input() config: DataTableConfig;
  @Input() data: any[];

  @Output() query: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.tableState = new TableState();
  }

  ngOnInit() {
    if (this.config) {
      this.loading = !this.loading;
      this.query.emit(this.tableState);
    } else {
      throw new MissingConfigError();
    }
  }

}
