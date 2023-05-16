<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderChef extends Model
{
    protected $table = 'order_chefs';

    protected $fillable = [
        'order_id',
        'chef_id',
        'price',
    ];
}
