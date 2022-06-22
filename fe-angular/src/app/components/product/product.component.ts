import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private _dataService: DataService,
              private _userService: UserService) { }

  ngOnInit(): void {
    this.categoryForProduct().subscribe(result => this.category = result);
  }

  get userLoggedIn() {
    return this._userService.getUser();
  }

  public categoryForProduct() {
    return this._dataService.getCategoryForProduct(this.productId);
  }
}
