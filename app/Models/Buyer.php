<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{
    protected $fillable = ['name', 'positive_reputation', 'negative_reputation'];
}
