import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productId: number;
  @Input() productName: string;
  @Input() price: number;
  @Input() ram: string;
  @Input() size: string;
  @Input() color: string;
  @Input() imageUrl: string;
  @Input() categoryId: number;

  public category: any;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.categoryForProduct().subscribe(result => this.category = result);
  }

  public categoryForProduct() {
    return this._dataService.getCategoryForProduct(this.productId);
  }
}
