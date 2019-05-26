import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { DataTableConfig } from '../data-table/model/dataTableConfig';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  dtConfig: DataTableConfig = {
    tableClass: 'hello',
    selectColumn: true,
    refresh: true,
    persist: true,
    selectAll: false,
    headerTemplate: '',
    pagination: false,
    row: {
      selectable: false,
      expandable: false,
      expandTemplate: '',
      click: (t) => {},
      doubleClick: (t) => {},
      class: '',
      toolTip: (t) => ''
    },
    columns: [{property: '',
      header: '',
      visible: true,
      sortable: true,

      cellClass: '',
      action: (item) => {}
    }]
  };

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
