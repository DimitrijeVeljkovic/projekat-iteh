import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems: any;

  constructor(private _cartService: CartService,
              private _userService: UserService) { }

  ngOnInit(): void {
    this._cartService.getCartItems(this._userService.getUserId()).subscribe(
      result => {
        console.log(result);
        this.cartItems = result;
      }
    )
  }

}
