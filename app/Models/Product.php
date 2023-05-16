<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = [
        'name',
        'slug',
        'content',
        'status',
        'is_hot',
        'quantity',
        'price',
        'sale_price',
        'total_rating',
        'total_number',
        'chef_id',
    ];

    public function product_images() {
        return $this->hasMany('App\Models\ProductImage', 'product_id', 'id');
    }
}
