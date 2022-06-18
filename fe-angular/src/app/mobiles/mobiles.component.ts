import { Component, OnInit } from '@angular/core';
import { MOBILE_CAT_ID } from '../constants/app.constants';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit {
  public mobiles: any;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.allMobiles().subscribe(result => this.mobiles = result);
  }

  public allMobiles() {
    return this._dataService.getAllProductsFromCategory(MOBILE_CAT_ID);
  }

}
