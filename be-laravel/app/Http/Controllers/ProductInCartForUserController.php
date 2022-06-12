<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Cart;
use App\Http\Resources\CartCollection;

class ProductInCartForUserController extends Controller
{
    public function index($id) {
        $cart_items = Cart::get()->where('userId', $id);
        $cart = new CartCollection($cart_items);

        if (count($cart_items) == 0) {
            return response()->json('No data!', 404);
        }

        return $cart;
    }
}
