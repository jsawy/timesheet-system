import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../model/project';
import { OrderByPipe } from '../pipe/order-by.pipe';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  tableState: TableState = new TableState();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getHeroes();
    this.tableState.enableSearch = true;
    this.tableState.enableSort = true;

    this.tableState.tableCol.push(new TableCol('Project Number', 'number').enableSearch().enableSort());
    this.tableState.tableCol.push(new TableCol('Name', 'name').enableSearchWithField('type'));
    this.tableState.tableCol.push(new TableCol('Type', 'type'));
    this.tableState.tableCol.push(new TableCol('Paid', 'paid'));
    this.tableState.tableCol.push(new TableCol('Edit', null));
  }

  getHeroes(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  sort(col: TableCol): void {
    if (col.sortable) {
      if (this.tableState.sort.field !== col.sortField) {
        this.tableState.sort.direction = false;
      } else {
        this.tableState.sort.direction = !this.tableState.sort.direction;
      }
      this.tableState.sort.field = col.sortField;
    }
  }

  sortIcon(col: TableCol): string {
    if (col.sortable) {
      if (col.sortField === this.tableState.sort.field) {
        return this.tableState.sort.direction ?  'fa-sort-desc' : 'fa-sort-asc';
      }
      return 'fa-sort';
    }
    return '';
  }

}

export class TableState {
  tableRow: TableRow;
  tableCol: TableCol[];
  sort: Sort;
  enableSort: boolean;
  enableSearch: boolean;

  constructor() {
    this.tableCol = new Array();
    this.sort = new Sort();
  }
}

export class TableRow {
  private _clickable: boolean;
  private _ngClass: string;

  clickAction(action: () => void) {
    if (this._clickable) {
      action();
    }
  }

}

export class Search {
  private _field: string;
  private _search: string;

  constructor(field: string, search: string) {
    this._field = field;
    this._search = search;
  }

  get field(): string {
    return this._field;
  }

  set field(field: string) {
    this._field = field;
  }

  get search(): string {
    return this._search;
  }

  set search(search: string) {
    this._search = search;
  }

}

export class Sort {
  private _field: string;
  private _direction: boolean;

  get field(): string {
    return this._field;
  }

  set field(field: string) {
    this._field = field;
  }

  get direction(): boolean {
    return this._direction;
  }

  set direction(direction: boolean) {
    this._direction = direction;
  }

}

export class TableCol {
  private _title: string;
  private _field: string;
  private _sortable: boolean;
  private _sortField: string;
  private _searchable: boolean;
  private _searchField: string;

  constructor(title: string, field: string) {
      this._title = title;
      this._field = field;
      this._sortable = false;
      this._searchable = false;
  }

  enableSort(): TableCol {
    this.sortable = true;
    return this;
  }

  enableSortWithField(sortField: string) {
    this.sortable = true;
    this.sortField = sortField;
    return this;
  }

  enableSearch(): TableCol {
    this.searchable = true;
    return this;
  }

  enableSearchWithField(searchField: string): TableCol {
    this.searchable = true;
    this.searchField = searchField;
    return this;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get field(): string {
    return this._field;
  }

  set field(field: string) {
    this._field = field;
  }

  get sortable(): boolean {
    return this._sortable;
  }

  set sortable(sortable: boolean) {
    this._sortable = sortable;
  }

  get sortField(): string {
    if (this._sortField) {
      return this._sortField;
    }
    return this._field;
  }

  set sortField(sortField: string) {
    this._sortField = sortField;
  }

  get searchable(): boolean {
    return this._searchable;
  }

  set searchable(searchable: boolean) {
    this._searchable = searchable;
  }

  get searchField(): string {
    if (this._searchField) {
      return this._searchField;
    }
    return this._field;
  }

  set searchField(searchField: string) {
    this._searchField = searchField;
  }

}
