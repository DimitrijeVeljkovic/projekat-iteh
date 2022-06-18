import { Component, OnInit } from '@angular/core';
import { ALL_PRODUCTS_HEADING } from 'src/app/constants/app.constants';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public allProducts: any;
  public heading = ALL_PRODUCTS_HEADING;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.getAllProducts().subscribe(result => this.allProducts = result);
  }

  public getAllProducts() {
    return this._dataService.getAllProducts();
  }

}
