<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chef extends Model
{
    use HasFactory;

    protected $fillable = [
        'skill_id',
        'name',
        'email',
        'address',
        'phone',
        'avatar',
        'experience_year',
        'password',
        'price',
    ];

    public function review()
    {
        return $this->belongsTo('App\Models\Review', 'chef_id', 'id');
    }
}
