<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    protected $fillable = [
        'user_id',
        'code',
        'total',
        'status',
        'note',
    ];

    public function chefs() {
        return $this->belongsToMany('App\Models\Chef', 'order_chefs', 'order_id', 'chef_id');
    }

    public function order_chefs() {
        return $this->hasMany('App\Models\OrderChef', 'order_id', 'id');
    }

    public function user() {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }
}
