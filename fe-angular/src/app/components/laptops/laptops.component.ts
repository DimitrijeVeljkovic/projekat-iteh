import { Component, OnInit } from '@angular/core';
import { LAPTOP_CAT_HEADING, LAPTOP_CAT_ID } from '../../constants/app.constants';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit {
  public laptops: any;
  public heading = LAPTOP_CAT_HEADING;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.allLaptops().subscribe(result => this.laptops = result);
  }

  public allLaptops() {
    return this._dataService.getAllProductsFromCategory(LAPTOP_CAT_ID);
  }

}
