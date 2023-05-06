<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chef extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'skill_id',
        'name',
        'address',
        'phone_number',
        'experience_year',
    ];
}
