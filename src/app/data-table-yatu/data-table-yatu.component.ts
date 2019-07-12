import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { DataTableYatuDataSource, DataTableYatuItem } from './data-table-yatu-datasource';

@Component({
  selector: 'data-table-yatu',
  templateUrl: './data-table-yatu.component.html',
  styleUrls: ['./data-table-yatu.component.css']
})
export class DataTableYatuComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableYatuItem>;
  dataSource: DataTableYatuDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'amount'];

  ngOnInit() {
    this.dataSource = new DataTableYatuDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
