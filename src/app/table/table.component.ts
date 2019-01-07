import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  date: string;
  error_id: number;
  error_code: string;
  error_message: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {error_id: 1, date: '12 Dec, 2018', error_code: 'code', error_message: 'Message'},
  {error_id: 2, date: '12 Dec, 2018', error_code: 'code', error_message: 'Message'},
  {error_id: 3, date: '12 Dec, 2018', error_code: 'code', error_message: 'Message'},
  {error_id: 4, date: '12 Dec, 2018', error_code: 'code', error_message: 'Message'},
  {error_id: 5, date: '12 Dec, 2018', error_code: 'code', error_message: 'Message'}
];
