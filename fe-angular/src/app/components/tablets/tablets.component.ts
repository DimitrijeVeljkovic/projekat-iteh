import { Component, OnInit } from '@angular/core';
import { TABLET_CAT_HEADING, TABLET_CAT_ID } from 'src/app/constants/app.constants';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.scss']
})
export class TabletsComponent implements OnInit {
  public tablets: any;
  public heading = TABLET_CAT_HEADING;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.allTablets().subscribe(result => this.tablets = result);
  }

  public allTablets() {
    return this._dataService.getAllProductsFromCategory(TABLET_CAT_ID);
  }

}
