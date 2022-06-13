<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Cart;
use \App\Models\Category;
use \App\Models\Product;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       Category::truncate();
       Product::truncate();

       $category1 = Category::create([
        'categoryName' => 'Laptop'
       ]);
       $category2 = Category::create([
        'categoryName' => 'Mobile'
       ]);
       $category3 = Category::create([
        'categoryName' => 'Tablet'
       ]);

       $product1 = Product::create([
        'productName' => 'MacBook Pro Max 16 M1',
        'price' => 850000,
        'ram' => '64GB',
        'size' => '16.2',
        'color' => 'Space Grey',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/image61ced4b9d7905.png',
        'categoryId' => 1
       ]);
       $product2 = Product::create([
        'productName' => 'MacBook Pro Max 14 M1',
        'price' => 800000,
        'ram' => '64GB',
        'size' => '14.2',
        'color' => 'Space Grey',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/image62013b264b24e.png',
        'categoryId' => 1
       ]);
       $product3 = Product::create([
        'productName' => 'MacBook Air 13',
        'price' => 300000,
        'ram' => '16GB',
        'size' => '13.3',
        'color' => 'Retina Space Grey',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/image61658411062ac.png',
        'categoryId' => 1
       ]);
       $product4 = Product::create([
        'productName' => 'MacBook Pro 13',
        'price' => 200000,
        'ram' => '8GB',
        'size' => '13.3',
        'color' => 'Gold',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/APPLE-MacBook-Pro-13-Touch-Bar-Space-Gray-MYD92CRA-.png',
        'categoryId' => 1
       ]);
       $product5 = Product::create([
        'productName' => 'MacBook Pro 14 M1',
        'price' => 350000,
        'ram' => '16GB',
        'size' => '14.2',
        'color' => 'Silver',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/image61769bde0879c.png',
        'categoryId' => 1
       ]);
       $product5 = Product::create([
        'productName' => 'iPhone 13 Mini',
        'price' => 140000,
        'ram' => '4GB',
        'size' => '5.4',
        'color' => 'Black',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/0d3e6f28dd16abf54c4d9bb64149b6df.png',
        'categoryId' => 2
       ]);
       $product7 = Product::create([
        'productName' => 'iPhone 13 Pro',
        'price' => 170000,
        'ram' => '6GB',
        'size' => '6.1',
        'color' => 'Sierra Blue',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/6aba2749dda70db337b9cace5cc664b6.png',
        'categoryId' => 2
       ]);
       $product8 = Product::create([
        'productName' => 'iPhone SE 2022',
        'price' => 70000,
        'ram' => '4GB',
        'size' => '4.7',
        'color' => 'Red',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/d232ad0651bf9857fe40176d0a46c7e2.png',
        'categoryId' => 2
       ]);
       $product9 = Product::create([
        'productName' => 'iPhone 13 Pro Max',
        'price' => 200000,
        'ram' => '6GB',
        'size' => '6.7',
        'color' => 'Green',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/60ab597e13c9e80e208bd95ac4d61987.png',
        'categoryId' => 2
       ]);
       $product10 = Product::create([
        'productName' => 'iPhone 12 Mini',
        'price' => 80000,
        'ram' => '4GB',
        'size' => '5.4',
        'color' => 'Black',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/image61f4065cc9778.png',
        'categoryId' => 2
       ]);
       $product11 = Product::create([
        'productName' => 'iPhone 11',
        'price' => 87000,
        'ram' => '4GB',
        'size' => '6.1',
        'color' => 'White',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/image61f3eeab665a4.png',
        'categoryId' => 2
       ]);
       $product12 = Product::create([
        'productName' => 'iPad Air 4',
        'price' => 90000,
        'ram' => '4GB',
        'size' => '10.9',
        'color' => 'Space Grey',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/image5f843d5400085.png',
        'categoryId' => 3
       ]);
       $product13 = Product::create([
        'productName' => 'iPad Pro',
        'price' => 157000,
        'ram' => '8GB',
        'size' => '12.9',
        'color' => 'Grey',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/image614dbb66053cb.png',
        'categoryId' => 3
       ]);
       $product14 = Product::create([
        'productName' => 'iPad Air 5',
        'price' => 94000,
        'ram' => '8GB',
        'size' => '10.9',
        'color' => 'Purple',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/6727f477e2c5e03c2b96f6c05b238eab.png',
        'categoryId' => 3
       ]);
       $product15 = Product::create([
        'productName' => 'iPad 9',
        'price' => 73000,
        'ram' => '3GB',
        'size' => '10.2',
        'color' => 'Silver',
        'imageUrl' => 'https://img.gigatron.rs/img/products/large/image615194d9df9b8.png',
        'categoryId' => 3
       ]);


    }
}
