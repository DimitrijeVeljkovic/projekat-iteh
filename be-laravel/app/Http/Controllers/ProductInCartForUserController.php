<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Cart;
use \App\Models\Product;
use App\Http\Resources\CartCollection;

class ProductInCartForUserController extends Controller
{
    public function index($id) {
        $cart_items = Cart::get()->where('userId', $id);

        if (count($cart_items) == 0) {
            return response()->json('No data!', 404);
        }

        for($i = 0; $i < count($cart_items); $i++) {
            $cart_items[$i]['product'] = Product::get()->where('id', $cart_items[$i]['productId'])[strval($cart_items[$i]['productId'] - 1)];
        }

        return $cart_items;
    }
}
